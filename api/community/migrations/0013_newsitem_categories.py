# Generated by Django 3.2 on 2021-09-02 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("community", "0012_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="newsitem",
            name="categories",
            field=models.ManyToManyField(
                related_name="categories", to="community.Category"
            ),
        ),
    ]
