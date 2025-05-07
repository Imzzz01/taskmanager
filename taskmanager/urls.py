from django.urls import path
from . import views

urlpatterns = [
    
    path('dashboard/', views.dashboard, name='dashboard'),
    path('register/', views.register, name='register'),
    path('task/add/', views.add_task, name='add_task'),
    path('task/edit/<int:task_id>/', views.edit_task, name='edit_task'),
    path('task/delete/<int:task_id>/', views.delete_task, name='delete_task'),
]