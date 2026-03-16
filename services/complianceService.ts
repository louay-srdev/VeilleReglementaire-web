import { apiClient } from "./apiClient";
import type { ComplianceStatus } from "@/types/api";

export const complianceService = {
  // Example for future usage (not yet wired to UI)
  updateStatus: (id: string, body: { status?: ComplianceStatus; isApplicable?: boolean }) =>
    apiClient.patch(`/compliance/${id}`, body),
};

