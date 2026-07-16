# ⚖️ AI Legal Document Analyzer

An AI-powered Legal Document Analyzer built with **FastAPI, React, Material UI, and Groq LLM** that helps users analyze legal contracts, identify risks, extract key clauses, compare two contracts, and generate downloadable reports.

---

## 🚀 Live Demo

### Frontend
https://ai-legal-doc-analyzer.web.app

### Backend API
https://ai-legal-document-analyzer-u7ui.onrender.com

### Swagger API Docs
https://ai-legal-document-analyzer-u7ui.onrender.com/docs

---

# 📌 Features

### 📄 Legal Document Analysis

- Upload PDF or DOCX legal documents
- AI-powered contract analysis
- Detect document type
- Extract parties involved
- Identify effective & expiration dates
- Detect agreement purpose

---

### 📑 Clause Extraction

Automatically extracts the most important legal clauses such as:

- Confidentiality
- Compensation
- Termination
- Liability
- Governing Law
- Ownership
- Non-Compete
- Intellectual Property

Each clause includes a human-readable explanation.

---

### ⚠ Risk Detection

AI identifies potential legal risks.

Each risk contains:

- Risk Level (Low / Medium / High)
- Reason
- Recommendation

---

### 📊 Contract Comparison

Upload two legal contracts and compare:

- Missing clauses
- Different clauses
- Compensation changes
- Termination differences
- Liability differences
- Confidentiality differences

---

### 📥 PDF Report Generation

Generate a professional report containing:

- Document Summary
- Parties
- Clauses
- Risks

---

### 🎨 Modern UI

- Responsive Material UI Design
- Searchable Clause Table
- Beautiful Dashboard Cards
- Professional Layout
- Mobile Friendly

---

# 🛠 Tech Stack

## Frontend

- React.js
- Material UI (MUI)
- Axios
- React Router
- Vite

---

## Backend

- FastAPI
- Python
- LangChain
- Groq LLM
- PyMuPDF
- python-docx
- ReportLab

---

## AI Model

- llama-3.3-70b-versatile

---

## Deployment

Frontend

- Firebase Hosting

Backend

- Render

---

# 📂 Project Structure

```
AI-Legal-Document-Analyzer
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── prompts
│   │   ├── services
│   │   ├── utils
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/lokesh962/AI-Legal-Document-Analyzer.git

cd AI-Legal-Document-Analyzer
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GROQ_API_KEY=your_groq_api_key
```

Run server

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Analyze Document

```
POST /upload
```

Uploads a legal document and returns:

- Summary
- Parties
- Clauses
- Risks

---

## Compare Contracts

```
POST /compare
```

Uploads two contracts and returns:

- AI Summary
- Clause Differences

---

## Download Report

```
POST /download-report
```

Returns a downloadable PDF report.

---



# Author

**Lokesh Singh**
lokeshsinghsofindia@gmail.com
Backend Developer | AI Developer | MERN Stack Developer

