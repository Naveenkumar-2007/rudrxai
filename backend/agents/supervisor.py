from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_groq import ChatGroq
from pydantic import BaseModel, Field
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env"))

class Route(BaseModel):
    next: str = Field(description="The next agent to route to, or 'FINISH' if the user's request is fully answered.")
    intent: str = Field(description="The detected intent of the user (e.g., 'pricing_inquiry', 'technical_question', 'book_call').")

system_prompt = (
    "You are the Supervisor Agent for the Rudrx AI Concierge.\n"
    "Your job is to analyze the user's latest message and route the conversation to the most appropriate specialized agent.\n\n"
    "Available Agents:\n"
    "- welcome_agent: For general greetings and casual conversation.\n"
    "- solutions_agent: For explaining Rudrx AI's technical capabilities, agentic RAG, computer vision, and AI flows.\n"
    "- pricing_agent: For pricing, cost, and budget inquiries.\n"
    "- booking_agent: For scheduling discovery calls or demos.\n"
    "- FINISH: If the user's request is completely resolved and requires no further action.\n\n"
    "Select the best agent to handle the user's request."
)

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        MessagesPlaceholder(variable_name="messages"),
        ("system", "Given the conversation above, who should act next?"),
    ]
)

def get_supervisor_node():
    llm = ChatGroq(temperature=0, model_name="llama-3.3-70b-versatile", api_key=os.getenv("GROQ_API_KEY"))
    supervisor = prompt | llm.with_structured_output(Route)
    return supervisor
