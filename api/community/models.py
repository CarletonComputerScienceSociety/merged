import uuid
from django.db import models
from django.db.models.base import Model
from polymorphic.models import PolymorphicModel
from django.conf import settings
from django.urls import reverse
from django.utils.text import slugify


STATUS_CHOICES = (
    ("draft", "DRAFT"),
    ("public", "PUBLIC"),
    ("cancelled", "CANCELLED")
)


class Member(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    title = models.CharField(max_length=150)
    email = models.EmailField(max_length=255, unique=True, db_index=True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Category(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Organization(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    website = models.CharField(max_length=300, blank=True)
    facebook = models.CharField(max_length=250, blank=True)
    instagram = models.CharField(max_length=250, blank=True)
    discord = models.CharField(max_length=250, blank=True)
    slack = models.CharField(max_length=250, blank=True)
    members = models.ManyToManyField(Member, blank=True)
    slug = models.SlugField(
        default="",
        editable=False,
        unique=True,
    )
    logo = models.ImageField(upload_to="logo", null=True, blank=True)
    profile_background = models.ImageField(
        upload_to="profile_background", null=True, blank=True
    )

    def save(self, *args, **kwargs):
        if self.slug == "":
            self.slug = slugify(self.title, allow_unicode=True)
        super().save(*args, **kwargs)

    def news_feed(self):
        return self.news_items.all()[:12]

    def __str__(self):
        return self.title


class NewsItem(PolymorphicModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default="public")
    external_link = models.CharField(max_length=300, blank=True)
    organizations = models.ManyToManyField(Organization, related_name="news_items")
    categories = models.ManyToManyField(Category, related_name="categories")


class Announcement(NewsItem):
    excerpt = models.CharField(
        max_length=150,
        null=True,
    )
    publication_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.title


class Event(NewsItem):
    description = models.TextField(null=True, blank=True)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)

    poster = models.ImageField(upload_to="event", null=True, blank=True)

    def __str__(self):
        return self.title
