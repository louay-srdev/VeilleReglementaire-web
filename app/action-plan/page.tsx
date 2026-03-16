"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ActionPlanTable, ActionPlanCards } from "@/components/action-plan/action-plan-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const actions = [
  {
    id: "1",
    action: "Mettre à jour le Document Unique d'Évaluation des Risques Professionnels (DUERP)",
    regulation: "Décret n° 2021-1257 relatif à la prévention des risques professionnels",
    responsible: {
      name: "Marie Martin",
      initials: "MM",
    },
    deadline: "15 Mar 2024",
    status: "EN_COURS" as const,
  },
  {
    id: "2",
    action: "Réaliser l'audit des émissions atmosphériques",
    regulation: "Arrêté du 4 octobre 2021 relatif aux émissions industrielles",
    responsible: {
      name: "Pierre Durand",
      initials: "PD",
    },
    deadline: "28 Feb 2024",
    status: "EN_RETARD" as const,
  },
  {
    id: "3",
    action: "Former les équipes aux nouvelles procédures de tri des déchets",
    regulation: "Loi n° 2020-105 relative à la lutte contre le gaspillage",
    responsible: {
      name: "Sophie Bernard",
      initials: "SB",
    },
    deadline: "10 Apr 2024",
    status: "A_FAIRE" as const,
  },
  {
    id: "4",
    action: "Mettre en place le registre des substances chimiques REACH",
    regulation: "Règlement REACH (CE) n° 1907/2006",
    responsible: {
      name: "Jean Dupont",
      initials: "JD",
    },
    deadline: "20 Jan 2024",
    status: "REALISEE" as const,
  },
  {
    id: "5",
    action: "Installer les équipements de protection individuelle (EPI) conformes",
    regulation: "Code du travail - Partie réglementaire - Santé et sécurité au travail",
    responsible: {
      name: "Marie Martin",
      initials: "MM",
    },
    deadline: "05 Feb 2024",
    status: "REALISEE" as const,
  },
  {
    id: "6",
    action: "Réviser les procédures d'urgence environnementale",
    regulation: "Directive 2010/75/UE relative aux émissions industrielles",
    responsible: {
      name: "Pierre Durand",
      initials: "PD",
    },
    deadline: "30 Mar 2024",
    status: "A_FAIRE" as const,
  },
  {
    id: "7",
    action: "Effectuer le contrôle périodique des installations électriques",
    regulation: "Décret n° 2021-1257 relatif à la prévention des risques professionnels",
    responsible: {
      name: "Lucas Petit",
      initials: "LP",
    },
    deadline: "12 Mar 2024",
    status: "EN_COURS" as const,
  },
  {
    id: "8",
    action: "Mettre à jour les fiches de données de sécurité (FDS)",
    regulation: "Règlement REACH (CE) n° 1907/2006",
    responsible: {
      name: "Sophie Bernard",
      initials: "SB",
    },
    deadline: "25 Feb 2024",
    status: "EN_RETARD" as const,
  },
]

export default function ActionPlanPage() {
  return (
    <DashboardLayout title="Plan d'actions">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {actions.length} action(s) au total
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle action
          </Button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <ActionPlanTable actions={actions} />
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <ActionPlanCards actions={actions} />
        </div>
      </div>
    </DashboardLayout>
  )
}
