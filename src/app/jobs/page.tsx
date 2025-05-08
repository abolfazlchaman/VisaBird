import { Suspense } from 'react';
import { JobFilters } from '@/types/jobs';
import { JobSearch } from '@/components/jobs/job-search';
import { JobResults } from '@/components/jobs/job-results';
import { ThemeSwitch } from '@/components/theme-switch';

interface JobsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const filters: JobFilters = {
    country: searchParams.country as string,
    industry: searchParams.industry as string,
    city: searchParams.city as string,
    search: searchParams.search as string,
    minEmployees: searchParams.minEmployees as string,
    maxEmployees: searchParams.maxEmployees as string,
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-50 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Visa Sponsorship Jobs</h1>
        <ThemeSwitch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <JobSearch initialFilters={filters} />
        </div>

        {/* Results */}
        <div className="md:col-span-3">
          <Suspense
            fallback={<div className="text-gray-700 dark:text-gray-300">Loading results...</div>}
          >
            <JobResults filters={filters} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
