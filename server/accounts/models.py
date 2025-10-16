from django.db import models
from django.contrib.auth.models import AbstractUser


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    username = models.CharField(
        max_length=150,
        unique=True,
        error_messages={
            "unique": "Bu foydalanuvchi nomi allaqachon ro'yxatdan o'tgan."
        },
    )
    email = models.EmailField(
        unique=True,
        error_messages={"unique": "Bu email allaqachon ro'yxatdan o'tgan."},
    )
    email_code = models.CharField(max_length=4, blank=True, null=True)
    is_verified = models.BooleanField(default=False)
    phone = models.CharField(
        max_length=15,
        unique=True,
        blank=True,
        null=True,
        error_messages={"unique": "Bu telefon raqami allaqachon ro'yxatdan o'tgan."},
    )
    city = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    wallet_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username


class Collection(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="collection_images/")
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="collections"
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserPurchase(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("completed", "Completed"),
        ("failed", "Failed"),
        ("refunded", "Refunded"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="purchases")
    collection = models.ForeignKey(
        Collection, on_delete=models.CASCADE, related_name="purchases"
    )
    purchase_date = models.DateTimeField(auto_now_add=True)
    price_paid = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    transaction_id = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        unique_together = [
            "user",
            "collection",
        ]

    def __str__(self):
        return f"{self.user.username} - {self.collection.name}"
