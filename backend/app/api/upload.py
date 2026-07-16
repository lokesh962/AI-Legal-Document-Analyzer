import os
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.parser import extract_text
from app.services.analyzer import analyze_document

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    if not file.filename.endswith((".pdf", ".docx")):
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are supported."
        )

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    document_text = extract_text(file_path)

    analysis = analyze_document(document_text)

    return {
        "success": True,
        "message": "Document analyzed successfully",
        "filename": file.filename,
        "analysis": analysis
    }