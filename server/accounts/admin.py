from django.contrib import admin
from .models import User, Role


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ("name", "description")
    search_fields = ("name",)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "email",
        "phone",
        "city",
        "country",
        "date_joined",
        "is_active",
        "wallet_balance",
    )
    search_fields = ("username", "email", "phone")
    list_filter = ("is_active", "date_joined", "city", "country")
    readonly_fields = ("date_joined",)
