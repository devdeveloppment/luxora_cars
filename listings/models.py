from django.db import models
from vehicles.models import Vehicle
from accounts.models import User

class Listing(models.Model):
    TYPES = [
        ('standard', 'Standard (Gratuit)'),
        ('premium', 'Premium (5 000 XOF)'),
        ('featured', 'Vedette (15 000 XOF)'),
    ]
    STATUS = [
        ('pending', 'En attente'),
        ('approved', 'Approuvé'),
        ('rejected', 'Rejeté'),
    ]
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='listings')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='listings_created')
    listing_type = models.CharField(max_length=15, choices=TYPES, default='standard')
    price_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=15, choices=STATUS, default='pending')
    views_count = models.IntegerField(default=0)
    contacts_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.listing_type} Listing for {self.vehicle}"
