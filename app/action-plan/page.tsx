"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ActionPlanTable, ActionPlanCards } from "@/components/action-plan/action-plan-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useProfile } from "@/hooks/useProfile"
import { useActionPlans } from "@/hooks/useActionPlans"

export default function ActionPlanPage() {
  const { data: profile } = useProfile()
  const clientId = profile?.clientId ?? null
  const { data: actions = [], isLoading, isError } = useActionPlans(clientId)

  const mappedActions =
    actions?.map((item) => ({
      id: item.id,
      action: item.description,
      regulation: item.compliance?.regulation?.title ?? "—",
      responsible: {
        name:
          item.responsibleUser?.fullName ??
          item.responsibleUser?.email ??
          "—",
        initials:
          (item.responsibleUser?.fullName ??
            item.responsibleUser?.email ??
            "—")
            .split(" ")
            .map((p) => p.charAt(0).toUpperCase())
            .join("")
            .slice(0, 2) || "NA",
      },
      deadline: new Date(item.targetDate).toLocaleDateString("fr-FR"),
      status: item.status,
    })) ?? []

  return (
    <DashboardLayout title="Plan d'actions">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {isLoading
                ? "Chargement des actions…"
                : `${mappedActions.length} action(s) au total`}
            </p>
            {isError && (
              <p className="text-xs text-destructive">
                Erreur lors du chargement des actions.
              </p>
            )}
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle action
          </Button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <ActionPlanTable actions={mappedActions} />
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <ActionPlanCards actions={mappedActions} />
        </div>
      </div>
    </DashboardLayout>
  )
}
