from django.shortcuts import render
from django.http import HttpResponse
from .models import Projects

# Create your views here.
def home(request):
    projects = Projects.objects.all()
    return render(request, 'projects/home.html',{'projects':projects})

def IT4203(request):
    return render(request, 'projects/coursework.html')

def googleList(request):
    return render(request, 'projects/googlebookList.html')

def googleSingle(request):
    return render(request, 'projects/googlebookSingle.html')

def singleBookDetails(request):
    return render(request, 'projects/singleBookDetails.html')

def googleBookshelf(request):
    return render(request, 'projects/googleBookshelf.html')


