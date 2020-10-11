#from django.contrib import admin
from django.urls import path
#from django.conf import settings
#from projects import views
from . import views #blog view is inside same folder so . can be used

app_name = "projects"

urlpatterns = [
    path('', views.IT4203, name = 'IT4203'),
    path('googlelist', views.googleList, name = 'googleList'),
    path('googleSingle', views.googleSingle, name = 'googleSingle'),
    path('singleBookDetails', views.singleBookDetails, name = 'singleBookDetails'),
    path('googleBookshelf', views.googleBookshelf, name = 'googleBookshelf'),
    #path('', views.all_blogs, name = 'all_blogs'), dont need this I think...

]
