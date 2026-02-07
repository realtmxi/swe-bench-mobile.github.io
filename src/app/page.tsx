import Link from 'next/link';
import { LeaderboardTable } from '@/components/LeaderboardTable';
import { PrivateNotice } from '@/components/PrivateNotice';
import { getLeaderboard, getBenchmarkStats, taskCategoryStats } from '@/data/benchmark-data';

export default function HomePage() {
  const leaderboard = getLeaderboard();
  const stats = getBenchmarkStats();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-caption text-brand font-medium mb-4 animate-fade-in">
              Industry-Level Benchmark
            </p>
            <h1 className="text-display text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Mobile-Bench
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Evaluating AI coding agents on real-world mobile development tasks. 
              Like SWE-bench, for iOS and Android.
            </p>
            
            <div className="mt-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/leaderboard"
                className="px-5 py-2.5 text-[15px] font-medium bg-brand text-white rounded-full hover:bg-brand-dark transition-colors shadow-brand"
              >
                View Leaderboard
              </Link>
              <Link
                href="/docs"
                className="px-5 py-2.5 text-[15px] text-muted hover:text-foreground transition-colors"
              >
                Documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 stagger-children">
            <div>
              <p className="text-4xl md:text-5xl font-medium tabular-nums">{stats.totalTasks}</p>
              <p className="mt-2 text-caption text-muted">Tasks</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium tabular-nums">{stats.totalTestCases}</p>
              <p className="mt-2 text-caption text-muted">Test Cases</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium tabular-nums">{stats.totalAgents}</p>
              <p className="mt-2 text-caption text-muted">Agents</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium tabular-nums">{stats.totalEvaluations}</p>
              <p className="mt-2 text-caption text-muted">Evaluations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-title">Leaderboard</h2>
              <p className="mt-1 text-caption text-muted">Top performing agents</p>
            </div>
            <Link
              href="/leaderboard"
              className="text-caption text-brand hover:text-brand-dark transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="rounded-2xl border border-border/50 overflow-hidden">
            <LeaderboardTable entries={leaderboard} compact />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-title">Task Categories</h2>
            <p className="mt-1 text-caption text-muted">
              {stats.totalTasks} industry-level mobile development tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {taskCategoryStats.map((cat) => (
              <div
                key={cat.category}
                className="group p-5 rounded-2xl border border-border/50 bg-background hover:border-brand/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-body font-medium">{cat.category}</p>
                    <p className="mt-1 text-caption text-muted">{cat.count} tasks</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-medium tabular-nums">{cat.avgPassRate}%</p>
                    <p className="text-small text-muted">avg pass</p>
                  </div>
                </div>
                <div className="mt-4 h-1 bg-border/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand/30 rounded-full transition-all duration-500 group-hover:bg-brand/50"
                    style={{ width: `${cat.avgPassRate * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PrivateNotice />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-body font-medium">Real-World PRDs</h3>
              <p className="mt-2 text-caption text-muted leading-relaxed">
                Tasks derived from actual product requirement documents used in mobile app development.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-body font-medium">Automated Testing</h3>
              <p className="mt-2 text-caption text-muted leading-relaxed">
                Comprehensive test suites that validate functionality, not just syntax correctness.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-body font-medium">Reproducible Results</h3>
              <p className="mt-2 text-caption text-muted leading-relaxed">
                Standardized evaluation pipeline ensures consistent and comparable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-headline text-white">Interested in Mobile-Bench?</h2>
          <p className="mt-4 text-body text-white/70 max-w-lg mx-auto">
            Contact us for research collaboration or to discuss evaluating your AI coding agent.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/about"
              className="px-5 py-2.5 text-[15px] font-medium bg-white text-brand rounded-full hover:bg-white/90 transition-colors"
            >
              Learn More
            </Link>
            <a
              href="https://github.com/realtmxi/mobile-bench"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-[15px] text-white/80 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
