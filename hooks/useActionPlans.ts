"use client";

import { useQuery } from "@tanstack/react-query";
import { actionPlanService } from "@/services/actionPlanService";
import type { ActionPlanItem } from "@/types/api";

export function useActionPlans(clientId?: string | null) {
  return useQuery<ActionPlanItem[]>({
    queryKey: ["action-plans", clientId],
    queryFn: () => {
      if (!clientId) {
        return Promise.resolve([]);
      }
      return actionPlanService.listByClient(clientId);
    },
    enabled: !!clientId,
  });
}

