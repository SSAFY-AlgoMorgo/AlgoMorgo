import json
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pymysql

@api_view(['GET'])
def recommendProblem(request, userId):
    print("in :"+userId)
    response = {
        "data" : {
            "user_id" : userId,
            "problem_id" : len(userId)
        }
    }
    return Response(response, status = status.HTTP_200_OK);