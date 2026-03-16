export type Role = "ADMIN_CYRUS" | "CLIENT_USER";

export type RegType = "LOI" | "DECRET" | "ARRETE";
export type RiskLevel = "FAIBLE" | "MOYEN" | "CRITIQUE";
export type ComplianceStatus = "CONFORME" | "NON_CONFORME" | "EN_COURS";
export type ActionStatus = "A_FAIRE" | "EN_COURS" | "REALISEE" | "EN_RETARD";
export type Domain = "QUALITE" | "SECURITE" | "ENVIRONNEMENT" | "SST";

export interface UserInfo {
  id: string;
  email: string;
  fullName: string | null;
  role: Role;
  clientId: string | null;
  domain: Domain | null;
  createdAt?: string;
}

export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthRegisterRequest {
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
  role?: Role;
  clientId?: string;
}

export interface AuthResponse {
  access_token: string;
  user: UserInfo;
}

export interface ProfileResponse extends UserInfo {
  phone?: string | null;
  client?: {
    id: string;
    companyName: string;
    sector: string | null;
    logoUrl: string | null;
  } | null;
}

export interface Regulation {
  id: string;
  title: string;
  type: RegType;
  reference: string | null;
  ministry: string | null;
  authority: string | null;
  summary: string | null;
  publicationDate: string | null;
  riskLevel: RiskLevel;
  domain: Domain | null;
  fileUrl: string | null;
}

export interface RegulationsQueryParams {
  type?: RegType;
  ministry?: string;
  authority?: string;
  riskLevel?: RiskLevel;
  domain?: Domain;
  search?: string;
  page?: number;
  limit?: number;
}

export interface RegulationsResponse {
  data: Regulation[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ActionPlanItem {
  id: string;
  complianceId: string;
  description: string;
  responsibleUserId: string | null;
  targetDate: string;
  completionDate: string | null;
  status: ActionStatus;
  efficiencyMeasure: string | null;
  compliance: {
    regulation: Regulation;
    clientId?: string;
  };
  responsibleUser: {
    id: string;
    email: string;
    fullName: string | null;
  } | null;
}

export interface DashboardStats {
  clientId?: string;
  complianceRate: number;
  totalApplicable: number;
  conformes: number;
  actionsByStatus: {
    A_FAIRE: number;
    EN_COURS: number;
    REALISEE: number;
    EN_RETARD: number;
  };
  efficiencyRate: number;
  totalCompletedActions: number;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error?: string;
}

