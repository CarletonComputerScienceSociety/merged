from django.db.models import fields
from community.models import Event,Organization
from rest_framework import serializers



class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "title"]

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields =  ["id","title","description"]