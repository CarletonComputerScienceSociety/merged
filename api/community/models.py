from django.db import models

class Member(models.Model):
    first_name = models.CharField(max_length=200)  # Represents the members first name
    last_name = models.CharField(max_length=200)  # Represents the members last name
    title = models.CharField(max_length=150) #Represents the members Position
    email = models.EmailField(max_length=255, unique=True, db_index=True) #Represents the members email
    def __str__(self):
        return self.first_name+" "+self.last_name

STATUS_CHOICES = (
    ('finalized','FINALIZED'),
    ('in planning', 'IN PLANNING'),
)

class Event(models.Model):
    title = models.CharField(max_length=150)  # Represents the Title of the event
    description = models.TextField(
        null=True, blank=True
    )  # Represents the event description
    start_time = models.DateTimeField(
        null=True, blank=True
    )  # Represents Start time of event
    end_time = models.DateTimeField(
        null=True, blank=True
    )  # Represents End time of event
    location = models.TextField(
        max_length=200, null=True, blank=True
    )  # Represents location of Event
    link = models.CharField(max_length=300)  # Represents the event link
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default='in planning')
      # Represents if the event is in planning or finalized

    def __str__(self):
        return self.title


class Organization(models.Model):
    title = models.CharField(max_length=150)  # Represents the title of the Organization
    description = models.TextField(
        null=True, blank=True
    )  # Represents the description of the Organization
    website = models.CharField(max_length=300)  # Represents the organization website
    facebook = models.CharField(max_length=250)  # Represents the organization facebook
    instagram = models.CharField(
        max_length=250
    )  # Represents the organization instagram
    discord = models.CharField(max_length=250)  # Represents the organization discord
    slack = models.CharField(max_length=250)  # Represents the organization slack
    members = models.ManyToManyField(Member) #This links various members to single organisation

    def __str__(self):
        return self.title
