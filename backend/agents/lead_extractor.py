from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_groq import ChatGroq
from pydantic import BaseModel, Field
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env"))

class LeadExtraction(BaseModel):
    name: str = Field(description="The full name of the user, or empty string if not provided.", default="")
    email: str = Field(description="The email address of the user, or empty string if not provided.", default="")
    company: str = Field(description="The company name of the user, or empty string if not provided.", default="")
    phone_number: str = Field(description="The phone number of the user, or empty string if not provided.", default="")
    description: str = Field(description="A brief description of their project, or empty string if not provided.", default="")
    is_complete: bool = Field(description="True ONLY if name, email, company, and phone_number have all been provided.", default=False)

prompt = ChatPromptTemplate.from_messages([
    ("system", "Extract any lead qualification details from the conversation. If a detail is not provided, leave it empty. Set is_complete to True ONLY if name, email, company, and phone_number are present."),
    MessagesPlaceholder(variable_name="messages"),
])

def get_lead_extractor():
    llm = ChatGroq(temperature=0, model_name="llama-3.3-70b-versatile", api_key=os.getenv("GROQ_API_KEY"))
    return prompt | llm.with_structured_output(LeadExtraction)
