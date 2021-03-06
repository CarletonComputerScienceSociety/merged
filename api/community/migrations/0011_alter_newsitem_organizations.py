# Generated by Django 3.2 on 2021-08-15 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("community", "0010_auto_20210815_0428"),
    ]

    operations = [
        migrations.AlterField(
            model_name="newsitem",
            name="organizations",
            field=models.ManyToManyField(
                related_name="news_items", to="community.Organization"
            ),
        ),
    ]
