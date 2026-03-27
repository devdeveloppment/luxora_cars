from django.contrib import admin
from django.urls import path
from core.views import index

urlpatterns = [
    path('admin_django/', admin.site.urls), # Renaming to avoid conflict with our custom admin
    path('', index, name='index'),
]
