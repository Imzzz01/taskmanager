from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Task, Category
from .forms import TaskForm, CategoryForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
# Create your views here.


def dashboard(request):
    return render(request, 'dashboard.html')








