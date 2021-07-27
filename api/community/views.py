from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework import status, generics
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *
from django_filters import rest_framework as filters

'''
Acronyms in TIME FILTER
gte is for greater than equal to
lte is for less than equal to
'''

class EventFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name="id")
    start_time = filters.DateTimeFilter(field_name='start_time',lookup_expr="gte")
    end_time = filters.DateTimeFilter(field_name='end_time',lookup_expr="lte")

    class Meta:
        model = Event
        fields = ['id','title','start_time','end_time','slugs']


class EventListAll(
    generics.GenericAPIView
):  # List all job events, or create a new  event
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = [DjangoFilterBackend]
    filter_class = EventFilter
    #filterset_fields = {'start_time':['gte', 'lte', 'exact', 'gt', 'lt']}

    def get(self, request):
        events = self.get_queryset()
        events = self.filter_queryset(events)
        serializer = EventSerializer(events, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):  # POST REQUEST
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class OrganizationListAll(generics.GenericAPIView):  # List all Organizations
    serializer_class = OrganizationSerializer

    def get(self, request):
        organization = Organization.objects
        serializer = OrganizationSerializer(organization, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# List of Organizations by Title/Name
class OrganizationListByTitle(generics.GenericAPIView):
    serializer_class = OrganizationSerializer

    def get(self, request, title):
        event = Organization.objects.filter(title=title)
        serializer = OrganizationSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MembersList(generics.GenericAPIView):  # List all Members
    serializer_class = MemberSerializer

    def get(self, request):
        member = Member.objects
        serializer = MemberSerializer(member, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AnnouncementList(generics.GenericAPIView):  # List all Announcements
    serializer_class = AnnouncementSerializer

    def get(self, request):
        announcement = Announcement.objects
        serializer = AnnouncementSerializer(announcement, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class NewsItemList(generics.GenericAPIView):  # List all New Items
    serializer_class = NewsItemSerializer

    def get(self, request):
        newsitem = NewsItem.objects
        serializer = NewsItemSerializer(newsitem, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
