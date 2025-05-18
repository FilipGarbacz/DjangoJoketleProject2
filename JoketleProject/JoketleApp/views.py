from django.shortcuts import render , HttpResponse

def home(request):
    return render(request, 'Home.html')

def play(request):
    return render(request, 'Play.html')
