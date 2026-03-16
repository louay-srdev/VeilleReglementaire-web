import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type ActionStatus = "A_FAIRE" | "EN_COURS" | "REALISEE" | "EN_RETARD"
type RiskLevel = "low" | "medium" | "critical"

interface StatusBadgeProps {
  status: ActionStatus
  className?: string
}

interface RiskBadgeProps {
  level: RiskLevel
  className?: string
}

const statusConfig: Record<
  ActionStatus,
  { label: string; className: string }
> = {
  A_FAIRE: {
    label: "À faire",
    className: "bg-muted text-muted-foreground hover:bg-muted",
  },
  EN_COURS: {
    label: "En cours",
    className: "bg-primary/10 text-primary hover:bg-primary/10",
  },
  REALISEE: {
    label: "Réalisée",
    className: "bg-success/10 text-success hover:bg-success/10",
  },
  EN_RETARD: {
    label: "En retard",
    className: "bg-destructive/10 text-destructive hover:bg-destructive/10",
  },
}

const riskConfig: Record<RiskLevel, { label: string; className: string }> = {
  low: {
    label: "Faible",
    className: "bg-success/10 text-success hover:bg-success/10",
  },
  medium: {
    label: "Moyen",
    className: "bg-warning/10 text-warning hover:bg-warning/10",
  },
  critical: {
    label: "Critique",
    className: "bg-destructive/10 text-destructive hover:bg-destructive/10",
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <Badge variant="secondary" className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}

export function RiskBadge({ level, className }: RiskBadgeProps) {
  const config = riskConfig[level]
  return (
    <Badge variant="secondary" className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}
