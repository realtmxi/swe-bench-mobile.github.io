import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mobile-Bench | Industry-Level Benchmark for Mobile Development AI Agents',
  description: 'Evaluate and compare AI coding agents on real-world mobile development tasks. Similar to SWE-bench but focused on industry-level mobile app development.',
  keywords: ['benchmark', 'mobile development', 'AI agents', 'coding assistant', 'iOS', 'Android', 'SWE-bench'],
  authors: [{ name: 'Mobile-Bench Team' }],
  openGraph: {
    title: 'Mobile-Bench',
    description: 'Industry-Level Benchmark for Mobile Development AI Agents',
    type: 'website',
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
