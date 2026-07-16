import os
import re
import json

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

from app.prompts.analyzer_prompt import ANALYZER_PROMPT

load_dotenv()

# Initialize Groq LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY_2"),
)


def analyze_document(document_text: str):
    """
    Analyze a legal document using Groq LLM.
    Returns structured JSON.
    """

    prompt = ChatPromptTemplate.from_template(ANALYZER_PROMPT)

    chain = prompt | llm

    response = chain.invoke(
        {
            "document": document_text
        }
    )

    content = response.content.strip()

    # Remove markdown formatting if present
    content = content.replace("```json", "")
    content = content.replace("```", "")
    content = content.strip()

    try:
        # Extract the JSON object from the response
        from json import JSONDecoder

        decoder = JSONDecoder()

# Find the first opening brace
        start = content.find("{")

        if start == -1:
            raise ValueError("No JSON object found.")

        json_obj, _ = decoder.raw_decode(content[start:])

        return json_obj

    except Exception as e:
        return {
            "success": False,
            "message": "Failed to parse AI response.",
            "error": str(e),
            "raw_response": content
        }