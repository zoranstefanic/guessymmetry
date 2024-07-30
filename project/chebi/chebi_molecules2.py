d = extract_molecules(30000)
from chebi_molecules import *
d = extract_molecules(30000)
d
/len d
pickle.dump(d,open('mol_dict.pkl','wb'))
ls -lrt
ls -lrth
d
d.keys()
k = d.keys()
import random
random.choice(k)
random.choice(list(k))
d[random.choice(list(k))]
m1 = d[random.choice(list(k))]
m1
m1 = d[random.choice(list(k))]
m1
m1 = d[random.choice(list(k))]
m1
m1 = d[random.choice(list(k))]
m1
m1
random.choice(d)
m1 = d[random.choice(list(k))]
m1
m1 = d[random.choice(list(k))]
m1
d
/len d
dd = {}
for k,v in d.items():
    if len(v['atoms'])>4 and len(v['atoms'])<10:
        print(k)
for k,v in d.items():
    try:
        if len(v['atoms'])>4 and len(v['atoms'])<10:
            print(k)
    except:
        pass
for k,v in d.items():
    try:
        if len(v['atoms'])>4 and len(v['atoms'])<10:
            dd[k] = v
    except:
        pass
dd
/len dd
pickle.dump(dd,open('mol_dict_4_to_10_atoms.pkl','wb'))
ls -lrt
k = dd.keys()
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
m1 = dd[random.choice(list(k))]
m1
molecules
molecules = pickle.load(open('molecules.pkl','rb'))
molecules
molecules = molecules.dropna()
molecules
molecules = pickle.load(open('molecules.pkl','rb'))
mol100 = molecules['NAME']
mol100
mol100 = mol100.dropna()
mol100
mol100.sample(1)
mol100.sample(1)
mol100.sample(1)
mol100.sample(1)
mol100.sample(10)
for smi in mol100.sample(10):
    print(smi)
    m = Chem.MolFromSmiles(smi)
    mol = Chem.MolToMolBlock(m)
    lines = mol.split('\n')
    for l in lines:
        coor = coor_re.match(l)
        bond = bond_re.match(l)
        if coor:
            print(coor.groups())
        elif bond:
            print(bond.groups())
for smi in mol100.sample(10):
    print(smi)
    m = Chem.MolFromSmiles(smi)
    mol = Chem.MolToMolBlock(m)
    lines = mol.split('\n')
    for l in lines:
        coor = coor_re.match(l)
        bond = bond_re.match(l)
        if coor:
            print(coor.groups())
        elif bond:
            print(bond.groups())
dd
/len dd
item = {'atoms': [('-0.7500', '1.2990', '0.0000', 'C'),
   ('0.0000', '0.0000', '0.0000', 'C'),
   ('1.5000', '0.0000', '0.0000', 'C'),
   ('2.2500', '1.2990', '0.0000', 'C'),
   ('-0.7500', '-1.2990', '0.0000', 'N'),
   ('0.0000', '2.5981', '0.0000', 'O'),
   ('-2.2500', '1.2990', '0.0000', 'O')],
  'bonds': [('1', '2', '1', '0'),
   ('2', '3', '2', '0'),
   ('3', '4', '1', '0'),
   ('2', '5', '1', '0'),
   ('1', '6', '2', '0'),
   ('1', '7', '1', '0')]}
item['atoms']
map(list,item['atoms'])
list(map(list,item['atoms']))
def atom_xy_type(t):
    return [float(t[0]),float(t[1]),t[3]]
list(map(atom_xy_type,item['atoms']))
dd
def map_bonds(t):
    return [int(t[0]),int(t[1]),int(t[2])]
list(map(map_bonds,item['bonds']))
for k,v in dd.items():
     dd[k]['atoms'] = list(map(atom_xy_type,v['atoms']))
     dd[k]['bonds'] = list(map(map_bonds,v['bonds']))
dd
pickle.dump(dd,open('mol_dict_4_to_10_atoms.pkl','wb'))
ls -lrth
%history -f chebi_molecules2.py
