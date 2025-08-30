# src/presentation/app.py
from flask import Flask, request
from flask_cors import CORS

from src.presentation.http.routes.classify_email_router import bp as classify_email_router
from src.presentation.http.middlewares.api_key_middleware import ApiKeyMiddleware

app = Flask(__name__)
CORS(app)

api_key_middleware = ApiKeyMiddleware()

@app.before_request
def check_key():
  if request.method == "OPTIONS":
    return None 
  return api_key_middleware.validate()


app.register_blueprint(classify_email_router)


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=False)
