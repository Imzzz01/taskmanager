from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Task, Category
from django.views.decorators.http import require_POST
from django.contrib.auth.forms import UserCreationForm 
@login_required
def dashboard(request):
    tasks = Task.objects.filter(user=request.user)
    
    # Filtering
    priority = request.GET.get('priority')
    if priority:
        tasks = tasks.filter(priority=priority)
    
    category_id = request.GET.get('category')
    if category_id:
        tasks = tasks.filter(category_id=category_id)
    
    search_query = request.GET.get('search')
    if search_query:
        tasks = tasks.filter(title__icontains=search_query)
    
    categories = Category.objects.filter(user=request.user)
    return render(request, 'tasks/dashboard.html', {
        'tasks': tasks,
        'categories': categories
    })

@login_required
def add_task(request):
    if request.method == 'POST':
        form = TaskForm(request.user, request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('dashboard')
    else:
        form = TaskForm(request.user)
    
    return render(request, 'tasks/task_form.html', {'form': form})

@login_required
def edit_task(request, task_id):
    task = get_object_or_404(Task, id=task_id, user=request.user)
    if request.method == 'POST':
        form = TaskForm(request.user, request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
    else:
        form = TaskForm(request.user, instance=task)
    
    return render(request, 'tasks/task_form.html', {'form': form})

@login_required
def delete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id, user=request.user)
    if request.method == 'POST':
        task.delete()
        return redirect('dashboard')
    return render(request, 'tasks/confirm_delete.html', {'task': task})

@login_required
def toggle_task(request, task_id):
    task = get_object_or_404(Task, id=task_id, user=request.user)
    task.completed = not task.completed
    task.save()
    return redirect('dashboard')

@login_required
@require_POST
def add_category(request):
    form = CategoryForm(request.POST)
    if form.is_valid():
        category = form.save(commit=False)
        category.user = request.user
        category.save()
        return JsonResponse({
            'success': True,
            'category_id': category.id,
            'category_name': category.name
        })
    return JsonResponse({'success': False})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard')  # Change to your desired redirect
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})