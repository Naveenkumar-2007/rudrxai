import { CaseStudy } from "@/types/case-studies"

export const caseStudies: CaseStudy[] = [
  {
    id: "global-healthcare-voice-ai",
    title: "Automating Patient Scheduling with Voice AI",
    industry: "Healthcare",
    solutionCategory: "Voice AI",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    
    executiveSummary: "A leading regional healthcare provider automated 74% of inbound scheduling calls using Rudrx Voice, drastically reducing wait times and allowing nursing staff to focus on critical patient care.",
    businessChallenge: "The hospital's call center was overwhelmed with routine appointment bookings, cancellations, and basic inquiries. Peak times saw wait times exceed 20 minutes, leading to patient frustration and abandoned calls.",
    currentProcess: "Patients called a central hotline, navigated a basic IVR tree, and waited in a queue for a human receptionist who manually cross-referenced multiple legacy scheduling systems.",
    painPoints: [
      "20+ minute average hold times during peak hours.",
      "High turnover rate among call center staff due to burnout.",
      "Manual data entry errors resulting in scheduling conflicts."
    ],
    
    architectureDescription: "We deployed a HIPAA-compliant Rudrx Voice agent at the edge. Inbound calls are processed in real-time, intents are mapped to the hospital's scheduling API, and slots are booked automatically.",
    
    technologyStack: ["Rudrx Voice", "OpenAI GPT-4", "Twilio SIP", "Redis Edge", "PostgreSQL"],
    securityMeasures: [
      "End-to-End Encryption in transit and at rest.",
      "Automatic PII/PHI redaction in logs.",
      "Strict RBAC preventing AI access to medical records."
    ],
    
    timeline: [
      { timeframe: "Week 1-2", title: "Discovery & Compliance", description: "Audited existing IVR and established HIPAA-compliant data pipelines." },
      { timeframe: "Week 3-5", title: "Agent Training", description: "Trained the Voice Agent on medical terminology and edge-case handling." },
      { timeframe: "Week 6", title: "Pilot Launch", description: "Deployed to 10% of inbound traffic for fine-tuning." },
      { timeframe: "Week 8", title: "Full Rollout", description: "Agent taking 100% of primary scheduling calls." }
    ],
    
    businessOutcomes: [
      "Zero wait times for scheduling and cancellations.",
      "Nursing staff reclaimed 30 hours a week per department.",
      "Improved patient satisfaction scores by 40%."
    ],
    roiMetrics: [
      { label: "Reduction in Support Calls", value: "74%", trend: "down" },
      { label: "Faster Responses", value: "92%", trend: "up" },
      { label: "Lower Operational Cost", value: "36%", trend: "down" }
    ],
    
    lessonsLearned: [
      "Voice synthesis must account for local accents to maintain patient trust.",
      "Clear fallback mechanisms to human agents are critical for complex medical inquiries.",
      "Patients preferred the AI over humans for simple tasks because there was zero hold time."
    ],
    
    relatedSolutions: [
      { name: "Rudrx Voice", url: "/products/voice" },
      { name: "Healthcare AI", url: "/industries/healthcare" }
    ]
  },
  {
    id: "finance-contract-extraction",
    title: "Document Intelligence for Commercial Lending",
    industry: "Finance",
    solutionCategory: "Document Intelligence",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    
    executiveSummary: "A Tier-1 bank reduced commercial loan processing times from 14 days to 4 hours by implementing Rudrx Documents to autonomously extract and validate complex financial contracts.",
    businessChallenge: "Underwriting commercial loans required manual review of hundreds of pages of unstructured financial documents, resulting in slow approvals and lost business to faster competitors.",
    currentProcess: "Analyst teams manually downloaded PDFs from a secure portal, read through contracts, and copy-pasted relevant covenants and metrics into an Excel model.",
    painPoints: [
      "Manual extraction took an average of 12 hours per loan.",
      "High human error rate in transcribing complex financial tables.",
      "Inability to scale underwriting volume without linear hiring."
    ],
    
    architectureDescription: "Documents are ingested via secure SFTP. Rudrx Documents uses multimodal LLMs to identify document types, extract nested tables, and output strict JSON directly into the bank's underwriting API.",
    
    technologyStack: ["Rudrx Documents", "Vision LLMs", "Kafka", "AWS S3", "Elasticsearch"],
    securityMeasures: [
      "Zero Data Retention (documents processed in memory and purged).",
      "SOC2 Type II compliant environment.",
      "Dedicated, single-tenant VPC."
    ],
    
    timeline: [
      { timeframe: "Month 1", title: "Data Mapping", description: "Mapped the bank's proprietary underwriting schema to extraction targets." },
      { timeframe: "Month 2", title: "VLM Tuning", description: "Fine-tuned extraction models on thousands of historical, anonymized contracts." },
      { timeframe: "Month 3", title: "Shadow Mode", description: "Ran AI in parallel with human analysts to measure accuracy." },
      { timeframe: "Month 4", title: "Production", description: "Fully integrated into the automated loan origination system." }
    ],
    
    businessOutcomes: [
      "Unblocked the underwriting bottleneck, increasing loan volume by 30%.",
      "Achieved 99.4% extraction accuracy, exceeding human baselines.",
      "Freed analysts to focus on risk modeling rather than data entry."
    ],
    roiMetrics: [
      { label: "Processing Time", value: "4 Hrs", trend: "down" },
      { label: "Extraction Accuracy", value: "99.4%", trend: "up" },
      { label: "Capacity Increase", value: "3x", trend: "up" }
    ],
    
    lessonsLearned: [
      "Traditional OCR is insufficient for financial documents; semantic understanding via LLMs is required.",
      "Confidence scoring is crucial to route low-confidence extractions to a human."
    ],
    
    relatedSolutions: [
      { name: "Rudrx Documents", url: "/products/documents" },
      { name: "Finance AI", url: "/industries/finance" }
    ]
  },
  {
    id: "government-knowledge-rag",
    title: "Secure Enterprise RAG for Policy Search",
    industry: "Government",
    solutionCategory: "Knowledge (RAG)",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
    
    executiveSummary: "A federal agency deployed Rudrx Knowledge to index decades of policy documents, providing 10,000+ employees with an 'Internal ChatGPT' that cites official regulations.",
    businessChallenge: "Employees spent 2-3 hours a day searching across fragmented legacy systems to find accurate policy information, delaying citizen services.",
    currentProcess: "Searches were performed using basic keyword matching across multiple disconnected SharePoint sites and intranet portals.",
    painPoints: [
      "Extremely poor search relevancy.",
      "High risk of employees acting on outdated policies.",
      "Massive time wasted navigating bureaucratic directories."
    ],
    
    architectureDescription: "We deployed a sovereign RAG pipeline. Documents are chunked and embedded in a private vector database. The system uses hybrid search to retrieve relevant policy chunks and synthesizes answers using a locally-hosted LLM.",
    
    technologyStack: ["Rudrx Knowledge", "Milvus Vector DB", "Llama 3 (Self-Hosted)", "Azure Government"],
    securityMeasures: [
      "Air-gapped deployment capability.",
      "Strict Document-Level RBAC integrated with Active Directory.",
      "FedRAMP High compliant infrastructure."
    ],
    
    timeline: [
      { timeframe: "Month 1", title: "Infrastructure", description: "Provisioned secure Azure Gov environment and deployed Vector DB." },
      { timeframe: "Month 2", title: "Ingestion", description: "Ingested 4 million pages of policy documents." },
      { timeframe: "Month 3", title: "Evaluation", description: "Tested RAG accuracy against golden datasets generated by policy experts." },
      { timeframe: "Month 4", title: "Agency Rollout", description: "Rolled out to 10,000 employees with mandatory training." }
    ],
    
    businessOutcomes: [
      "Reduced average search time from 25 minutes to 15 seconds.",
      "Eliminated errors caused by referencing deprecated policies.",
      "Accelerated citizen application processing times."
    ],
    roiMetrics: [
      { label: "Search Time", value: "-98%", trend: "down" },
      { label: "Productivity Gain", value: "2.5 Hrs/Day", trend: "up" },
      { label: "Policy Compliance", value: "100%", trend: "up" }
    ],
    
    lessonsLearned: [
      "Citations are non-negotiable in government; users must be able to click directly to the source paragraph.",
      "Keyword search (BM25) combined with Vector Search yields the best results for highly specific legal acronyms."
    ],
    
    relatedSolutions: [
      { name: "Rudrx Knowledge", url: "/products/knowledge" },
      { name: "Government AI", url: "/industries/government" }
    ]
  }
]
