#from django.contrib import admin
from django.urls import path
#from django.conf import settings
#from projects import views
from . import views #blog view is inside same folder so . can be used

app_name = "blog"

urlpatterns = [
    path('', views.all_blogs, name = 'all_blogs'),
    path('<int:blog_id>', views.detail, name = 'detail')
]
