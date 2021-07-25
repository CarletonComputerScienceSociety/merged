from django.test import TestCase
from community.models import Event
from rest_framework.test import APITestCase
from rest_framework import status


class EventEndpoints(APITestCase):
    def setUp(self):
        Event.objects.create(title="test")

    def testUsersPost(self):
        response = self.client.get("/api/events/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 1)
