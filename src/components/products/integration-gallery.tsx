import { ProductIntegration } from "@/types/products"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"

// A helper to render some mock icons based on the integration ID
function getIconForIntegration(id: string) {
  // Using simple colored initials as placeholders for actual brand SVGs
  const colors: Record<string, string> = {
    microsoft: "bg-blue-600",
    google: "bg-red-500",
    salesforce: "bg-sky-500",
    sap: "bg-blue-700",
    slack: "bg-purple-600",
    teams: "bg-indigo-600",
    jira: "bg-blue-500",
    hubspot: "bg-orange-500",
    servicenow: "bg-green-600",
    postgres: "bg-blue-400",
    snowflake: "bg-sky-400",
    aws: "bg-orange-400",
    azure: "bg-blue-500",
    gcp: "bg-red-400",
    zendesk: "bg-emerald-600"
  }

  const color = colors[id] || "bg-surface"
  const initial = id.charAt(0).toUpperCase()

  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${color}`}>
      {initial}
    </div>
  )
}

export function IntegrationGallery({ integrations }: { integrations: ProductIntegration[] }) {
  if (!integrations || integrations.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-6 text-center">Seamlessly integrates with your stack</h3>
      
      <StaggerContainer className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {integrations.map((integration) => (
          <StaggerItem key={integration.name}>
            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                {getIconForIntegration(integration.logoId)}
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {integration.name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
