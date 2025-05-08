'use client';

import { useEffect, useState } from 'react';
import { Company, JobFilters } from '@/types/jobs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

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
        const response = await fetch(
          `/api/jobs?${new URLSearchParams(filters as Record<string, string>)}`
        );
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [filters]);

  if (loading) {
    return <div>Loading companies...</div>;
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium">No companies found</h3>
        <p className="text-muted-foreground">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {companies.map(company => (
        <Card key={company.name} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{company.name}</span>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="font-medium">Industry</dt>
                <dd className="text-muted-foreground">{company.industry}</dd>
              </div>
              <div>
                <dt className="font-medium">Location</dt>
                <dd className="text-muted-foreground">
                  {company.city}, {company.country}
                </dd>
              </div>
              <div>
                <dt className="font-medium">Founded</dt>
                <dd className="text-muted-foreground">{company.yearFounded}</dd>
              </div>
              <div>
                <dt className="font-medium">Employees</dt>
                <dd className="text-muted-foreground">{company.numberOfEmployees}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
