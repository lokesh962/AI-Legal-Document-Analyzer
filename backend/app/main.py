from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.upload import router as upload_router
from app.api.analyze import router as analyze_router
from app.api.compare import router as compare_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="AI Legal Document Analyzer API")



origins = [
    "http://localhost:5173",                 # Local React app
    "https://ai-legal-doc-analyzer.web.app",
    "https://ai-legal-document-analyz-ee593.web.app"# Firebase Hosting
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(analyze_router)
app.include_router(compare_router)

@app.get("/")
def root():
    return {
        "message": "AI Legal Document Analyzer API is running"
    }