import fitz  # PyMuPDF
from docx import Document


def extract_pdf_text(file_path: str):
    text = ""

    pdf = fitz.open(file_path)

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text


def extract_docx_text(file_path: str):
    document = Document(file_path)

    text = ""

    for para in document.paragraphs:
        text += para.text + "\n"

    return text


def extract_text(file_path: str):

    if file_path.endswith(".pdf"):
        return extract_pdf_text(file_path)

    elif file_path.endswith(".docx"):
        return extract_docx_text(file_path)

    else:
        raise ValueError("Unsupported file format")