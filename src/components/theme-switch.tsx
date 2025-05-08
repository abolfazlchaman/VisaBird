'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ];

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
        aria-label='Select theme'>
        <span suppressHydrationWarning>{themes.find((t) => t.value === theme)?.icon}</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'>
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value);
                  setIsOpen(false);
                }}
                className={`${
                  theme === t.value
                    ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                } flex items-center space-x-2 w-full px-4 py-2 text-sm`}
                role='menuitem'>
                <span>{t.icon}</span>
                <span>{t.label}</span>
                {theme === t.value && (
                  <svg
                    className='w-4 h-4 ml-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
