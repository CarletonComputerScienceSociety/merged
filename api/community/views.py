from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from .models import Announcement, Event, Organization, Member
from .serializers import EventSerializer, OrganizationSerializer, MemberSerializer


@csrf_exempt
def EventList(request):
    """
    List all job events, or create a new event.
    """
    if request.method == "GET":
        events = Event.objects
        serializer = EventSerializer(events, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def OrganizationList(request):
    """
    List all Organizations.
    """
    if request.method == "GET":
        organization = Organization.objects
        serializer = OrganizationSerializer(organization, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def MembersList(request):
    """
    List all Members.
    """
    if request.method == "GET":
        member = Member.objects
        serializer = MemberSerializer(member, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def AnnouncementList(request):
    """
    List all Announcements.
    """
    if request.method == "GET":
        member = Announcement.objects
        serializer = MemberSerializer(member, many=True)
        return JsonResponse(serializer.data, safe=False)
