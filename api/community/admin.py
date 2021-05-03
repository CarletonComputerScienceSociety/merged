from django.contrib import admin
from .models import Event, Organization

# Register your models here.
@admin.register(Event)
class EventResource(admin.ModelAdmin):
    list_display = ["id", "title","start_time","end_time"]

@admin.register(Organization)
class Organization(admin.ModelAdmin):
    list_display = ["id", "title","website"]
