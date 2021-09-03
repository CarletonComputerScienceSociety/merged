from .base import *

DEBUG = False

for i in range(1, 255):
    ALLOWED_HOSTS.append(f"192.168.30.{i}")

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
