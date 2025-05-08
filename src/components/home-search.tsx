'use client';

import { useRouter } from 'next/navigation';

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

export function HomeSearch() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    const country = formData.get('country');
    const industry = formData.get('industry');

    if (country) params.append('country', country.toString());
    if (industry) params.append('industry', industry.toString());

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Country</label>
          <select
            name="country"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="">All Countries</option>
            {COUNTRIES.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Industry</label>
          <select
            name="industry"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="">All Industries</option>
            {INDUSTRIES.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
