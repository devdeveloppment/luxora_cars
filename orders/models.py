from django.db import models
from vehicles.models import Vehicle
from accounts.models import User

class Order(models.Model):
    ORDER_TYPES = [
        ('purchase', 'Achat Direct'),
        ('reservation', 'Réservation'),
        ('test_drive', 'Demande d\'essai'),
    ]
    PAYMENT_STATUS = [
        ('pending', 'En attente'),
        ('confirmed', 'Confirmé'),
        ('failed', 'Échoué'),
    ]
    vehicle = models.ForeignKey(Vehicle, on_delete=models.SET_NULL, null=True, related_name='orders')
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders_made')
    order_type = models.CharField(max_length=20, choices=ORDER_TYPES)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    deposit_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default='pending')
    cinetpay_transaction_id = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.id} for {self.vehicle}"
