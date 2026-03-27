from django.contrib import admin
from .models import Vehicle, VehicleImage, VehicleSpec, Favorite

class VehicleImageInline(admin.TabularInline):
    model = VehicleImage
    extra = 1

class VehicleSpecInline(admin.TabularInline):
    model = VehicleSpec
    extra = 1

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('brand', 'model', 'year', 'price', 'status', 'featured', 'new')
    list_filter = ('brand', 'status', 'featured', 'new')
    search_fields = ('brand', 'model', 'color_ext')
    inlines = [VehicleImageInline, VehicleSpecInline]

admin.site.register(Favorite)
