from src.domain.entities.email import Email
from src.infrastructure.adapters.ai_service import AIService

class ClassifyEmailUseCase:
  def __init__(self, ai_service: AIService):
    self.ai_service = ai_service

  def execute(self, text:str) -> Email:
    email = Email(raw_text=text)

    category = self.ai_service.classify_gpt(text)
    response = self.ai_service.generate_response(text)

    email.category = category
    email.suggested_response = response
    return email