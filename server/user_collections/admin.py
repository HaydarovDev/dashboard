from django.contrib import admin
from .models import Collection, UserPurchase


@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "owner", "created_at")


@admin.register(UserPurchase)
class UserPurchaseAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "collection", "purchase_date", "price_paid", "status")
    search_fields = ("user__username", "collection__name")
    ordering = ("-purchase_date",)


# admin.site.register(UserPurchase)
