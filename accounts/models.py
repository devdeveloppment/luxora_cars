from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = [
        ('buyer', 'Acheteur'),
        ('seller', 'Vendeur'),
        ('admin', 'Administrateur'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='buyer')
    is_verified = models.BooleanField(default=False)
    preferences_json = models.JSONField(default=dict, blank=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.username
