"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

// Note: Ensure highlight.js css is imported in layout or page

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function CodeBlock({ node, inline, className, children, ...props }: any) {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''
  const isInline = !match

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isInline) {
    return (
      <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-primary" {...props}>
        {children}
      </code>
    )
  }

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-border shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase">{language}</span>
        <button 
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 bg-background overflow-x-auto text-sm font-mono leading-relaxed">
        <code className={className} {...props}>
          {children}
        </code>
      </div>
    </div>
  )
}

export function MdxContent({ content }: { content: string }) {
  return (
    <article className="prose prose-invert prose-lg max-w-none 
      prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
      prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border
      prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground
      prose-ul:text-muted-foreground prose-li:mb-2
      prose-blockquote:border-l-primary prose-blockquote:bg-surface/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground/80 prose-blockquote:not-italic
    ">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: CodeBlock as any,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars, @next/next/no-img-element, jsx-a11y/alt-text
          img: ({node, ...props}) => (
            <span className="block my-12 rounded-2xl overflow-hidden border border-border shadow-xl">
              <img className="w-full h-auto m-0" {...props} />
            </span>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
