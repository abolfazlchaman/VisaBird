export interface Company {
  name: string;
  yearFounded: string;
  industry: string;
  city: string;
  numberOfEmployees: string;
  country: string;
  linkedin: string;
}

export interface JobFilters {
  country?: string;
  industry?: string;
  city?: string;
  search?: string;
}

export interface JobSearchParams extends JobFilters {
  page?: number;
  limit?: number;
} 