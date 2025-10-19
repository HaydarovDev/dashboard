from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Collection, UserPurchase

User = get_user_model()


class CollectionSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField()

    class Meta:
        model = Collection
        fields = [
            "id",
            "name",
            "image",
            "owner",
            "price",
            "description",
            "is_active",
            "created_at",
        ]


class UserPurchaseSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    collection = CollectionSerializer()

    class Meta:
        model = UserPurchase
        fields = [
            "id",
            "user",
            "collection",
            "purchase_date",
            "price_paid",
            "status",
        ]
