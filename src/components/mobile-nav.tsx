'use client';

import { useState } from 'react';
import { ThemeSwitch } from './theme-switch';
import { DoveLogo } from './dove-logo';

export function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <div className='flex flex-col h-full'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
          <div className='flex items-center space-x-2'>
            <DoveLogo className='w-8 h-8 text-indigo-600 dark:text-indigo-400' />
            <span className='text-xl font-bold text-gray-800 dark:text-white'>VisaBird</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            <i className='fas fa-times text-xl'></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='flex-1 p-4'>
          <ul className='space-y-4'>
            <li>
              <a
                href='#search'
                className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                onClick={() => setIsOpen(false)}>
                Search
              </a>
            </li>
            <li>
              <a
                href='#features'
                className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                onClick={() => setIsOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a
                href='#how-it-works'
                className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                onClick={() => setIsOpen(false)}>
                How It Works
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
                href='#employers'
                className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                onClick={() => setIsOpen(false)}>
                For Employers
              </a>
            </li>
            <li>
              <a
                href='#testimonials'
                className='block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'
                onClick={() => setIsOpen(false)}>
                Success Stories
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

        {/* Bottom section with theme selector and Find Jobs */}
        <div className='p-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-gray-700 dark:text-gray-300'>Theme</span>
              <ThemeSwitch />
            </div>
            <a
              href='#search'
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors'
              onClick={() => setIsOpen(false)}>
              Find Jobs Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
