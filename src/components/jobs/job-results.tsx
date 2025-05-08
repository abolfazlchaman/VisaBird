'use client';

import { useEffect, useState } from 'react';
import { Company, JobFilters } from '@/types/jobs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { JobCardSkeleton } from './job-card-skeleton';

interface JobResultsProps {
  filters: JobFilters;
}

export function JobResults({ filters }: JobResultsProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            queryParams.append(key, value);
          }
        });

        const response = await fetch(`/api/jobs?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [filters]);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No companies found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {companies.map(company => (
        <Card
          key={company.name}
          className="hover:shadow-lg transition-shadow dark:bg-gray-800 overflow-auto"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="truncate">{company.name}</span>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex-shrink-0 ml-2"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="font-medium text-muted-foreground">Industry</dt>
                <dd className="truncate">{company.industry}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Location</dt>
                <dd className="truncate">
                  {company.city}, {company.country}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Founded</dt>
                <dd>{company.yearFounded}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Employees</dt>
                <dd>{company.numberOfEmployees}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
