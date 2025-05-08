import { Suspense } from 'react';
import { JobFilters } from '@/types/jobs';
import { JobSearch } from '@/components/jobs/job-search';
import { JobResults } from '@/components/jobs/job-results';

interface JobsPageProps {
  searchParams: JobFilters;
}

export default function JobsPage({ searchParams }: JobsPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Find Jobs with Visa Sponsorship</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Suspense fallback={<div>Loading filters...</div>}>
            <JobSearch initialFilters={searchParams} />
          </Suspense>
        </aside>

        {/* Results */}
        <div className="lg:col-span-3">
          <Suspense fallback={<div>Loading results...</div>}>
            <JobResults filters={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
