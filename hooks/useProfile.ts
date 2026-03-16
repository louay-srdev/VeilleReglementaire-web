"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/authService";
import type { ProfileResponse } from "@/types/api";

export function useProfile() {
  return useQuery<ProfileResponse>({
    queryKey: ["profile"],
    queryFn: () => authService.profile(),
  });
}

