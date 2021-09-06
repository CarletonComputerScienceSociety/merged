import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
import environ

from .base import *

env = environ.Env(
    # set casting, default value
    MERGED_DATABASE_HOST=(str, "localhost")
)

DEBUG = False

for i in range(1, 255):
    ALLOWED_HOSTS.append(f"192.168.30.{i}")

ALLOWED_HOSTS.append("api.merged.staging.discretemath.ca")

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "community_db",
        "USER": "postgres",
        "PASSWORD": "1234",
        "HOST": env("MERGED_DATABASE_HOST"),
        "PORT": 5433,
    }
}

sentry_sdk.init(
    dsn="https://4609de8fe4ce48d3aaea5836065763ff@o990880.ingest.sentry.io/5947698",
    integrations=[DjangoIntegration()],
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=1.0,
    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True,
)
