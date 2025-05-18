from django.db import models

class Joker(models.Model):
    name = models.CharField(max_length=50)
    cost = models.IntegerField()
    rarity = models.CharField(max_length=20)
    unlock_start = models.BooleanField(default=False)
    type = models.CharField(max_length=20)
    activate = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class LeaderboardEntry(models.Model):
    username = models.CharField(max_length=50)
    time = models.FloatField()
    guesses = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} - {self.time} seconds - {self.guesses} guesses - {self.date}"