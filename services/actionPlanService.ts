import { apiClient } from "./apiClient";
import type { ActionPlanItem } from "@/types/api";

export const actionPlanService = {
  listByClient: (clientId: string) =>
    apiClient.get<ActionPlanItem[]>(`/action-plan/client/${clientId}`),
};

