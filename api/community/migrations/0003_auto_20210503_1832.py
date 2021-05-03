# Generated by Django 3.2 on 2021-05-03 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0002_auto_20210503_1746'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='draft',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='event',
            name='location',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='link',
            field=models.CharField(max_length=300),
        ),
    ]
