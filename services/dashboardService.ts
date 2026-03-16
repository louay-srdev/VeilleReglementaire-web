import { apiClient } from "./apiClient";
import type { DashboardStats } from "@/types/api";

export const dashboardService = {
  getStats: (params?: { clientId?: string; domain?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.clientId) searchParams.set("clientId", params.clientId);
    if (params?.domain) searchParams.set("domain", params.domain);
    const qs = searchParams.toString();
    const path = `/dashboard/stats${qs ? `?${qs}` : ""}`;
    return apiClient.get<DashboardStats>(path);
  },
};

