import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechMeet - Book Technology Events',
  description: 'Discover and book the most exciting technology events, conferences, and meetups.',
  keywords: ['tech events', 'technology conferences', 'meetups', 'booking platform'],
  authors: [{ name: 'TechMeet Team' }],
  openGraph: {
    title: 'TechMeet - Book Technology Events',
    description: 'Discover and book the most exciting technology events, conferences, and meetups.',
    type: 'website',
    locale: 'en_US',
    url: 'https://techmeet.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}