from django.contrib import admin
from .models import Listing

@admin.register(Listing)
class ListingAdmin(admin.ModelAdmin):
    list_display = ('vehicle', 'seller', 'listing_type', 'status', 'created_at', 'expires_at')
    list_filter = ('listing_type', 'status')
    search_fields = ('vehicle__brand', 'vehicle__model', 'seller__username')
    actions = ['approve_listings', 'reject_listings']

    def approve_listings(self, request, queryset):
        queryset.update(status='approved')
    approve_listings.short_description = "Approve selected listings"

    def reject_listings(self, request, queryset):
        queryset.update(status='rejected')
    reject_listings.short_description = "Reject selected listings"
