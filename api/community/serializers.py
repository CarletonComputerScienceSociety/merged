from django.db.models import fields
from community.models import Event, Organization, Member, Announcement, NewsItem
from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "description",
            "start_time",
            "end_time",
            "location",
            "link",
            "poster",
        ]


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "title", "description"]


class OrganizationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "title", "description", "events"]
        depth = 1


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ["id", "title", "link", "preview"]


class MemberSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = Member
        fields = ["first_name", "last_name", "title", "email"]


class NewsItemSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Event: EventSerializer,
        Announcement: AnnouncementSerializer,
    }
