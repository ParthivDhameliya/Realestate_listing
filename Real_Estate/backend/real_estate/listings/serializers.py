from .models import Listing
from rest_framework import serializers

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'slug', 'bedrooms', 'bathrooms', 'sqft', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'photo_main')

class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'