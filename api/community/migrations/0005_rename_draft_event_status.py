# Generated by Django 3.2 on 2021-05-03 23:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("community", "0004_auto_20210503_2303"),
    ]

    operations = [
        migrations.RenameField(
            model_name="event",
            old_name="draft",
            new_name="status",
        ),
    ]
