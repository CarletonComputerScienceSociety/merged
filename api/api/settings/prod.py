from .base import *

DEBUG = False

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "community_db",
        "USER": "postgres",
        "PASSWORD": "1234",
        "HOST": "db",
        "PORT": 5432,
    }
}
