'use client';
import { useState, useEffect, useMemo } from 'react';

type Theme = 'system' | 'light' | 'dark';

export default function Home() {
  const [theme, setTheme] = useState('system'); // 'system', 'light', or 'dark'
  const [effectiveTheme, setEffectiveTheme] = useState('light'); // 'light' or 'dark' based on system/user preference

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const getEffectiveTheme = () => {
      if (theme === 'system') {
        return mediaQuery.matches ? 'dark' : 'light';
      }
      return theme;
    };

    const applyTheme = () => {
      const effective = getEffectiveTheme();
      setEffectiveTheme(effective);

      const root = document.documentElement;
      if (effective === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(); // apply on mount

    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme); // reapply if system theme changes
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'system') return 'light';
      if (prevTheme === 'light') return 'dark' as Theme; // Explicitly cast to Theme
      return 'system';
    });
  };

  // Determine which icon to display based on the current theme state
  const ThemeIcon = useMemo(() => {
    if (theme === 'system') return () => <span>💻</span>; // Placeholder for System icon
    if (theme === 'light') return () => <span>☀️</span>; // Placeholder for Sun icon
    return () => <span>🌙</span>; // Placeholder for Moon icon
  }, [theme]);

  return (
    <div
      className={`font-sans ${
        effectiveTheme === 'dark' ? 'dark bg-gray-900 text-white' : 'light bg-white text-gray-800'
      }`}>
      <header
        className={`shadow-sm py-4 ${
          effectiveTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
        <div className='container mx-auto px-4 flex justify-between items-center flex-wrap'>
          {/* Logo */}
          <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>Visabird</div>
          {/* Navigation */}
          <nav className='mt-4 md:mt-0'>
            {' '}
            {/* Added margin top for smaller screens */}
            <ul className='flex flex-wrap justify-center md:justify-start space-x-4'>
              {' '}
              {/* Added flex-wrap and justify for responsiveness */}
              <li>
                <a
                  href='#jobs'
                  className='text-gray-700 hover:text-indigo-700'>
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href='#how-it-works'
                  className={`hover:text-indigo-700 ${
                    effectiveTheme === 'dark'
                      ? 'text-gray-300 hover:text-indigo-500'
                      : 'text-gray-700'
                  }`}>
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href='#employers'
                  className={`hover:text-indigo-700 ${
                    effectiveTheme === 'dark'
                      ? 'text-gray-300 hover:text-indigo-500'
                      : 'text-gray-700'
                  } hidden md:block`}>
                  For Employers
                </a>
              </li>{' '}
              {/* Hide on smaller screens */}
              <li>
                <a
                  href='#contribute'
                  className={`hover:text-indigo-700 ${
                    effectiveTheme === 'dark'
                      ? 'text-gray-300 hover:text-indigo-500'
                      : 'text-gray-700'
                  }`}>
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className={`hover:text-indigo-700 ${
                    effectiveTheme === 'dark'
                      ? 'text-gray-300 hover:text-indigo-500'
                      : 'text-gray-700'
                  }`}>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className={`hover:text-indigo-700 ${
                    effectiveTheme === 'dark'
                      ? 'text-gray-300 hover:text-indigo-500'
                      : 'text-gray-700'
                  }`}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* CTA Button */}
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg hover:scale-110 transition-transform z-50 h-12 w-12 rounded-full'>
            {/* Render the selected icon */}
            <ThemeIcon />
          </button>
          <a
            href='https://jobs.visabird.ir'
            className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 mt-4 md:mt-0'>
            Find Jobs Now
          </a>{' '}
          {/* Added margin top for smaller screens */}
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 overflow-hidden'>
        {/* Background Illustration Placeholder */}
        <div className='absolute inset-0 z-0'>
          {/* Add your abstract globe or migration/tech illustration here */}
          <div
            className='absolute inset-0 bg-cover bg-center opacity-30'
            style={{ backgroundImage: 'url(/placeholder-illustration.svg)' }}></div>{' '}
          {/* Example placeholder */}
        </div>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Discover Global Opportunities With Visa Sponsorship
          </h1>
          <p className='text-xl mb-8 text-blue-100 dark:text-blue-200'>
            Helping international professionals connect with forward-thinking companies.
          </p>
          <div className='space-x-4 flex justify-center'>
            <a
              href='https://jobs.visabird.ir'
              className='bg-white text-indigo-600 px-6 py-3 rounded-md text-lg hover:bg-gray-100'>
              Browse Jobs
            </a>
            <a
              href='#how-it-works'
              className='border border-white text-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-indigo-600'>
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section
        className={`py-20 ${
          effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'
        }`}
        id='features'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>Powerful Features to Find Your Dream Job</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div
              className={`p-6 rounded-lg shadow-md transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
              }`}>
              {/* Icon placeholder for Advanced Filtering */}
              <div className='text-4xl text-indigo-600 mb-4'>⚙️</div>
              <h3 className='text-xl font-semibold mb-3'>Advanced Job Filtering</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Precisely filter jobs by visa status, country, company, job type, and more to find
                the perfect match.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-md transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
              }`}>
              {/* Icon placeholder for Open Source Data */}
              <div className='text-4xl text-indigo-600 mb-4'>📂</div>
              <h3 className='text-xl font-semibold mb-3'>Verified Open-Source Data</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Our data is transparent, community-backed, and constantly updated for accuracy and
                reliability.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-md transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
              }`}>
              {/* Icon placeholder for Clean UI */}
              <div className='text-4xl text-indigo-600 mb-4'>✨</div>
              <h3 className='text-xl font-semibold mb-3'>Clean & Intuitive UI</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Navigate effortlessly with a fast, clean, and mobile-friendly interface designed for
                a smooth user experience.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-md transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
              }`}>
              {/* Icon placeholder for Skilled Professionals */}
              <div className='text-4xl text-indigo-600 mb-4'>👩‍💻</div>
              <h3 className='text-xl font-semibold mb-3'>Designed for Global Talent</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Tailored to meet the unique needs of skilled professionals, students, and remote
                workers seeking opportunities abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Visabird Works Section */}
      <section
        className={`py-20 ${
          effectiveTheme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
        }`}
        id='how-it-works'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>
            Your Path to a Global Career in 3 Simple Steps
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div
              className={`p-6 rounded-lg transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}>
              {/* Icon Placeholder for Search */}
              <div className='text-5xl text-indigo-600 mb-4'>🔎</div>
              <h3 className='text-xl font-semibold mb-3'>1. Search</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Browse our extensive database of international job listings with visa sponsorship.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}>
              {/* Icon Placeholder for Filter */}
              <div className='text-5xl text-indigo-600 mb-4'>🎛️</div>
              <h3 className='text-xl font-semibold mb-3'>2. Filter</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Use our advanced filters to narrow down opportunities by country, visa status,
                industry, and more.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg transition transform hover:scale-105 ${
                effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}>
              {/* Icon Placeholder for Apply */}
              <div className='text-5xl text-indigo-600 mb-4'>🚀</div>
              <h3 className='text-xl font-semibold mb-3'>3. Apply</h3>
              <p className={`${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Easily access direct links to company career pages and apply for your desired
                positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers / Partners */}
      <section
        className={`py-20 relative z-10 ${
          effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'
        }`}
        id='employers'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>For Employers & Partners</h2>
          <p
            className={`text-xl mb-8 ${
              effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Visabird offers a transparent and efficient way for companies to discover and connect
            with a global pool of skilled professionals. Highlight your commitment to international
            talent and streamline your hiring process. We invite HR teams and recruiters to explore
            integration or partnership opportunities to find the perfect candidates.
          </p>
          <a
            href='#contact'
            className='bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700'>
            Inquire About Partnership
          </a>
        </div>
      </section>

      {/* Developer Credit & Tech Stack */}
      <section
        className={`py-20 relative z-10 ${
          theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
        }`}
        id='tech-stack'>
        <div className="container mx-auto px-4 text-center ${effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'}">
          <h2 className='text-3xl font-bold mb-8'>Built with Care</h2>
          <p className='text-gray-700 mb-4'>by Abolfazl Chaman</p>
          <p
            className={`text-xl font-semibold mb-6 ${
              effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-800'
            }`}>
            Powered by modern, open technologies:
          </p>
          <div className='flex justify-center space-x-8 mb-8'>
            {/* Tech Stack Logos (Placeholders) */}
            <div
              className={`${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } text-lg font-medium`}>
              Next.js
            </div>
            <div
              className={`${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } text-lg font-medium`}>
              Firebase
            </div>
            <div
              className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } text-lg font-medium`}>
              Tailwind CSS
            </div>
            <div
              className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } text-lg font-medium`}>
              TypeScript
            </div>
          </div>
          <div className='space-x-6 text-lg'>
            <a
              href='#'
              className='text-indigo-600 hover:underline'>
              GitHub (Data)
            </a>{' '}
            {/* Placeholder link, replace # with actual URL */}
            <a
              href='#'
              className='text-indigo-600 hover:underline'>
              GitHub (Frontend)
            </a>{' '}
            {/* Placeholder link */}
          </div>
        </div>
        {/* Testimonials / Quotes */}
        <section
          className={`py-20 relative z-10 ${
            effectiveTheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'
          }`}
          id='testimonials'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-8'>What Our Users Say</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div
                className={`p-6 rounded-lg shadow-md ${
                  effectiveTheme === 'dark'
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                <p
                  className={`italic ${
                    effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  "Helped me land my first job abroad!"
                </p>
                <p className='mt-4 font-semibold'>- Satisfied User</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md ${
                  theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                <p className='italic text-gray-700'>
                  "A fantastic resource for international job seekers."
                </p>
                <p className='mt-4 font-semibold'>- Another User</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer
        className={`py-10 relative z-10 ${
          effectiveTheme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'
        }`}>
        <div className='container mx-auto px-4 text-center'>
          <div className='mb-4'>Visabird</div>
          <div className='space-x-4 mb-4 text-sm'>
            <a
              href='#'
              className='hover:underline'>
              Terms
            </a>{' '}
            {/* Placeholder link */}
            <a
              href='#'
              className='hover:underline'>
              Privacy
            </a>{' '}
            {/* Placeholder link */}
            <a
              href='#'
              className='hover:underline'>
              License
            </a>{' '}
            {/* Placeholder link */}
          </div>
          <div className='text-gray-400 text-sm'>Icons by Icons8</div>
          <div
            className={`text-sm mt-2 ${
              effectiveTheme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
            Contact:{' '}
            <a
              href='mailto:contact@visabird.ir'
              className='hover:underline'>
              contact@visabird.ir
            </a>{' '}
            |{' '}
            <a
              href='#'
              className='hover:underline'>
              GitHub
            </a>{' '}
            {/* Placeholder link */}
          </div>
        </div>
      </footer>
    </div>
  );
}
