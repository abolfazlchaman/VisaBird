export interface Company {
  id: string;
  name: string;
  industry: string;
  country: string;
  city: string;
  linkedin?: string;
  logo?: string;
  visaSponsorship: boolean;
  remote: boolean;
  yearFounded: string;
  numberOfEmployees: string;
}

export interface JobFilters {
  country?: string;
  industry?: string;
  city?: string;
  search?: string;
  minEmployees?: string;
  maxEmployees?: string;
}

export interface JobSearchParams extends JobFilters {
  page?: string;
  limit?: string;
} 