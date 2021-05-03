from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=150) #Represents the Title of the event
    description = models.TextField(null=True, blank=True) #Represents the event description
    start_time = models.DateTimeField(null=True, blank=True) #Represents Start time of event
    end_time = models.DateTimeField(null=True, blank=True) #Represents End time of event
    location = models.TextField(max_length=200,null=True, blank=True) #Represents location of Event
    link = models.CharField(max_length=300) # Represents the event link
    draft = models.BooleanField(null=False, default=True) # Represents if the event is concrete or draft

    def __str__(self):
        return self.title

class Organization(models.Model):
    title = models.CharField(max_length=150) #Represents the title of the Organization
    description = models.TextField(null=True, blank=True) #Represents the description of the Organization
    website = models.CharField(max_length=300) # Represents the organization website
    facebook = models.CharField(max_length=250) # Represents the organization facebook
    instagram = models.CharField(max_length=250) # Represents the organization instagram
    discord = models.CharField(max_length=250) # Represents the organization discord
    slack = models.CharField(max_length=250) # Represents the organization slack

    def __str__(self):
        return self.title