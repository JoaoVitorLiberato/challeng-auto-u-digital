import PyPDF2

class TreatmentData:
  @staticmethod
  def read_file(file=None, text=None) -> str:
    if text is not None:
      return text

    if file is not None:
      if file.filename.endswith(".txt"):
        return file.read().decode("utf-8")

      elif file.filename.endswith(".pdf"):
        reader = PyPDF2.PdfReader(file)
        return " ".join([page.extract_text() for page in reader.pages])
    
    return ""