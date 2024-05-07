from django.apps import AppConfig
from importlib import import_module

class HomeConfig(AppConfig):
    name = 'home'

    def ready(self):
        import_module("home.receivers")
