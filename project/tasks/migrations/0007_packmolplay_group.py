# Generated by Django 3.1.4 on 2024-07-24 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0006_packmolplay'),
    ]

    operations = [
        migrations.AddField(
            model_name='packmolplay',
            name='group',
            field=models.CharField(default='', max_length=10),
            preserve_default=False,
        ),
    ]