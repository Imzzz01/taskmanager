from django.contrib.auth.decorators import login_required  # Add this line
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import YourForm 
from .models import YourModel 

# Create your views here.
@login_required
def dashboard(request):
    # Get filter parameters from request
    priority = request.GET.get('priority', '')
    category_id = request.GET.get('category', '')
    search = request.GET.get('search', '')
    
    # Base query for tasks belonging to the current user
    tasks = Task.objects.filter(user=request.user)
    
    # Apply filters if provided
    if priority:
        tasks = tasks.filter(priority=priority)
    if category_id:
        tasks = tasks.filter(category_id=category_id)
    if search:
        tasks = tasks.filter(title__icontains=search)
    
    # Get all categories for the user
    categories = Category.objects.filter(user=request.user)
    
    context = {
        'tasks': tasks,
        'categories': categories,
    }
    return render(request, 'taskmanager/dashboard.html', context)