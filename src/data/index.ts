import { Company } from '@/types/jobs';
import austria from './austria.json';
import belgium from './belgium.json';
import england from './england.json';
import finland from './finland.json';
import france from './france.json';
import germany from './germany.json';
import ireland from './ireland.json';
import italy from './italy.json';
import netherlands from './netherlands.json';
import newZealand from './new-zealand.json';
import norway from './norway.json';
import spain from './spain.json';
import sweden from './sweden.json';
import turkey from './turkey.json';
import denmark from './denmark.json';

const transformCompany = (company: any): Company => ({
  name: company.name,
  yearFounded: company['year-founded'],
  industry: company.industry,
  city: company.city,
  numberOfEmployees: company['number-of-employees'],
  country: company.country,
  linkedin: company.linkedin || '',
  visaSponsorship: company.visaSponsorship || false,
  remote: company.remote || false,
  id: company.id || '',
});

const transformCompanies = (companies: any[]): Company[] =>
  companies.map(transformCompany);

const countryDataAliases: Record<string, Company[]> = {
  'Austria': transformCompanies(austria),
  'United Kingdom': transformCompanies(england),
  'Finland': transformCompanies(finland),
  'France': transformCompanies(france),
  'Germany': transformCompanies(germany),
  'Ireland': transformCompanies(ireland),
  'Italy': transformCompanies(italy),
  'Netherlands': transformCompanies(netherlands),
  'New Zealand': transformCompanies(newZealand),
  'Norway': transformCompanies(norway),
  'Denmark': transformCompanies(denmark),
  'Belgium': transformCompanies(belgium),
  'Turkey': transformCompanies(turkey),
  'Spain': transformCompanies(spain),
  'Sweden': transformCompanies(sweden),
};

export const ALL_COUNTRIES = (): Company[] => {
  return [
    ...transformCompanies(austria),
    ...transformCompanies(belgium),
    ...transformCompanies(denmark),
    ...transformCompanies(england),
    ...transformCompanies(finland),
    ...transformCompanies(france),
    ...transformCompanies(germany),
    ...transformCompanies(ireland),
    ...transformCompanies(italy),
    ...transformCompanies(netherlands),
    ...transformCompanies(newZealand),
    ...transformCompanies(norway),
    ...transformCompanies(spain),
    ...transformCompanies(sweden),
    ...transformCompanies(turkey),
  ];
};

export { countryDataAliases }; 