from django.shortcuts import render
from rest_framework import viewsets
from .models import Collection, UserPurchase
from .serializers import CollectionSerializer, UserPurchaseSerializer
from rest_framework.permissions import IsAuthenticated


class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    permission_classes = [IsAuthenticated]


class UserPurchaseViewSet(viewsets.ModelViewSet):
    queryset = UserPurchase.objects.all()
    serializer_class = UserPurchaseSerializer
    permission_classes = [IsAuthenticated]
