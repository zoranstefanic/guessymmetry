from random import choice
from datetime import datetime
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from tasks.models import *
from math import pi, sin
from project.settings import BASE_DIR
from ccdc.space_groups import space_groups
import pickle
import json
import tasks.receivers

NUMBER_OF_GAMES = 10

plane_groups = ['p1', 
                'p2', 
                'pm', 'pg', 'cm', 'p2mm', 'p2mg', 'p2gg', 'c2mm', 
                'p4', 'p4mm', 'p4gm', 
                'p3', 'p3m1', 'p31m', 'p6', 'p6mm'
                ]
plane_groups_z = [1,2,2,2,4,4,4,4,8,4,8,8,3,6,6,6,12]
pgz = dict(zip(plane_groups,plane_groups_z))

@login_required
def task1play(request):
    task = Task1Play.objects.filter(user=request.user).latest('start')
    if request.method == "POST":
        if request.is_ajax():
            answer = request.POST.get('pg')
            right_answer = request.POST.get('right_answer')
            if answer == right_answer:
                task.right += 1
                if task.right >= NUMBER_OF_GAMES:
                    task.end = datetime.now()
                    task.finished = True
                    task.duration = task.end - task.start
                task.save()
                return redirect('task1play')
            else:
                task.wrong += 1
                task.save()
                return JsonResponse({'right':task.right, 'wrong': task.wrong})
    else:
        if task.right >= NUMBER_OF_GAMES:
            finished_tasks = Task1Play.objects.filter(user=request.user).filter(finished=True)
            return render(request,'task1complete.html', 
                           {'task':task,
                            'num_of_games':NUMBER_OF_GAMES,
                            'finished_tasks':finished_tasks})
        return render(request, 'task1play.html', 
                {'group': choice(plane_groups), 
                 'plane_groups':plane_groups,
                 'right':task.right,
                 'wrong':task.wrong,
                 'start':task.start,
                })

@login_required
def task1complete(request):
    return render(request, 'task1complete.html')

@login_required
def task1_view(request):
    return render(request, 'task1.html', { 'group': choice(plane_groups), 'plane_groups':plane_groups})

@login_required
def packmol(request,chebi=None):
    if request.method == "POST":
        if request.is_ajax():
            mol = request.POST.get('mol')
            cell = request.POST.get('cell')
            chebi_id = request.POST.get('chebi_id')
            group = request.POST.get('group')
            mol = mol_to_str(mol) # Change to format required by javascript in packmol.html
            n = len(eval(mol)['atoms'])
            z = pgz[group]
            p = 22*22*pi 
            a, b, gamma = eval(cell)[0], eval(cell)[1], eval(cell)[2]
            score = (z * n * p) / (a * b * sin((gamma/180)*pi))  
            play = PackmolPlay.objects.create(mol=mol,cell=cell,chebi=chebi_id,user=request.user,score=score,group=group)
            #f = open('/home/huk/apps/tgk/project/File','a')
            #f.write(mol_to_str(mol)+'\n'+cell+'\n'+chebi_id+'\n'+group+'\n')
            #f.close()
        return redirect('packmol')
    else:
        molecules = pickle.load(open(BASE_DIR/'chebi/molecules.pkl','rb'))
        if not chebi:
            chebi = choice(list(molecules.keys()))
        molecule = molecules.get(chebi)
        if not molecule:
            molecule = choice(list(molecules.keys()))
        return render(request, 'packmol.html', { 
                'group': choice(plane_groups), 
                'plane_groups':plane_groups,
                'molecule': molecule,
                'chebi_id': chebi,
                })

@login_required
def csdmol(request, csd_id=None):
    if request.method == "POST":
        if request.is_ajax():
            mol = request.POST.get('mol')
            cell = request.POST.get('cell')
            csd_id = request.POST.get('csd_id')
            group = request.POST.get('group')
            mol = mol_to_str(mol) # Change to format required by javascript in packmol.html
            n = len(eval(mol)['atoms'])
            z = pgz[group]
            p = 22*22*pi 
            a, b, gamma = eval(cell)[0], eval(cell)[1], eval(cell)[2]
            score = (z * n * p) / (a * b * sin((gamma/180)*pi))  
            play = PackmolPlay.objects.create(mol=mol,cell=cell,chebi=chebi_id,user=request.user,score=score,group=group)
        return redirect('csdmol')
    else:
        molecules = json.load(open(BASE_DIR/'ccdc/molecules.json','r'))
        if not csd_id:
            csd_id = choice(list(molecules.keys()))
        else:
            csd_id = molecules[csd_id]
        molecule = molecules.get(csd_id)
        return render(request, 'csdmol.html', { 
                'molecule': molecule,
                'space_groups':space_groups,
                'sg':molecule['sg'],
                'csd_id': csd_id,
                })

def mol_to_str(s):
    s = s.split(',')
    d = {'atoms':[]}
    for i in range(int(len(s)/3)):
        d['atoms'] += [[round(float(s[3*i]),3), round(float(s[3*i+1]),3), s[3*i+2]]]
    return str(d)

@login_required
def packmol_view(request,id):
    pp = PackmolPlay.objects.get(id=id)
    return render(request, 'packmol_view.html', { 
            'group': pp.group, 
            'plane_groups':plane_groups,
            'molecule': pp.mol,
            'cell': pp.cell,
            'chebi_id': pp.chebi,
            })

@login_required
def task1replay(request):
    Task1Play.objects.create(user=request.user)
    return redirect('task1play')

@login_required
def scoreboard(request):
    all_tasks = Task1Play.objects.filter(finished=True) 
    return render(request, 'scoreboard.html', { 'tasks':all_tasks})

@login_required
def scoreboard_htcc5(request):
    users = User.objects.filter(date_joined__gt=datetime(2023,4,1))
    all_tasks = Task1Play.objects.filter(finished=True).filter(user__in=users) 
    return render(request, 'scoreboard.html', { 'tasks':all_tasks})

@login_required
def packmol_scoreboard(request):
    packmols = PackmolPlay.objects.order_by('-score')
    return render(request, 'packmol_scoreboard.html', { 'packmols':packmols})
