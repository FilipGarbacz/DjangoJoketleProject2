from django.shortcuts import render , HttpResponse

def home(request):
    return HttpResponse("Simea swiat") 