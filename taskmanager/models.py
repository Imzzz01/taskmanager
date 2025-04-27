from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Task(models.Model):
   
    PRIORITY_CHOICES = [
        ('H', 'High'),
        ('M', 'Medium'),
        ('L', 'Low'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(null=True, blank=True)
    completed = models.BooleanField(default=False)
    priority = models.CharField(
        max_length=1,
        choices=PRIORITY_CHOICES,
        default='M')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
   
    
class Meta:
        ordering = ["-created_at"]

def __str__(self):
         return self.title
def __str__(self):
         return self.due_date and timezone.now().date > self.due_date

