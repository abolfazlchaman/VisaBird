import { NextRequest, NextResponse } from 'next/server';
import { Company, JobFilters } from '@/types/jobs';
import { ALL_COUNTRIES } from '@/data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filters: JobFilters = {
    country: searchParams.get('country') || undefined,
    industry: searchParams.get('industry') || undefined,
    city: searchParams.get('city') || undefined,
    search: searchParams.get('search') || undefined,
    minEmployees: searchParams.get('minEmployees') || undefined,
    maxEmployees: searchParams.get('maxEmployees') || undefined,
  };

  let companies = ALL_COUNTRIES();

  // Apply filters
  if (filters.country) {
    companies = companies.filter((company) => company.country === filters.country);
  }

  if (filters.industry) {
    companies = companies.filter((company) => company.industry === filters.industry);
  }

  if (filters.city) {
    companies = companies.filter((company) => 
      company.city.toLowerCase().includes(filters.city!.toLowerCase())
    );
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    companies = companies.filter((company) =>
      company.name.toLowerCase().includes(searchLower) ||
      company.industry.toLowerCase().includes(searchLower) ||
      company.city.toLowerCase().includes(searchLower)
    );
  }

  if (filters.minEmployees || filters.maxEmployees) {
    companies = companies.filter((company) => {
      const employeeCount = parseInt(company.numberOfEmployees.replace(/,/g, ''));
      const min = filters.minEmployees ? parseInt(filters.minEmployees) : 0;
      const max = filters.maxEmployees ? parseInt(filters.maxEmployees) : Infinity;
      return employeeCount >= min && employeeCount <= max;
    });
  }

  return NextResponse.json(companies);
} 