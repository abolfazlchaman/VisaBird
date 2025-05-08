'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
      aria-label='Toggle theme'>
      {resolvedTheme === 'dark' ? (
        <i className='fas fa-sun text-yellow-500'></i>
      ) : (
        <i className='fas fa-moon text-gray-700'></i>
      )}
    </button>
  );
}
