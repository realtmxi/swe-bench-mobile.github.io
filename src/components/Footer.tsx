import Link from 'next/link';
import { LogoChart } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/">
              <LogoChart size="md" showText />
            </Link>
            <p className="mt-4 text-small text-muted leading-relaxed">
              Industry-level benchmark for evaluating AI coding agents on mobile development.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-small font-medium mb-4">Benchmark</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/leaderboard" className="text-small text-muted hover:text-foreground transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-small text-muted hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-small font-medium mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/docs" className="text-small text-muted hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/realtmxi/mobile-bench" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-small text-muted hover:text-foreground transition-colors">
                    Paper
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50">
          <p className="text-small text-muted">
            © {new Date().getFullYear()} SWE-BENCH MOBILE
          </p>
        </div>
      </div>
    </footer>
  );
}
