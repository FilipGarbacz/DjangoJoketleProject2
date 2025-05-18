from django.shortcuts import render , HttpResponse , redirect
from django.http import JsonResponse
from .models import LeaderboardEntry
from .forms import RegisterForm
from django.contrib.auth.decorators import login_required
import json

def home(request):
    return render(request, 'Home.html')

def play(request):
    return render(request, 'Play.html')


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login') 
    else:
        form = RegisterForm()
    return render(request, 'Register.html', {'form': form})

@login_required

def leaderboard(request):

    entries = LeaderboardEntry.objects.order_by('time', 'guesses')[:10]
    return render(request, 'leaderboard.html', {'leaderboard': entries})


@login_required
def save_leaderboard_entry(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        time_taken = float(data.get('time_taken', 0))
        guesses = int(data.get('guesses', 0))

        LeaderboardEntry.objects.create(
                username=request.user.username,
                time=time_taken,
                guesses=guesses
            )

        return JsonResponse({'message': 'Leaderboard entry saved successfully!'})

    return JsonResponse({'error': 'Invalid request method'}, status=400)