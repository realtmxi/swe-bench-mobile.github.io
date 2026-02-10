'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LogoChart } from './Logo';

const navigation = [
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'About', href: '/about' },
  { name: 'Docs', href: '/docs' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="mx-auto max-w-6xl px-6" aria-label="Top">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <LogoChart size="md" showText />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 text-[13px] text-muted hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="https://github.com/realtmxi/swe-bench-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-[13px] text-muted hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="/about#citation"
              className="px-4 py-1.5 text-[13px] font-medium bg-brand text-white rounded-full hover:bg-brand-dark transition-colors duration-200"
            >
              Paper
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-smooth',
            mobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="pt-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-[15px] text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 flex items-center gap-4">
              <a
                href="https://github.com/realtmxi/swe-bench-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="/about#citation"
                className="text-[15px] text-brand hover:text-brand-dark transition-colors"
              >
                Paper
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
