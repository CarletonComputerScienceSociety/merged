from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from .views import *
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Community API",
        default_version="v1",
        description="Web application for viewing all upcoming events in the Carleton CS community",
        terms_of_service="(Top Be Updated)",  # To be Changed
        contact=openapi.Contact(email="contact@ccss.com"),  # To be Changed
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("events/", EventListAll.as_view(), name="title"),
    path("organizations/", OrganizationListAll.as_view(), name="organizations"),
    path("members/", MembersList.as_view(), name="members"),
    path("announcements/", AnnouncementList.as_view(), name="announcements"),
    path("news/", NewsItemList.as_view(), name="news"),
    path("", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
