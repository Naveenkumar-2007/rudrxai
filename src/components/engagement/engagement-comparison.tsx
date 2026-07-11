import { Check, Minus } from "lucide-react"

export function EngagementComparison() {
  const models = [
    { name: "Discovery Workshop", bestFor: "Exploring AI" },
    { name: "MVP Development", bestFor: "Startups" },
    { name: "Enterprise Project", bestFor: "Custom Implementations" },
    { name: "Dedicated AI Team", bestFor: "Long-term R&D" }
  ]

  const features = [
    { label: "Technical Architecture", values: [true, true, true, true] },
    { label: "ROI Estimation", values: [true, false, true, true] },
    { label: "Production Source Code", values: [false, true, true, true] },
    { label: "SLA Guarantees", values: [false, false, true, true] },
    { label: "Dedicated Project Manager", values: [false, false, true, true] },
    { label: "24/7 Monitoring", values: [false, false, false, true] },
  ]

  return (
    <div className="w-full overflow-x-auto pb-6">
      <table className="w-full min-w-[800px] border-collapse">
        <thead>
          <tr>
            <th className="p-6 text-left border-b border-border w-1/4">
              <span className="text-xl font-bold font-heading text-foreground">Compare Models</span>
            </th>
            {models.map((m, i) => (
              <th key={i} className="p-6 text-center border-b border-border w-[18%]">
                <div className="font-semibold text-foreground mb-1">{m.name}</div>
                <div className="text-xs text-muted-foreground font-normal">{m.bestFor}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className="hover:bg-surface/30 transition-colors">
              <td className="p-4 border-b border-border text-sm font-medium text-muted-foreground">
                {feature.label}
              </td>
              {feature.values.map((hasFeature, j) => (
                <td key={j} className="p-4 border-b border-border text-center">
                  {hasFeature ? (
                    <Check className="w-5 h-5 text-primary mx-auto" />
                  ) : (
                    <Minus className="w-4 h-4 text-border mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
