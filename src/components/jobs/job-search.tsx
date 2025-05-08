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
import { Search, X } from 'lucide-react';

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

const EMPLOYEE_RANGES = [
  { label: '1-50', min: '1', max: '50' },
  { label: '51-200', min: '51', max: '200' },
  { label: '201-500', min: '201', max: '500' },
  { label: '501-1000', min: '501', max: '1000' },
  { label: '1001-5000', min: '1001', max: '5000' },
  { label: '5000+', min: '5000', max: '10000' },
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
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    router.push(`/jobs?${createQueryString(name, value)}`);
  };

  const handleEmployeeRangeChange = (value: string) => {
    const range = EMPLOYEE_RANGES.find(r => r.label === value);
    if (!range) return;

    const newFilters = {
      ...filters,
      minEmployees: range.min,
      maxEmployees: range.max,
    };
    setFilters(newFilters);
    router.push(
      `/jobs?${createQueryString('minEmployees', range.min)}&${createQueryString(
        'maxEmployees',
        range.max
      )}`
    );
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  const clearFilters = () => {
    setFilters({});
    router.push('/jobs');
  };

  return (
    <div className="space-y-6 bg-slate-50 dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700">
      <div className="space-y-2">
        <Label htmlFor="search" className="text-gray-800 dark:text-white">
          Search Companies
        </Label>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            id="search"
            placeholder="Search by company name..."
            value={filters.search || ''}
            onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
            className="pl-8 bg-white dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          {filters.search && (
            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, search: '' }));
                router.push(`/jobs?${createQueryString('search', '')}`);
              }}
              className="absolute right-2 top-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-gray-800 dark:text-white">
          Country
        </Label>
        <Select
          value={filters.country || ''}
          onValueChange={value => handleFilterChange('country', value)}
        >
          <SelectTrigger
            id="country"
            className="bg-white dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-gray-900 dark:text-white"
          >
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
            {COUNTRIES.map(country => (
              <SelectItem
                key={country}
                value={country}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry" className="text-gray-800 dark:text-white">
          Industry
        </Label>
        <Select
          value={filters.industry || ''}
          onValueChange={value => handleFilterChange('industry', value)}
        >
          <SelectTrigger
            id="industry"
            className="bg-white dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-gray-900 dark:text-white"
          >
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
            {INDUSTRIES.map(industry => (
              <SelectItem
                key={industry}
                value={industry}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city" className="text-gray-800 dark:text-white">
          City
        </Label>
        <Input
          id="city"
          placeholder="Enter city..."
          value={filters.city || ''}
          onChange={e => handleFilterChange('city', e.target.value)}
          className="bg-white dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-gray-800 dark:text-white">Employee Count</Label>
        <Select
          value={
            filters.minEmployees && filters.maxEmployees
              ? EMPLOYEE_RANGES.find(
                  r => r.min === filters.minEmployees && r.max === filters.maxEmployees
                )?.label || ''
              : ''
          }
          onValueChange={handleEmployeeRangeChange}
        >
          <SelectTrigger className="bg-white dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-gray-900 dark:text-white">
            <SelectValue placeholder="Select employee range" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
            {EMPLOYEE_RANGES.map(range => (
              <SelectItem
                key={range.label}
                value={range.label}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full border-slate-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
}
