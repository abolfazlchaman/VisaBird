'use client';

import { useState } from 'react';
import { ThemeSwitch } from './theme-switch';
import { DoveLogo } from './dove-logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const pathname = usePathname();
  const isJobsPage = pathname === '/jobs';

  return (
    <div
      className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <DoveLogo className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">VisaBird</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href={isJobsPage ? '/#search' : '#search'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#features' : '#features'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#how-it-works' : '#how-it-works'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#about' : '#about'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#employers' : '#employers'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                For Employers
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#testimonials' : '#testimonials'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link
                href={isJobsPage ? '/#contact' : '#contact'}
                className="block text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom section with theme selector and Find Jobs */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
              <ThemeSwitch />
            </div>
            <Link
              // href={isJobsPage ? '/#jobs' : '#jobs'}
              href="/jobs"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Find Jobs Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
