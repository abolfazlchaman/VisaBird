import { Header } from '@/components/header';
import { RecentSponsors } from '@/components/recent-sponsors';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { HowItWorks } from '@/components/how-it-works';
import { ForEmployers } from '@/components/for-employers';
import Image from 'next/image';
import heroIMG from '@/public/images/image.webp';
import { HomeSearch } from '@/components/home-search';

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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroIMG.src}
            alt="Background"
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="fas fa-check-circle mr-2"></i>
              100% Free - No Hidden Fees
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Dream Job Abroad with Visa Sponsorship
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Access our curated database of companies that sponsor work visas. Updated daily,
              completely free, and no strings attached.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/jobs"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium text-lg transition"
            >
              Start Your Search
            </a>
            <a
              href="#how-it-works"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-3 rounded-lg font-medium text-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Find Companies That Sponsor Visas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Filter by country, company, or industry to find your perfect opportunity.
            </p>
          </div>

          <HomeSearch />

          {/* Recent Sponsors Section */}
          <RecentSponsors />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Why Use VisaBird?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform makes finding visa sponsorship opportunities simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-search text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Comprehensive Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Filter companies by country, industry, and company size to find exactly what you're
                looking for.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Community-Powered
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our data is continuously updated by a global community of contributors sharing their
                experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-bell text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Real-Time Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get notified when new visa sponsorship opportunities become available in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <HowItWorks />

      {/* About Section */}
      <AboutSection />

      {/* For Employers Section */}
      <ForEmployers />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
