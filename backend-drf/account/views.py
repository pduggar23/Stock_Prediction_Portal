from django.shortcuts import render
from .serializers import UserSerializers
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializers
    permission_classes=[AllowAny]

class ProtectedView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        user = request.user
        responce = {
            'status':f'Request was permitted {user.username}'
        }
        return Response(responce)