import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const siteUrl = 'https://swebenchmobile.com';

export const metadata: Metadata = {
  title: 'SWE-Bench Mobile | Industry-Level Benchmark for Mobile Development AI Agents',
  description: 'Evaluate and compare AI coding agents on real-world mobile development tasks from an industry-level iOS codebase.',
  keywords: ['benchmark', 'mobile development', 'AI agents', 'coding assistant', 'iOS', 'SWE-bench', 'SWE-Bench Mobile', 'LLM', 'code generation'],
  authors: [{ name: 'SWE-Bench Mobile Team' }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'SWE-BENCH MOBILE',
    description: 'Industry-Level Benchmark for Mobile Development AI Agents',
    url: siteUrl,
    siteName: 'SWE-Bench Mobile',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SWE-BENCH MOBILE - Industry-Level Benchmark for Mobile Development AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWE-BENCH MOBILE',
    description: 'Industry-Level Benchmark for Mobile Development AI Agents',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
