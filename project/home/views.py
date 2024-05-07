from django.shortcuts import render
from django.contrib.auth.models import User
import datetime

def homepage(request):
    return render(request, 'homepage.html')

def names(request):
    d = datetime.date(2023,4,1)
    users = User.objects.filter(date_joined__gt=d) 
    return render(request, 'names.html', {'users':users})

def elena(request):
    return render(request, 'elena.html')
    
