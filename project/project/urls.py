"""web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from home import views
from tasks.views import *


urlpatterns = [
    path('', views.homepage, name="home"),
    path('elena/', views.elena, name="elena"),
    path('users/', views.names, name="names"),
    path("accounts/", include("account.urls")),
    path('admin/', admin.site.urls),
    path("task1/", task1_view, name="task1"),
    path("task1play/", task1play, name="task1play"),
    path("task1complete/", task1complete, name="task1complete"),
    path("task1replay/", task1replay, name="task1replay"),
    path("packmol/<str:chebi>/", packmol, name="packmolchebi"),
    path("packmol/", packmol, name="packmol"),
    path("csdmol/", csdmol, name="csdmol"),
    path("packmol_view/<int:id>/", packmol_view, name="packmol_view"),
    path("packmol_scoreboard/", packmol_scoreboard, name="packmol_scoreboard"),
    path("scoreboard/", scoreboard, name="scoreboard"),
    path("scoreboard_htcc5/", scoreboard_htcc5, name="scoreboard_htcc5"),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
