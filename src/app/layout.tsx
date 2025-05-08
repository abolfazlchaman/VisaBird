import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VisaBird - Find Visa Sponsorship Opportunities',
  description: 'Find companies that sponsor work visas in the UK, Canada, Germany, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
