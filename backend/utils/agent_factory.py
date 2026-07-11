from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env"))

def create_agent(system_prompt: str):
    """Creates a basic LangChain conversational agent."""
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt + "\n\nKNOWLEDGE BASE CONTEXT:\n{rag_context}\n\nUse the context above to ground your answers. If the answer is not in the context, use your best judgment but never contradict it."),
        MessagesPlaceholder(variable_name="messages"),
    ])
    llm = ChatGroq(temperature=0.7, model_name="llama-3.3-70b-versatile", api_key=os.getenv("GROQ_API_KEY"))
    return prompt | llm
