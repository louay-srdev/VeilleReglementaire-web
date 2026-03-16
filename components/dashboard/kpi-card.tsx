import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface KpiCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

const variantStyles = {
  default: {
    icon: "bg-muted text-muted-foreground",
    card: "",
  },
  primary: {
    icon: "bg-primary/10 text-primary",
    card: "",
  },
  success: {
    icon: "bg-success/10 text-success",
    card: "",
  },
  warning: {
    icon: "bg-warning/10 text-warning",
    card: "",
  },
  danger: {
    icon: "bg-destructive/10 text-destructive",
    card: "",
  },
}

export function KpiCard({
  title,
  value,
  icon: Icon,
  trend,
  variant = "default",
}: KpiCardProps) {
  const styles = variantStyles[variant]

  return (
    <Card className={cn("rounded-xl shadow-sm", styles.card)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <p
                className={cn(
                  "flex items-center text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
                <span className="ml-1 text-muted-foreground">vs dernier mois</span>
              </p>
            )}
          </div>
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              styles.icon
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
