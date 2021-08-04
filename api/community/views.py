from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework import status, generics
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *
from .paginations import *
from django_filters import rest_framework as filters

"""
Acronyms in TIME FILTER
gte is for greater than equal to
lte is for less than equal to
"""


class EventFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name="id")
    title = filters.CharFilter(field_name="title")
    start_time = filters.DateTimeFilter(field_name="start_time", lookup_expr="gte")
    end_time = filters.DateTimeFilter(field_name="end_time", lookup_expr="lte")
    organization = filters.ModelChoiceFilter(
        field_name="organization",
        to_field_name="slug",
        queryset=Organization.objects.all(),
    )
    # To add Category Filter
    class Meta:
        model = Event
        fields = ["id", "title", "start_time", "end_time", "organization"]


class EventList(generics.GenericAPIView):  # List all job events, or create a new  event
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    pagination_class = CustomPagination
    filter_backends = [DjangoFilterBackend]
    filter_class = EventFilter

    def get(self, request):
        events = self.get_queryset()
        events = self.filter_queryset(events)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(events, request)
        serializer = EventSerializer(
            result_page, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):  # POST REQUEST
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class OrganizationFilter(filters.FilterSet):
    id = filters.CharFilter(field_name="id")
    title = filters.CharFilter(field_name="title")

    class Meta:
        model = Organization
        fields = ["id", "title"]


class OrganizationList(generics.GenericAPIView):  # List all Organizations
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_class = OrganizationFilter

    def get(self, request):
        organization = self.get_queryset()
        organization = self.filter_queryset(organization)
        serializer = OrganizationSerializer(organization, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MembersList(generics.GenericAPIView):  # List all Members
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    pagination_class = CustomPagination

    def get(self, request):
        member = self.get_queryset()
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(member, request)
        serializer = MemberSerializer(result_page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AnnouncementFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name="id")
    publication_date = filters.DateFilter(
        field_name="publication_date", lookup_expr="gte"
    )
    # To add Category Filter
    class Meta:
        model = Announcement
        fields = ["id", "publication_date"]


class AnnouncementList(generics.GenericAPIView):  # List all Announcements
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    pagination_class = CustomPagination
    filter_backends = [DjangoFilterBackend]
    filter_class = AnnouncementFilter

    def get(self, request):
        announcement = self.get_queryset()
        announcement = self.filter_queryset(announcement)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(announcement, request)
        serializer = AnnouncementSerializer(result_page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class NewsItemFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name="id")
    title = filters.CharFilter(field_name="title")
    # To add Category Filter
    class Meta:
        model = NewsItem
        fields = ["id", "title"]


class NewsItemList(generics.GenericAPIView):  # List all New Items
    serializer_class = NewsItemSerializer
    queryset = NewsItem.objects.all()
    pagination_class = CustomPagination
    filter_backends = [DjangoFilterBackend]
    filter_class = NewsItemFilter

    def get(self, request):
        newsitem = self.get_queryset()
        newsitem = self.filter_queryset(newsitem)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(newsitem, request)
        serializer = NewsItemSerializer(result_page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
