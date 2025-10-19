from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
import random


def get_default_avatar():
    default_avatar = {
        "default_avatar/image1.png",
        "default_avatar/image2.png",
        "default_avatar/image3.png",
        "default_avatar/image4.png",
        "default_avatar/image5.png",
    }
    return random.choice(list(default_avatar))


class CustomUserManager(BaseUserManager):
    def create_superuser(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email majburiy maydon!")
        email = self.normalize_email(email)
        username = self.model.normalize_username(email.split("@gmail.com")[0])
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_verified = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email majburiy maydon!")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


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
    image = models.ImageField(
        upload_to="user_images/", blank=True, null=True, default=get_default_avatar
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
    collections = models.ManyToManyField(
        "user_collections.Collection", verbose_name=("Collections")
    )
    city = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    wallet_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username
