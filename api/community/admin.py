from django.contrib import admin
from .models import Event

# Register your models here.
@admin.register(Event)
class EventResource(admin.ModelAdmin):
    list_display = ["id", "title"]
