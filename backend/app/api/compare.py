import os
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.parser import extract_text
from app.services.comparator import compare_contracts

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/compare")
async def compare_documents(
    file1: UploadFile = File(...),
    file2: UploadFile = File(...)
):

    if not file1.filename.endswith((".pdf", ".docx")):
        raise HTTPException(400, "Invalid first document.")

    if not file2.filename.endswith((".pdf", ".docx")):
        raise HTTPException(400, "Invalid second document.")

    path1 = os.path.join(UPLOAD_FOLDER, file1.filename)
    path2 = os.path.join(UPLOAD_FOLDER, file2.filename)

    with open(path1, "wb") as buffer:
        shutil.copyfileobj(file1.file, buffer)

    with open(path2, "wb") as buffer:
        shutil.copyfileobj(file2.file, buffer)

    # Limit the amount of text sent to the AI model
    MAX_CHARS = 2800

    text1 = extract_text(path1)[:MAX_CHARS]
    text2 = extract_text(path2)[:MAX_CHARS]

    comparison = compare_contracts(text1, text2)

    return comparison