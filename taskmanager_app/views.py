from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.


def dashboard(request):
    return render(request, 'taskmanager/tasks/dashboard.html')








