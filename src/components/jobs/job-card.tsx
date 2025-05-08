'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Company } from '@/types/jobs';
import { Building2, MapPin, Users, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface JobCardProps {
  company: Company;
}

export function JobCard({ company }: JobCardProps) {
  const getCountryFlag = (country: string) => {
    const countryCode = country.toLowerCase().replace(/\s+/g, '-');
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          {company.logo && (
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
              {company.name}
            </CardTitle>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Building2 className="mr-1 h-4 w-4" />
              {company.industry}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {company.country && (
            <div className="relative w-6 h-4">
              <Image
                src={getCountryFlag(company.country)}
                alt={`${company.country} flag`}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          )}
          {company.linkedin && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="mr-1 h-4 w-4" />
            {company.city}, {company.country}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Users className="mr-1 h-4 w-4" />
            {company.numberOfEmployees} employees
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {company.visaSponsorship && (
              <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                Visa Sponsorship
              </Badge>
            )}
            {company.remote && (
              <Badge
                variant="secondary"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                Remote
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
