from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=150)
