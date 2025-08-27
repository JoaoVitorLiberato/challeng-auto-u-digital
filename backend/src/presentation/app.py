from flask import Flask
from src.presentation.http.routes.classify_email_router import bp as classify_email_router

app = Flask(__name__)
app.register_blueprint(classify_email_router)


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)