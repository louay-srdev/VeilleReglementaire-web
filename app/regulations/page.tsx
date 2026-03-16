"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RegulationCard } from "@/components/regulations/regulation-card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"

const regulations = [
  {
    id: "1",
    title: "Décret n° 2021-1257 relatif à la prévention des risques professionnels",
    ministry: "Ministère du Travail",
    type: "Décret",
    riskLevel: "critical" as const,
    lastUpdate: "15 Jan 2024",
    summary: "Ce décret définit les obligations des employeurs en matière de prévention des risques professionnels et de protection de la santé des travailleurs.",
  },
  {
    id: "2",
    title: "Arrêté du 4 octobre 2021 relatif aux émissions industrielles",
    ministry: "Ministère de la Transition écologique",
    type: "Arrêté",
    riskLevel: "medium" as const,
    lastUpdate: "10 Dec 2023",
    summary: "Réglementation des émissions atmosphériques des installations industrielles et prescriptions techniques applicables.",
  },
  {
    id: "3",
    title: "Directive 2010/75/UE relative aux émissions industrielles",
    ministry: "Commission Européenne",
    type: "Directive",
    riskLevel: "critical" as const,
    lastUpdate: "22 Nov 2023",
    summary: "Directive établissant un cadre pour la prévention et la réduction intégrées de la pollution provenant des activités industrielles.",
  },
  {
    id: "4",
    title: "Code du travail - Partie réglementaire - Santé et sécurité au travail",
    ministry: "Ministère du Travail",
    type: "Code",
    riskLevel: "medium" as const,
    lastUpdate: "05 Feb 2024",
    summary: "Dispositions réglementaires relatives à la santé et à la sécurité au travail, incluant les équipements de protection.",
  },
  {
    id: "5",
    title: "Loi n° 2020-105 relative à la lutte contre le gaspillage",
    ministry: "Ministère de la Transition écologique",
    type: "Loi",
    riskLevel: "low" as const,
    lastUpdate: "18 Jan 2024",
    summary: "Loi anti-gaspillage pour une économie circulaire, définissant les obligations en matière de gestion des déchets.",
  },
  {
    id: "6",
    title: "Règlement REACH (CE) n° 1907/2006",
    ministry: "Commission Européenne",
    type: "Règlement",
    riskLevel: "critical" as const,
    lastUpdate: "30 Sep 2023",
    summary: "Règlement concernant l'enregistrement, l'évaluation et l'autorisation des substances chimiques.",
  },
]

const types = ["Tous", "Décret", "Arrêté", "Directive", "Code", "Loi", "Règlement"]
const riskLevels = [
  { value: "all", label: "Tous les niveaux" },
  { value: "low", label: "Faible" },
  { value: "medium", label: "Moyen" },
  { value: "critical", label: "Critique" },
]
const domains = [
  { value: "all", label: "Tous les domaines" },
  { value: "environnement", label: "Environnement" },
  { value: "securite", label: "Sécurité" },
  { value: "qualite", label: "Qualité" },
]

export default function RegulationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("Tous")
  const [selectedRisk, setSelectedRisk] = useState("all")
  const [selectedDomain, setSelectedDomain] = useState("all")

  const filteredRegulations = regulations.filter((reg) => {
    const matchesSearch =
      reg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "Tous" || reg.type === selectedType
    const matchesRisk = selectedRisk === "all" || reg.riskLevel === selectedRisk
    return matchesSearch && matchesType && matchesRisk
  })

  return (
    <DashboardLayout title="Base réglementaire">
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher une réglementation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[150px] bg-card">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger className="w-[180px] bg-card">
                <SelectValue placeholder="Niveau de risque" />
              </SelectTrigger>
              <SelectContent>
                {riskLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[180px] bg-card">
                <SelectValue placeholder="Domaine" />
              </SelectTrigger>
              <SelectContent>
                {domains.map((domain) => (
                  <SelectItem key={domain.value} value={domain.value}>
                    {domain.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground">
          {filteredRegulations.length} réglementation(s) trouvée(s)
        </p>

        {/* Regulations Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredRegulations.map((regulation) => (
            <RegulationCard key={regulation.id} {...regulation} />
          ))}
        </div>

        {filteredRegulations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Aucune réglementation trouvée
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
