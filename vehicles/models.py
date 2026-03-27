from django.db import models
from accounts.models import User

class Vehicle(models.Model):
    STATUS_CHOICES = [
        ('available', 'Disponible'),
        ('reserved', 'Réservé'),
        ('sold', 'Vendu'),
    ]
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=15, decimal_places=2)
    mileage = models.IntegerField(default=0)
    fuel_type = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    color_ext = models.CharField(max_length=50)
    color_int = models.CharField(max_length=50, blank=True)
    power_hp = models.IntegerField(default=0)
    engine_cc = models.IntegerField(default=0)
    description = models.TextField()
    condition = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='available')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vehicles_for_sale')
    created_at = models.DateTimeField(auto_now_add=True)
    views_count = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    new = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

class VehicleImage(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='vehicles/')
    is_primary = models.BooleanField(default=False)
    order_index = models.IntegerField(default=0)

class VehicleSpec(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='specs')
    spec_key = models.CharField(max_length=50)
    spec_value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.spec_key}: {self.spec_value}"

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites')
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='favorited_by')
    created_at = models.DateTimeField(auto_now_add=True)
