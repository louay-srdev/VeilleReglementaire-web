import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { ActionsChart } from "@/components/dashboard/actions-chart"
import { ShortcutCards } from "@/components/dashboard/shortcut-cards"
import { Percent, FileText, CheckCircle, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Taux de conformité"
            value="78%"
            icon={Percent}
            variant="primary"
            trend={{ value: 5.2, isPositive: true }}
          />
          <KpiCard
            title="Réglementations applicables"
            value="142"
            icon={FileText}
            variant="default"
          />
          <KpiCard
            title="Conformes"
            value="111"
            icon={CheckCircle}
            variant="success"
            trend={{ value: 3.1, isPositive: true }}
          />
          <KpiCard
            title="Taux d'efficacité"
            value="92%"
            icon={TrendingUp}
            variant="warning"
            trend={{ value: 1.8, isPositive: true }}
          />
        </div>

        {/* Charts and Shortcuts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <ActionsChart />
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Accès rapide
            </h2>
            <ShortcutCards />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
