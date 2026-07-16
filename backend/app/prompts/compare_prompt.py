COMPARE_PROMPT = """
Compare these two legal contracts.

Contract A:
{contract_a}

Contract B:
{contract_b}

Return ONLY valid JSON in this format:

{{
  "summary": "...",
  "differences": [
    {{
      "clause": "...",
      "contract_a": "...",
      "contract_b": "...",
      "difference": "..."
    }}
  ]
}}
"""