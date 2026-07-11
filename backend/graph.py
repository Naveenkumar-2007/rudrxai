from langgraph.graph import StateGraph, END
from utils.state import AgentState
from agents.supervisor import get_supervisor_node
from agents.specialized import welcome_agent, solutions_agent, pricing_agent, booking_agent
from agents.lead_extractor import get_lead_extractor

def supervisor_node(state: AgentState):
    supervisor = get_supervisor_node()
    res = supervisor.invoke({"messages": state["messages"]})
    return {"next": res.next, "intent": res.intent}

def run_agent(agent, state, agent_name):
    res = agent.invoke({
        "messages": state["messages"],
        "rag_context": state.get("rag_context", "")
    })
    return {"messages": [res], "agent_name": agent_name}

def welcome_node(state: AgentState):
    return run_agent(welcome_agent, state, "welcome_agent")

def solutions_node(state: AgentState):
    return run_agent(solutions_agent, state, "solutions_agent")

def pricing_node(state: AgentState):
    return run_agent(pricing_agent, state, "pricing_agent")

def booking_node(state: AgentState):
    # Extract info first
    extractor = get_lead_extractor()
    extraction = extractor.invoke({"messages": state["messages"]})
    
    # Store in state
    collected_info = {
        "name": extraction.name,
        "email": extraction.email,
        "company": extraction.company,
        "description": extraction.description,
        "is_complete": extraction.is_complete
    }
    
    # Pass to agent
    res = booking_agent.invoke({
        "messages": state["messages"],
        "rag_context": state.get("rag_context", "") + f"\n\nCURRENTLY COLLECTED LEAD INFO:\n{collected_info}\n\nAsk ONLY for what is missing. Do not repeat questions."
    })
    
    return {"messages": [res], "agent_name": "booking_agent", "collected_info": collected_info}

# Build the Graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("supervisor", supervisor_node)
workflow.add_node("welcome_agent", welcome_node)
workflow.add_node("solutions_agent", solutions_node)
workflow.add_node("pricing_agent", pricing_node)
workflow.add_node("booking_agent", booking_node)

# Add edges from agents back to END
for node in ["welcome_agent", "solutions_agent", "pricing_agent", "booking_agent"]:
    workflow.add_edge(node, END)

# Add conditional edges from Supervisor
workflow.add_conditional_edges(
    "supervisor",
    lambda x: x["next"],
    {
        "welcome_agent": "welcome_agent",
        "solutions_agent": "solutions_agent",
        "pricing_agent": "pricing_agent",
        "booking_agent": "booking_agent",
        "FINISH": END
    }
)

# Entry point
workflow.set_entry_point("supervisor")

# Compile graph
app = workflow.compile()
