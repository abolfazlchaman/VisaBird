'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { JobFilters } from '@/types/jobs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';

interface JobSearchProps {
  initialFilters: JobFilters;
}

const COUNTRIES = [
  'Germany',
  'United Kingdom',
  'Netherlands',
  'France',
  'Spain',
  'Italy',
  'Sweden',
  'Denmark',
  'Norway',
  'Finland',
  'Ireland',
  'Austria',
  'Belgium',
  'New Zealand',
  'Turkey',
];

const INDUSTRIES = [
  'Software',
  'Consulting',
  'Banking',
  'Healthcare',
  'Automotive',
  'Pharmaceuticals',
  'Telecommunications',
  'Engineering',
  'Insurance',
  'Consumer Goods',
  'Chemicals',
  'Logistics',
  'Aviation',
  'Semiconductor',
  'Cloud Computing',
];

export function JobSearch({ initialFilters }: JobSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<JobFilters>(initialFilters);
  const debouncedSearch = useDebounce(filters.search, 300);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (debouncedSearch !== undefined) {
      router.push(`/jobs?${createQueryString('search', debouncedSearch)}`);
    }
  }, [debouncedSearch, createQueryString, router]);

  const handleFilterChange = (name: keyof JobFilters, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    router.push(`/jobs?${createQueryString(name, value)}`);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="search">Search Companies</Label>
        <Input
          id="search"
          placeholder="Search by company name..."
          value={filters.search || ''}
          onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select
          value={filters.country}
          onValueChange={value => handleFilterChange('country', value)}
        >
          <SelectTrigger id="country">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map(country => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          value={filters.industry}
          onValueChange={value => handleFilterChange('industry', value)}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {INDUSTRIES.map(industry => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Enter city..."
          value={filters.city || ''}
          onChange={e => handleFilterChange('city', e.target.value)}
        />
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setFilters({});
          router.push('/jobs');
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
}
