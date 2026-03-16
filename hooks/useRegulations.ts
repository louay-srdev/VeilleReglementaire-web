"use client";

import { useQuery } from "@tanstack/react-query";
import { regulationService } from "@/services/regulationService";
import type { RegulationsQueryParams, RegulationsResponse } from "@/types/api";

export function useRegulations(params: RegulationsQueryParams) {
  return useQuery<RegulationsResponse>({
    queryKey: ["regulations", params],
    queryFn: () => regulationService.list(params),
    keepPreviousData: true,
  });
}

