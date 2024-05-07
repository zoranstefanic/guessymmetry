from __future__ import unicode_literals
from importlib import import_module

from django.apps import AppConfig


class TasksConfig(AppConfig):
    name = 'tasks'

    def ready(self):
        import_module("tasks.receivers")
