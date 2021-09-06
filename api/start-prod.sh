#!/bin/bash

export DJANGO_SETTINGS_MODULE=api.settings.prod
python manage.py migrate
python manage.py collectstatic --no-input

gunicorn \
    -w 4 \
    -b 0.0.0.0:8000 \
    api.wsgi:application
