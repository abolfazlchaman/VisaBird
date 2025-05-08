'use client';

import { useState } from 'react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { DoveLogo } from './dove-logo';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Commented out for future use
  // const handleMobileMenuChange = (isOpen: boolean) => {
  //   console.log('Mobile menu state changed:', isOpen);
  //   setIsMobileMenuOpen(isOpen);
  // };

  return (
    <>
      <header className='sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
              <DoveLogo className='w-8 h-8 text-indigo-600 dark:text-indigo-400' />
              <span className='text-xl font-bold text-gray-800 dark:text-white'>VisaBird</span>
            </div>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Right side - Find Jobs button and mobile menu */}
            <div className='flex items-center space-x-4'>
              <a
                href='#search'
                className='hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition'>
                Find Jobs Now
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className='md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'>
                <i className='fas fa-bars text-xl'></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
