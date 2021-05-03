from django.db.models import fields
from community.models import Event, Organization, Member, Announcement
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "title"]


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "title", "description"]


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ["id", "title", "preview"]


class MemberSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = Member
        fields = ["first_name", "last_name", "title", "email"]
