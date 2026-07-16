# Product Requirements Document (PRD)

# AI Legal Document Analyzer

---

## 1. Project Overview

### Product Name

AI Legal Document Analyzer

### Version

1.0

### Author

Lokesh Singh

### Date

July 2026

---

# 2. Problem Statement

Legal agreements are often lengthy, complex, and difficult to understand for non-legal professionals. Reviewing contracts manually requires significant time and legal expertise.

The objective of this project is to build an AI-powered application capable of automatically analyzing legal documents, extracting important information, identifying potential legal risks, comparing contracts, and generating professional reports.

---

# 3. Objectives

The system should enable users to:

- Upload legal documents (PDF/DOCX)
- Automatically analyze contracts using AI
- Extract important contract information
- Identify legal risks
- Extract important clauses
- Compare two contracts
- Generate downloadable PDF reports
- Present results through a modern web interface

---

# 4. Target Users

- Legal Professionals
- HR Teams
- Recruiters
- Business Owners
- Contract Managers
- Students
- General Users reviewing agreements

---

# 5. Functional Requirements

## 5.1 Upload Document

### Description

Users should be able to upload legal documents in PDF or DOCX format.

### Supported Formats

- PDF
- DOCX

### Validation

- Reject unsupported file formats
- Display appropriate error messages

---

## 5.2 AI Document Analysis

After upload, the AI should automatically extract:

- Document Type
- Summary
- Parties
- Effective Date
- Expiration Date
- Purpose

---

## 5.3 Clause Extraction

The system should identify the most important legal clauses.

Each clause includes:

- Clause Name
- Plain English Description

Example:

- Confidentiality
- Termination
- Compensation
- Governing Law
- Liability
- Intellectual Property

---

## 5.4 Risk Analysis

The AI should detect legal risks.

Each detected risk should contain:

- Clause
- Risk Level
- Reason
- Recommendation

Risk Levels

- Low
- Medium
- High

---

## 5.5 Contract Comparison

Users can upload two contracts.

The system compares:

- Missing Clauses
- Different Clauses
- Compensation
- Confidentiality
- Liability
- Governing Law
- Termination

Output:

- AI Summary
- Clause Comparison Table

---

## 5.6 PDF Report Generation

Users should be able to download a professional report containing:

- Summary
- Parties
- Clauses
- Risks

---

#

# 6.. System Architecture

```
                React Frontend
                      │
                      │ HTTP
                      ▼
             FastAPI Backend
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
 PDF Parser     DOCX Parser      Report Generator
        │
        ▼
 Document Text
        │
        ▼
 Groq LLM (Llama 3.3 70B)
        │
        ▼
 Structured JSON Response
        │
        ▼
 React Dashboard
```

---

# 7. Technology Stack

## Frontend

- React.js
- Material UI
- Axios
- React Router
- Vite

---

## Backend

- FastAPI
- Python
- LangChain
- Groq API
- ReportLab
- PyMuPDF
- python-docx

---

## AI

Model

- Llama 3.3 70B Versatile

Provider

- Groq

---

## Deployment

Frontend

- Firebase Hosting

Backend

- Render

---

# 8. API Endpoints

## POST /upload

Purpose

Analyze a legal document.

---

## POST /compare

Purpose

Compare two legal contracts.


---

## POST /download-report

Purpose

Generate downloadable PDF report.

---

# 9. User Flow

```
User

↓

Upload Contract

↓

Backend extracts text

↓

AI analyzes contract

↓

Backend returns JSON

↓

Frontend displays

• Summary
• Parties
• Clauses
• Risks

↓

User downloads PDF report
```



# 10. Conclusion

The AI Legal Document Analyzer demonstrates how Large Language Models can simplify legal document review by automatically extracting structured information, identifying risks, comparing contracts, and generating professional reports. The solution reduces manual effort while providing users with clear, easy-to-understand insights through a modern web application.
