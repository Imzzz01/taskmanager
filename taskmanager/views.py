from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Task, Category
from .forms import TaskForm, CategoryForm
# Create your views here.

@login_required
def dashboard(request):
    task = Task.objects.filter(user=request.user)

# filtering

priority = request.GET.get("priority")
if priority:
    tasks = tasks.filter(priority=priority)















def task_list(request):
    return render(request, 'taskmanager/task_list.html')