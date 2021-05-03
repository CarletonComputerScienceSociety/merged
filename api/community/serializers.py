from django.db.models import fields
from community.models import Event, Organization, Member
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "title"]


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "title", "description"]

class MemberSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = Member
        fields = ["first_name","last_name", "title", "email"]
