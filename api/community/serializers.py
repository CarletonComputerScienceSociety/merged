from django.db.models import fields
from community.models import Event, Organization, Member, Announcement, NewsItem
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "title", "description", "location", "link", "poster"]


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "title", "description"]


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ["id", "title", "link", "preview"]


class MemberSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = Member
        fields = ["first_name", "last_name", "title", "email"]


class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = ["id", "title"]
