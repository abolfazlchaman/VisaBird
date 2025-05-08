import { DesktopNav } from '@/components/desktop-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ThemeSwitch } from '@/components/theme-switch';

export default function Home() {
  return (
    <div className='font-sans'>
      <header className='shadow-sm py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white'>
        <div className='container flex min-w-full px-4 justify-between items-center'>
          {/* Left side: Logo and Mobile Nav */}
          <div className='flex items-center space-x-4'>
            <MobileNav />
            <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>Visabird</div>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right side items */}
          <div className='flex items-center space-x-4'>
            <div className='hidden lg:block'>
              <ThemeSwitch />
            </div>
            <a
              href='https://jobs.visabird.ir'
              className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-center justify-center flex flex-row items-center'>
              Jobs
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div
            className='absolute inset-0 bg-cover bg-center opacity-30'
            style={{ backgroundImage: 'url(/placeholder-illustration.svg)' }}></div>
        </div>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Discover Global Opportunities With Visa Sponsorship
          </h1>
          <p className='text-xl mb-8 text-blue-100'>
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
        className='py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        id='features'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>Powerful Features to Find Your Dream Job</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 rounded-lg shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'>
              <div className='text-4xl text-indigo-600 dark:text-indigo-400 mb-4'>⚙️</div>
              <h3 className='text-xl font-semibold mb-3'>Advanced Job Filtering</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Precisely filter jobs by visa status, country, company, job type, and more to find
                the perfect match.
              </p>
            </div>
            <div className='p-6 rounded-lg shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'>
              <div className='text-4xl text-indigo-600 dark:text-indigo-400 mb-4'>📂</div>
              <h3 className='text-xl font-semibold mb-3'>Verified Open-Source Data</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Our data is transparent, community-backed, and constantly updated for accuracy and
                reliability.
              </p>
            </div>
            <div className='p-6 rounded-lg shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'>
              <div className='text-4xl text-indigo-600 dark:text-indigo-400 mb-4'>✨</div>
              <h3 className='text-xl font-semibold mb-3'>Clean & Intuitive UI</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Navigate effortlessly with a fast, clean, and mobile-friendly interface designed for
                a smooth user experience.
              </p>
            </div>
            <div className='p-6 rounded-lg shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'>
              <div className='text-4xl text-indigo-600 dark:text-indigo-400 mb-4'>👩‍💻</div>
              <h3 className='text-xl font-semibold mb-3'>Designed for Global Talent</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Tailored to meet the unique needs of skilled professionals, students, and remote
                workers seeking opportunities abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Visabird Works Section */}
      <section
        className='py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'
        id='how-it-works'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>
            Your Path to a Global Career in 3 Simple Steps
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 rounded-lg transition transform hover:scale-105 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
              <div className='text-5xl text-indigo-600 dark:text-indigo-400 mb-4'>🔎</div>
              <h3 className='text-xl font-semibold mb-3'>1. Search</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Browse our extensive database of international job listings with visa sponsorship.
              </p>
            </div>
            <div className='p-6 rounded-lg transition transform hover:scale-105 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
              <div className='text-5xl text-indigo-600 dark:text-indigo-400 mb-4'>🎛️</div>
              <h3 className='text-xl font-semibold mb-3'>2. Filter</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Use our advanced filters to narrow down opportunities by country, visa status,
                industry, and more.
              </p>
            </div>
            <div className='p-6 rounded-lg transition transform hover:scale-105 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
              <div className='text-5xl text-indigo-600 dark:text-indigo-400 mb-4'>🚀</div>
              <h3 className='text-xl font-semibold mb-3'>3. Apply</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Easily access direct links to company career pages and apply for your desired
                positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers / Partners */}
      <section
        className='py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        id='employers'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>For Employers & Partners</h2>
          <p className='text-xl mb-8 text-gray-600 dark:text-gray-300'>
            Visabird offers a transparent and efficient way for companies to discover and connect
            with a global pool of skilled professionals. Highlight your commitment to international
            talent and streamline your hiring process. We invite HR teams and recruiters to explore
            integration or partnership opportunities to find the perfect candidates.
          </p>
          <a
            href='#contact'
            className='bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600'>
            Inquire About Partnership
          </a>
        </div>
      </section>

      {/* Developer Credit & Tech Stack */}
      <section
        className='py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'
        id='tech-stack'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>Built with Care</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>by Abolfazl Chaman</p>
          <p className='text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200'>
            Powered by modern, open technologies:
          </p>
          <div className='flex justify-center space-x-8 mb-8 flex-wrap'>
            <div className='text-lg font-medium text-gray-700 dark:text-gray-300'>Next.js</div>
            <div className='text-lg font-medium text-gray-700 dark:text-gray-300'>Firebase</div>
            <div className='text-lg font-medium text-gray-700 dark:text-gray-300'>Tailwind CSS</div>
            <div className='text-lg font-medium text-gray-700 dark:text-gray-300'>TypeScript</div>
          </div>
          <div className='space-x-6 text-lg'>
            <a
              href='#'
              className='text-indigo-600 dark:text-indigo-400 hover:underline'>
              GitHub (Data)
            </a>
            <a
              href='#'
              className='text-indigo-600 dark:text-indigo-400 hover:underline'>
              GitHub (Frontend)
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className='py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        id='testimonials'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>What Our Users Say</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-6 rounded-lg shadow-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'>
              <p className='italic text-gray-600 dark:text-gray-400'>
                "Helped me land my first job abroad!"
              </p>
              <p className='mt-4 font-semibold'>- Satisfied User</p>
            </div>
            <div className='p-6 rounded-lg shadow-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'>
              <p className='italic text-gray-600 dark:text-gray-400'>
                "A fantastic resource for international job seekers."
              </p>
              <p className='mt-4 font-semibold'>- Another User</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-10 bg-gray-800 dark:bg-gray-900 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <div className='mb-4'>Visabird</div>
          <div className='space-x-4 mb-4 text-sm'>
            <a
              href='#'
              className='hover:underline'>
              Terms
            </a>
            <a
              href='#'
              className='hover:underline'>
              Privacy
            </a>
            <a
              href='#'
              className='hover:underline'>
              License
            </a>
          </div>
          <div className='text-gray-400 text-sm'>Icons by Icons8</div>
          <div className='text-sm mt-2 text-gray-400'>
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
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
