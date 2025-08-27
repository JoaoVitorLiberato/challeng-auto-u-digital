from dataclasses import dataclass

@dataclass
class Email:
  raw_text: str
  category: str = None
  suggested_response: str = None
