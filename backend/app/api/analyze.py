from fastapi import APIRouter

from pydantic import BaseModel

from app.services.analyzer import analyze_document

router = APIRouter()


class AnalyzeRequest(BaseModel):
    text: str


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    result = analyze_document(request.text)

    return result