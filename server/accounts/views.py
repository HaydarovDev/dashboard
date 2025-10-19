from django.db import IntegrityError
from django.core.mail import send_mail
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import (
    LoginSerializer,
    RegisterSerializer,
    VerifySerializer,
    ForgotPasswordSerializer,
    ResetPasswordSerializer,
)
from rest_framework import status
from rest_framework.views import APIView
from .models import User
import random


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

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
                        "email": user.email,
                        "verification_required": True,
                    },
                    status=status.HTTP_201_CREATED,
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except IntegrityError as e:
            return Response(
                {
                    "error": "Bu email yoki username allaqachon mavjud.",
                    "email": ["Bu email allaqachon ro'yxatdan o'tgan."],
                    "username": ["Bu username allaqachon ro'yxatdan o'tgan."],
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"error": "Ro'yxatdan o'tishda xatolik yuz berdi."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class VerifyView(APIView):
    def post(self, request):
        serializer = VerifySerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"message": "Email muvaffaqiyatli tasdiqlandi."},
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]
    serializer_class = ForgotPasswordSerializer

    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Parolni tiklash emaili yuborildi."},
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, uidb64, token):
        serializer = ResetPasswordSerializer(
            data=request.data, context={"uidb64": uidb64, "token": token}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Parol muvaffaqiyatli yangilandi."},
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
