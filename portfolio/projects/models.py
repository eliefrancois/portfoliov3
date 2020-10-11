from django.db import models

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length = 100) ##This will hold the title of the project up to 100 characters
    description = models.CharField(max_length = 250) ##This will hold the description of the project up to 250 characters
    image = models.ImageField(upload_to = 'projects/images') ##This will hold the image uploaded to represent the project,upload_to will upload the image to specified location
    url = models.URLField(blank=True) ##This will hold the URL to bring user to speciifed website, the blank property allows URL to be an optional add-on

    def __str__(self):
        return self.title
