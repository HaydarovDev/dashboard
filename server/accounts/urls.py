from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    RegisterView,
    MyTokenObtainPairView,
    VerifyView,
    ForgotPasswordView,
    ResetPasswordView,
    MeView,
)


urlpatterns = [
    path("auth/login/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/verify/", VerifyView.as_view(), name="verify_email"),
    path("auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot_password"),
    path(
        "auth/reset-password/<uidb64>/<token>/",
        ResetPasswordView.as_view(),
        name="reset_password",
    ),
    path("me/", MeView.as_view(), name="me"),
]
