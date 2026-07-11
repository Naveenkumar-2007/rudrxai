"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/effects/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you build custom models or use existing APIs?",
    answer: "We take a hybrid approach based on your specific requirements. For general reasoning tasks, we leverage state-of-the-art foundation models (OpenAI, Anthropic). For highly specialized or sensitive data, we fine-tune and deploy open-source models (Llama, Mistral) entirely within your private infrastructure."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Security is foundational to our architecture. We support VPC peering, on-premise deployments, and zero-data-retention agreements with API providers. We implement strict RBAC, data masking, and are fully SOC2 compliant."
  },
  {
    question: "What is the typical timeline for an enterprise deployment?",
    answer: "A standard deployment cycle takes 8-12 weeks from discovery to production. This includes architecture design, data pipeline setup, model integration, rigorous security testing, and final deployment."
  },
  {
    question: "How do you handle ongoing maintenance and model drift?",
    answer: "We offer comprehensive MLOps packages that include continuous monitoring for model drift, performance degradation, and automated retraining pipelines to ensure your AI systems remain accurate over time."
  },
  {
    question: "Can your agents interact with our legacy software?",
    answer: "Yes. Our agents are designed to interface with virtually any system, from modern REST/GraphQL APIs to legacy SOAP services and direct database connections, using secure, auditable execution environments."
  }
]

export function FAQ() {
  return (
    <Section className="bg-elevated border-y border-border">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Questions"
            title="Frequently Asked Questions" 
            centered
          />
          
          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full mt-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
