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