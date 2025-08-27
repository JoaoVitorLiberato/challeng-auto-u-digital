from flask import Blueprint, request, jsonify
from src.presentation.http.controllers.classify_email_controller import ClassifyEmailController

bp = Blueprint("classify_email_router", __name__)

@bp.route("/process", methods=["POST"])
def process_email():
  text = ClassifyEmailController.extract_text_from_request(request)
  response, status = ClassifyEmailController.process_text(text)
  return jsonify(response), status