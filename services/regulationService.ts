import { apiClient } from "./apiClient";
import type {
  RegulationsQueryParams,
  RegulationsResponse,
} from "@/types/api";

export const regulationService = {
  list: (params: RegulationsQueryParams) => {
    const searchParams = new URLSearchParams();

    if (params.type) searchParams.set("type", params.type);
    if (params.ministry) searchParams.set("ministry", params.ministry);
    if (params.authority) searchParams.set("authority", params.authority);
    if (params.riskLevel) searchParams.set("riskLevel", params.riskLevel);
    if (params.domain) searchParams.set("domain", params.domain);
    if (params.search) searchParams.set("search", params.search);
    if (params.page) searchParams.set("page", String(params.page));
    if (params.limit) searchParams.set("limit", String(params.limit));

    const qs = searchParams.toString();
    const path = `/regulation${qs ? `?${qs}` : ""}`;

    return apiClient.get<RegulationsResponse>(path);
  },
};

