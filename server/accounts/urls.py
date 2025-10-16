from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView, VerifyEmailView

urlpatterns = [
    path("login/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("register/", RegisterView.as_view(), name="register"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("verify/", VerifyEmailView.as_view(), name="verify_email"),
]
