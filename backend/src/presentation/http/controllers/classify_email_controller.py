from src.application.usecases.classify_email_usecase import ClassifyEmailUseCase
from src.infrastructure.adapters.ai_service import AIService
from src.shared.utils.file_reader import TreatmentData

ai_service = AIService()
usecase = ClassifyEmailUseCase(ai_service)

class ClassifyEmailController:
  @staticmethod
  def process_text(text: str):
    if not text.strip():
      return {"error": "Nenhum conteúdo encontrado"}, 400
    result = usecase.execute(text)
    return {"result": result, "email_text": text}, 200

  @staticmethod  
  def extract_text_from_request(request):
    if request.content_type and request.content_type.startswith("application/json"):
      data = request.get_json(silent=True)
      if data and "email_text" in data and data["email_text"].strip():
          return data["email_text"]
    elif "email_file" in request.files:
        file = request.files["email_file"]
        return TreatmentData.read_file(file)
    return ""