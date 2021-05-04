from django.contrib import admin
from .models import Announcement, Event, Member, Organization

# Register your models here.
@admin.register(Event)
class EventResource(admin.ModelAdmin):
    list_display = ["id", "title", "start_time", "end_time"]


@admin.register(Organization)
class Organization(admin.ModelAdmin):
    list_display = ["id", "title", "website"]


@admin.register(Member)
class Member(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "title", "email"]


@admin.register(Announcement)
class Announcement(admin.ModelAdmin):
    list_display = ["id", "title", "preview", "link"]
