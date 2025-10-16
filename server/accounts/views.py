from django.db import IntegrityError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import LoginSerializer, RegisterSerializer
from rest_framework import status
from .models import User
import random


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        verification_code = "".join(random.choices("0123456789", k=4))
        user.email_code = verification_code
        user.save()

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                refresh = RefreshToken.for_user(user)
                return Response(
                    {
                        "access": str(refresh.access_token),
                        "refresh": str(refresh),
                        "message": "Ro'yxatdan o'tish muvaffaqiyatli!",
                    }
                )
            return Response(serializer.errors, status=400)

        except IntegrityError as e:
            return Response(
                {
                    "error": "Bu email yoki username allaqachon mavjud.",
                    "email": ["Bu email allaqachon ro'yxatdan o'tgan."],
                    "username": ["Bu username allaqon ro'yxatdan o'tgan."],
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": "Ro'yxatdan o'tishda xatolik yuz berdi."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class VerifyEmailView(GenericAPIView):
    def post(self, request):
        email = request.data.get("email")
        code = request.data.get("code")

        try:
            user = User.objects.get(email=email, email_code=code)
            user.is_verified = True
            user.email_code = ""
            user.save()
            return Response(
                {"message": "Email muvaffaqiyatli tasdiqlandi."},
                status=status.HTTP_200_OK,
            )
        except User.DoesNotExist:
            return Response(
                {"error": "Noto'g'ri email yoki kod."},
                status=status.HTTP_400_BAD_REQUEST,
            )
