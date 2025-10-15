from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


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
        return user
