from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from .models import Event
from .serializers import EventSerializer

@csrf_exempt
def EventList(request):
    """
    List all job events, or create a new event.
    """
    if request.method == 'GET':
        events = Event.objects
        serializer = EventSerializer(events, many=True)
        return JsonResponse(serializer.data, safe=False)
