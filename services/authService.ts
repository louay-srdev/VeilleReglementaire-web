import { apiClient } from "./apiClient";
import type {
  AuthLoginRequest,
  AuthRegisterRequest,
  AuthResponse,
  ProfileResponse,
} from "@/types/api";

export const authService = {
  login: (payload: AuthLoginRequest) =>
    apiClient.post<AuthResponse>("/auth/login", payload),

  register: (payload: AuthRegisterRequest) =>
    apiClient.post<AuthResponse>("/auth/register", payload),

  profile: () => apiClient.get<ProfileResponse>("/auth/profile"),
};

