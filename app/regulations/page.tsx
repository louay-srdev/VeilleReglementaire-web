"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { RegulationCard } from "@/components/regulations/regulation-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRegulations } from "@/hooks/useRegulations";
import type { RegulationsQueryParams, Regulation } from "@/types/api";

const types = ["Tous", "LOI", "DECRET", "ARRETE"];

const riskLevels = [
  { value: "all", label: "Tous les niveaux" },
  { value: "FAIBLE", label: "Faible" },
  { value: "MOYEN", label: "Moyen" },
  { value: "CRITIQUE", label: "Critique" },
];

export default function RegulationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("Tous");
  const [selectedRisk, setSelectedRisk] = useState<string>("all");

  const queryParams: RegulationsQueryParams = {
    search: searchQuery || undefined,
    type: selectedType === "Tous" ? undefined : (selectedType as any),
    riskLevel: selectedRisk === "all" ? undefined : (selectedRisk as any),
    limit: 30,
    page: 1,
  };

  const { data, isLoading, isError, refetch, isFetching } =
    useRegulations(queryParams);

  const regulations: Regulation[] = data?.data ?? [];

  const mapRiskLevel = (risk: Regulation["riskLevel"]) => {
    if (risk === "FAIBLE") return "low" as const;
    if (risk === "MOYEN") return "medium" as const;
    return "critical" as const;
  };

  return (
    <DashboardLayout title="Base réglementaire">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher une réglementation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[150px] bg-card">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "Tous" ? "Tous" : type}
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
          </div>
        </div>

        {isError && (
          <p className="text-sm text-destructive">
            Erreur lors du chargement. Veuillez réessayer.
          </p>
        )}

        <p className="text-sm text-muted-foreground">
          {isLoading || isFetching
            ? "Chargement des réglementations…"
            : `${regulations.length} réglementation(s) trouvée(s)${
                data?.meta ? ` sur ${data.meta.total}` : ""
              }`}
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regulations.map((regulation) => (
            <RegulationCard
              key={regulation.id}
              title={regulation.title}
              ministry={regulation.ministry ?? "—"}
              type={regulation.type}
              riskLevel={mapRiskLevel(regulation.riskLevel)}
              lastUpdate={
                regulation.publicationDate
                  ? new Date(regulation.publicationDate).toLocaleDateString("fr-FR")
                  : "—"
              }
              summary={regulation.summary ?? ""}
            />
          ))}
        </div>

        {!isLoading && regulations.length === 0 && !isError && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Aucune réglementation trouvée
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Essayez de modifier vos critères de recherche.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

