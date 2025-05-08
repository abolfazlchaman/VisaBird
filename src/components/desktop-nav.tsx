import { ThemeSwitch } from './theme-switch';

export function DesktopNav() {
  return (
    <nav className='hidden md:flex items-center space-x-8'>
      <a
        href='#search'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        Search
      </a>
      <a
        href='#how-it-works'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        How It Works
      </a>
      <a
        href='#features'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        Features
      </a>
      <a
        href='#testimonials'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        Success Stories
      </a>
      <a
        href='#for-employers'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        For Employers
      </a>
      <a
        href='#about'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        About
      </a>
      <a
        href='#contact'
        className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
        Contact
      </a>
      <div className='flex items-center space-x-4'>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
