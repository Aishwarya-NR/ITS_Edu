# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-22 15:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='name',
        ),
    ]
