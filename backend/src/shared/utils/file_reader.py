import PyPDF2

class TreatmentData:
  @staticmethod
  def read_file(file=None, text=None) -> str:
    if text is not None:
      return text

    if file is not None:
      if file.filename.endswith(".txt"):
        return file.read().decode(".txt")
      elif file.filename.endswith(".pdf"):
        reader = PyPDF2.PdfReader(".pdf")
        return " ".join([page.extract_text() for page in reader.pages])
    
    return ""