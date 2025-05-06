from django.urls import path
from . import views

urlpatterns = [
    # No dashboard route here (it's in the main urls.py)
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    # If you have a 'task_list' URL, make sure it's defined correctly
]