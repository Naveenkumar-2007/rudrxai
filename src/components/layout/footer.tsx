import Link from "next/link"
import { Container } from "./container"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="bg-background border-t py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-muted-foreground max-w-sm">
              Engineering Intelligent Systems. We build enterprise-grade AI products, automation platforms, and intelligent software for businesses and governments.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Automation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Intelligence</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Security & Trust</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/engagement" className="text-sm text-muted-foreground hover:text-primary transition-colors">Engagement Models</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book Discovery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rudrx AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
          </div>
        </div>
      </Container>
    </footer>
  )
}
