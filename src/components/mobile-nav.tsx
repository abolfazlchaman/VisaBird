'use client';

import { useState } from 'react';
import { ThemeSwitch } from './theme-switch';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className='p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        aria-label='Toggle menu'>
        <svg
          className='w-6 h-6'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          {isOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed inset-0 bg-white dark:bg-gray-900 z-50'>
          <div className='flex flex-col h-full'>
            {/* Header with Logo */}
            <div className='p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center'>
              <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex flex-row items-center space-x-2'>
                <button
                  onClick={toggleMenu}
                  className='p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                  aria-label='Close menu'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
                Visabird
              </div>

              <ThemeSwitch />
            </div>

            {/* Navigation Links */}
            <nav className='flex-1 px-4 py-8'>
              <ul className='space-y-6'>
                <li>
                  <a
                    href='#jobs'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href='#how-it-works'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href='#employers'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    For Employers
                  </a>
                </li>
                <li>
                  <a
                    href='#contribute'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                    onClick={() => setIsOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom section with theme selector and Find Jobs button */}
            <div className='p-4 border-t border-gray-200 dark:border-gray-800'>
              <div className='flex flex-col space-y-4'>
                <a
                  href='https://jobs.visabird.ir'
                  className='bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 justify-center flex flex-row items-center text-center'
                  onClick={() => setIsOpen(false)}>
                  Find Jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
