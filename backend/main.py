from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from dotenv import load_dotenv
import os
from langchain_core.messages import HumanMessage, AIMessage
from graph import app as langgraph_app

# Load .env from parent directory
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

app = FastAPI(title="Rudrx AI Concierge", version="1.0.0")

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    session_id: str
    message: str
    history: List[Message]
    rag_context: Optional[str] = ""

@app.get("/")
def health_check():
    return {"status": "healthy", "service": "Rudrx AI Concierge"}

@app.post("/chat")
def chat_endpoint(req: ChatRequest):
    try:
        # Convert history to LangChain messages
        lc_messages = []
        for m in req.history:
            if m.role == "user":
                lc_messages.append(HumanMessage(content=m.content))
            else:
                lc_messages.append(AIMessage(content=m.content))
        
        # Append latest user message
        lc_messages.append(HumanMessage(content=req.message))

        # Invoke LangGraph
        initial_state = {
            "messages": lc_messages,
            "session_id": req.session_id,
            "intent": "",
            "lead_score": 0,
            "collected_info": {},
            "rag_context": req.rag_context
        }
        
        result = langgraph_app.invoke(initial_state)
        
        # Extract response
        last_message = result["messages"][-1]
        
        return {
            "message": last_message.content,
            "intent": result.get("intent", "general"),
            "agent_name": result.get("agent_name", "unknown"),
            "collected_info": result.get("collected_info", {})
        }
    except Exception as e:
        print("LangGraph Error:", str(e))
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
