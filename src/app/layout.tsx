import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.visabird.work'),
  title: {
    default: 'VisaBird - Find Visa Sponsorship Opportunities',
    template: '%s | VisaBird',
  },
  description:
    'Find companies that sponsor work visas in the UK, Canada, Germany, and more. Your ultimate resource for visa sponsorship opportunities worldwide.',
  keywords: [
    'visa sponsorship',
    'work visa',
    'UK visa',
    'Canada visa',
    'Germany visa',
    'job opportunities',
    'visa sponsorship jobs',
  ],
  authors: [{ name: 'Abolfazl Chaman', url: 'https://abolfazlchaman.com' }],
  creator: 'Abolfazl Chaman',
  publisher: 'VisaBird',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.visabird.work',
    title: 'VisaBird - Find Visa Sponsorship Opportunities',
    description: 'Find companies that sponsor work visas in the UK, Canada, Germany, and more.',
    siteName: 'VisaBird',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisaBird - Find Visa Sponsorship Opportunities',
    description: 'Find companies that sponsor work visas in the UK, Canada, Germany, and more.',
    creator: '@visabird',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VisaBird',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link rel="canonical" href="https://www.visabird.work" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">{children}</div>
        </ThemeProvider>
        <Analytics />
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'VisaBird',
              url: 'https://www.visabird.work',
              description:
                'Find companies that sponsor work visas in the UK, Canada, Germany, and more.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Any',
              author: {
                '@type': 'Person',
                name: 'Abolfazl Chaman',
                url: 'https://abolfazlchaman.com',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '100',
              },
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
