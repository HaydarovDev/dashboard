from django.db import IntegrityError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import LoginSerializer, RegisterSerializer
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer


class RegisterView(CreateAPIView):
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
