from django.urls import path
from . import views

app_name = 'Recommend'
urlpatterns = [
    path('<str:userId>', views.recommendProblem),
]
