import os
import re
import json

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

from app.prompts.compare_prompt import COMPARE_PROMPT

load_dotenv()

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY_1"),
    temperature=0,
)


def compare_contracts(contract_a: str, contract_b: str):

    prompt = ChatPromptTemplate.from_template(COMPARE_PROMPT)

    chain = prompt | llm

    response = chain.invoke(
        {
            "contract_a": contract_a,
            "contract_b": contract_b,
        }
    )

    content = response.content.strip()

    content = content.replace("```json", "")
    content = content.replace("```", "")
    content = content.strip()

    try:
        match = re.search(r"\{[\s\S]*\}", content)

        if not match:
            raise ValueError("No JSON found in AI response.")

        return json.loads(match.group(0))

    except Exception as e:
        return {
            "success": False,
            "message": "Failed to parse comparison response.",
            "error": str(e),
            "raw_response": content,
        }