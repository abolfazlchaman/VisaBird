import { Suspense } from 'react';
import { JobFilters } from '@/types/jobs';
import { JobSearch } from '@/components/jobs/job-search';
import { JobResults } from '@/components/jobs/job-results';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface JobsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const resolvedParams = await searchParams;
  const filters: JobFilters = {
    country: resolvedParams.country as string,
    industry: resolvedParams.industry as string,
    city: resolvedParams.city as string,
    search: resolvedParams.search as string,
    minEmployees: resolvedParams.minEmployees as string,
    maxEmployees: resolvedParams.maxEmployees as string,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 bg-slate-50 dark:bg-gray-900">
          <div className="flex justify-center items-center mb-4 sm:mb-8 text-center w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center justify-self-center">
              Curated List of Visa Sponsorship Companies
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <JobSearch initialFilters={filters} />
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <Suspense
                fallback={
                  <div className="text-gray-700 dark:text-gray-300">Loading results...</div>
                }
              >
                <JobResults filters={filters} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
