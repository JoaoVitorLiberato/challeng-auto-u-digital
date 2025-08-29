import os
from flask import request, jsonify
from dotenv import load_dotenv

load_dotenv() 

class ApiKeyMiddleware:
  def __init__(self):
    self.__api_key = os.getenv("API_KEY")

  def validate(self):
    key = request.headers.get("x-api-key")

    if key != self.__api_key:
      return jsonify({ "error": "Unauthorized" }), 401
    return None