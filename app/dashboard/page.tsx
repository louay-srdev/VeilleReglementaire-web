 "use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ActionsChart } from "@/components/dashboard/actions-chart";
import { ShortcutCards } from "@/components/dashboard/shortcut-cards";
import { Percent, FileText, CheckCircle, TrendingUp } from "lucide-react";
import { useDashboardStats } from "@/hooks/useDashboardStats";

export default function DashboardPage() {
  const { data, isLoading, isError } = useDashboardStats();

  const stats = data?.stats;

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Taux de conformité"
            value={stats ? `${stats.complianceRate}%` : isLoading ? "…" : "0%"}
            icon={Percent}
            variant="primary"
            trend={
              stats
                ? { value: stats.complianceRate, isPositive: stats.complianceRate >= 0 }
                : undefined
            }
          />
          <KpiCard
            title="Réglementations applicables"
            value={stats?.totalApplicable ?? (isLoading ? "…" : 0)}
            icon={FileText}
            variant="default"
          />
          <KpiCard
            title="Conformes"
            value={stats?.conformes ?? (isLoading ? "…" : 0)}
            icon={CheckCircle}
            variant="success"
          />
          <KpiCard
            title="Taux d'efficacité"
            value={stats ? `${stats.efficiencyRate}%` : isLoading ? "…" : "0%"}
            icon={TrendingUp}
            variant="warning"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ActionsChart stats={stats} loading={isLoading} error={isError} />
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Accès rapide</h2>
            <ShortcutCards />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

