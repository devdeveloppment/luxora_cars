from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'vehicle', 'buyer', 'order_type', 'amount', 'payment_status', 'created_at')
    list_filter = ('order_type', 'payment_status')
    search_fields = ('cinetpay_transaction_id', 'buyer__username', 'vehicle__model')
