'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DesktopNav() {
  const pathname = usePathname();
  const isJobsPage = pathname === '/jobs';

  return (
    <nav className="hidden 2xl:flex items-center space-x-8">
      <Link
        href={isJobsPage ? '/#search' : '#search'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        Search
      </Link>
      <Link
        href={isJobsPage ? '/#features' : '#features'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        Features
      </Link>
      <Link
        href={isJobsPage ? '/#how-it-works' : '#how-it-works'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        How It Works
      </Link>
      <Link
        href={isJobsPage ? '/#about' : '#about'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        About
      </Link>
      <Link
        href={isJobsPage ? '/#employers' : '#employers'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        For Employers
      </Link>
      <Link
        href={isJobsPage ? '/#testimonials' : '#testimonials'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        Success Stories
      </Link>
      <Link
        href={isJobsPage ? '/#contact' : '#contact'}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400"
      >
        Contact
      </Link>
    </nav>
  );
}
