"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardStats } from "@/types/api";

const FALLBACK_DATA = [
  { name: "À faire", value: 0, color: "#6b7280" },
  { name: "En cours", value: 0, color: "#2563eb" },
  { name: "Réalisées", value: 0, color: "#22c55e" },
  { name: "En retard", value: 0, color: "#ef4444" },
];

interface ActionsChartProps {
  stats?: DashboardStats;
  loading?: boolean;
  error?: boolean;
}

export function ActionsChart({ stats, loading, error }: ActionsChartProps) {
  const data = stats
    ? [
        { name: "À faire", value: stats.actionsByStatus.A_FAIRE, color: "#6b7280" },
        { name: "En cours", value: stats.actionsByStatus.EN_COURS, color: "#2563eb" },
        { name: "Réalisées", value: stats.actionsByStatus.REALISEE, color: "#22c55e" },
        { name: "En retard", value: stats.actionsByStatus.EN_RETARD, color: "#ef4444" },
      ]
    : FALLBACK_DATA;

  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Actions par statut</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <p className="mb-2 text-sm text-destructive">
            Erreur lors du chargement des données.
          </p>
        )}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                formatter={(value: number) => [`${value} actions`, ""]}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                formatter={(value) => (
                  <span className="text-sm text-muted-foreground">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {loading && (
          <p className="mt-2 text-sm text-muted-foreground">
            Chargement des données…
          </p>
        )}
      </CardContent>
    </Card>
  );
}

