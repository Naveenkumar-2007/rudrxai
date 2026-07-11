export type ResourceType = "Blog" | "Engineering Blog" | "Whitepaper" | "Tutorial" | "Research" | "Architecture"

export interface ResourceAuthor {
  name: string
  role: string
  avatar: string
}

export interface Resource {
  id: string
  title: string
  summary: string
  type: ResourceType
  image: string
  author: ResourceAuthor
  publishedAt: string
  updatedAt: string
  readingTime: string
  tags: string[]
  content: string // Markdown string
}
