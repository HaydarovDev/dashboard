from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CollectionViewSet, UserPurchaseViewSet

router = DefaultRouter()
router.register(r"collections", CollectionViewSet)
router.register(r"user-purchases", UserPurchaseViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
