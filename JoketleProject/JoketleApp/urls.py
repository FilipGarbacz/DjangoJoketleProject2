from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name='home'),
    path('play/', views.play, name='play'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('save_leaderboard/', views.save_leaderboard_entry, name='save_leaderboard'),
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='Login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
     ]