#!/bin/bash

export DJANGO_SETTINGS_MODULE=api.settings.prod
python manage.py migrate
python manage.py collectstatic --no-input
python manage.py runserver 0.0.0.0:8000

# gunicorn \
#     -w 2 \
#     -b 0.0.0.0:8000 \
#     api.wsgi:application
