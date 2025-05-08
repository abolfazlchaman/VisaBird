'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

export function Search() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (country) params.set('country', country);
    if (industry) params.set('industry', industry);

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Input
            placeholder="Search companies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
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
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger>
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
      </div>

      <Button onClick={handleSearch} className="w-full">
        Find Jobs Now
      </Button>
    </div>
  );
}
