from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from .views import *

urlpatterns = [
    path("events/", EventListAll),
    path("events/<id>", EventById, name="id"),
    path("organizations/", OrganizationListAll),
    path("organizations/<title>", OrganizationListByTitle, name="title"),
    path("members/", MembersList),
    path("announcements/", AnnouncementList),
]
