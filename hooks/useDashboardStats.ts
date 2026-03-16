"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";
import { authService } from "@/services/authService";
import type { DashboardStats, ProfileResponse } from "@/types/api";

async function fetchWithProfile(): Promise<{
  stats: DashboardStats;
  profile: ProfileResponse;
}> {
  const profile = await authService.profile();
  const stats = await dashboardService.getStats({
    clientId: profile.clientId ?? undefined,
    domain: profile.domain ?? undefined,
  });
  return { stats, profile };
}

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: fetchWithProfile,
  });
}

