'use client';

import { useState } from 'react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { DoveLogo } from './dove-logo';
import { ThemeSwitch } from './theme-switch';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Commented out for future use
  // const handleMobileMenuChange = (isOpen: boolean) => {
  //   console.log('Mobile menu state changed:', isOpen);
  //   setIsMobileMenuOpen(isOpen);
  // };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container min-w-full px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <DoveLogo className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">VisaBird</span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Right side - Find Jobs button, theme switch and mobile menu */}
            <div className="flex items-center space-x-4">
              <Link
                href="/jobs"
                className="hidden 2xl:inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Find Jobs Now
              </Link>
              <div className="hidden 2xl:block">
                <ThemeSwitch />
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="2xl:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
}
