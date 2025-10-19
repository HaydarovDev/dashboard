from rest_framework import serializers, generics, status
from rest_framework.response import Response
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
import random

User = get_user_model()


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "image",
            "email",
            "phone",
            "collections",
            "city",
            "country",
            "wallet_balance",
            "role",
            "date_joined",
            "is_verified",
        ]


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError(
                {"email": "Bu email bilan foydalanuvchi topilmadi."}
            )

        if not user.is_verified:
            raise serializers.ValidationError(
                {
                    "account": "Hisobingiz tasdiqlanmagan. Iltimos, emailingizni tekshiring."
                }
            )

        if not user.check_password(password):
            raise serializers.ValidationError({"password": "Noto'g'ri parol"})

        if not user.is_active:
            raise serializers.ValidationError(
                {"account": "Hisobingiz faollashtirilmagan."}
            )

        refresh = RefreshToken.for_user(user)

        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {"email": "Bu email allaqachon ro'yxatdan o'tgan."}
            )
        return email

    def validate_username(self, username):
        if " " in username:
            raise serializers.ValidationError(
                {"username": "Foydalanuvchi nomida bo'sh joy bo'lishi mumkin emas."}
            )
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError(
                {"username": "Bu foydalanuvchi nomi allaqachon ro'yxatdan o'tgan."}
            )
        return username

    def validate_password(self, password):
        if len(password) < 6:
            raise serializers.ValidationError(
                {"password": "Parol kamida 6 ta belgidan iborat bo'lishi kerak."}
            )
        return password

    def create(self, validated_data):

        user = User.objects.create_user(
            email=validated_data["email"],
            username=validated_data.get("username", validated_data["email"]),
            password=validated_data["password"],
        )
        email_code = str(random.randint(1000, 9999))
        user.email_code = email_code
        user.save()

        subject = "Email Verification"
        message = f"Your verification code is: {email_code}"
        send_mail(
            subject, message, "azikdev23@gmail.com", [user.email], fail_silently=False
        )
        return user


class VerifySerializer(serializers.Serializer):
    email = serializers.EmailField()
    code = serializers.CharField(max_length=4)

    def validate(self, data):
        email = data.get("email")
        code = data.get("code")

        user = User.objects.filter(email=email, email_code=code).first()
        if not user:
            raise serializers.ValidationError({"error": "Noto'g'ri email yoki kod."})

        return data

    def save(self):
        email = self.validated_data["email"]
        code = self.validated_data["code"]
        user = User.objects.get(email=email, email_code=code)
        user.is_verified = True
        user.email_code = ""
        user.save()
        return user


class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, email):
        if not User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {"email": "Bu email bilan foydalanuvchi topilmadi."}
            )
        return email

    def save(self):
        email = self.validated_data["email"]
        user = User.objects.get(email=email)

        token_generator = PasswordResetTokenGenerator()
        token = token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))

        reset_link = f"http://localhost:8000/api/auth/reset-password/{uid}/{token}/"

        subject = "Parolni tiklash so'rovi"
        message = f"Parolingizni tiklash uchun quyidagi havolani bosing: {reset_link}"
        send_mail(
            subject, message, "azikdev23@gmail.com", [user.email], fail_silently=False
        )
        return user


class ResetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(write_only=True)

    def validate_new_password(self, new_password):
        if len(new_password) < 6:
            raise serializers.ValidationError(
                {"new_password": "Parol kamida 6 ta belgidan iborat bo'lishi kerak."}
            )
        return new_password

    def validate(self, data):
        uidb64 = self.context.get("uidb64")
        token = self.context.get("token")

        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            raise serializers.ValidationError(
                {"error": "Foydalanuvchi topilmadi yoki yaroqsiz UID."}
            )

        token_generator = PasswordResetTokenGenerator()
        if not token_generator.check_token(user, token):
            raise serializers.ValidationError(
                {"error": "Yaroqsiz yoki muddati o'tgan token."}
            )

        return data

    def save(self):
        new_password = self.validated_data["new_password"]
        uidb64 = self.context.get("uidb64")

        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)

        user.set_password(new_password)
        user.save()
        return user
