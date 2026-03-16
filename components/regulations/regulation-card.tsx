import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { RiskBadge } from "@/components/ui/status-badge"
import { Calendar, Building2 } from "lucide-react"

interface RegulationCardProps {
  title: string
  ministry: string
  type: string
  riskLevel: "low" | "medium" | "critical"
  lastUpdate: string
  summary: string
}

export function RegulationCard({
  title,
  ministry,
  type,
  riskLevel,
  lastUpdate,
  summary,
}: RegulationCardProps) {
  return (
    <Card className="rounded-xl shadow-sm transition-shadow hover:shadow-md cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground leading-snug line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{ministry}</span>
            </div>
          </div>
          <RiskBadge level={riskLevel} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{summary}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="rounded-lg bg-muted px-2.5 py-1 font-medium text-muted-foreground">
            {type}
          </span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{lastUpdate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
