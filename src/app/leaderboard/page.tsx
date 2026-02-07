import { LeaderboardTable } from '@/components/LeaderboardTable';
import { AgentComparisonChart, TaskDifficultyChart, CategoryPassRateChart } from '@/components/ResultsChart';
import { getLeaderboard, getBenchmarkStats, taskCategoryStats, taskDifficultyStats } from '@/data/benchmark-data';

export const metadata = {
  title: 'Leaderboard | Mobile-Bench',
  description: 'Compare AI coding agents on Mobile-Bench benchmark tasks',
};

export default function LeaderboardPage() {
  const leaderboard = getLeaderboard();
  const stats = getBenchmarkStats();

  const bestTaskSuccess = Math.max(...leaderboard.map(e => e.result.taskSuccessRate));
  const bestTestPass = Math.max(...leaderboard.map(e => e.result.testPassRate));
  const avgTaskSuccess = leaderboard.reduce((sum, e) => sum + e.result.taskSuccessRate, 0) / leaderboard.length;
  const avgTestPass = leaderboard.reduce((sum, e) => sum + e.result.testPassRate, 0) / leaderboard.length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-headline">Leaderboard</h1>
          <p className="mt-2 text-body text-muted">
            Ranking of AI coding agents on {stats.totalTasks} mobile development tasks
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="pb-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-border/50">
              <p className="text-small text-muted">Best Task Success</p>
              <p className="mt-2 text-3xl font-medium tabular-nums text-brand">{bestTaskSuccess.toFixed(1)}%</p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <p className="text-small text-muted">Best Test Pass</p>
              <p className="mt-2 text-3xl font-medium tabular-nums">{bestTestPass.toFixed(1)}%</p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <p className="text-small text-muted">Avg Task Success</p>
              <p className="mt-2 text-3xl font-medium tabular-nums">{avgTaskSuccess.toFixed(1)}%</p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <p className="text-small text-muted">Total Agents</p>
              <p className="mt-2 text-3xl font-medium tabular-nums">{leaderboard.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Leaderboard Table */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border/50 overflow-hidden bg-background">
            <LeaderboardTable entries={leaderboard} />
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-title mb-6">Performance Analysis</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-6">Agent Comparison</h3>
              <AgentComparisonChart />
              <div className="mt-4 flex items-center gap-6 text-small text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-brand" />
                  Task Success
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-brand-light" />
                  Test Pass
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-6">By Difficulty</h3>
              <TaskDifficultyChart />
              <div className="mt-4 flex items-center gap-6 text-small text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-brand" />
                  Task Count
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-brand-light" />
                  Avg Pass %
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Performance */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="p-6 rounded-2xl border border-border/50">
            <h3 className="text-body font-medium mb-6">Performance by Category</h3>
            <CategoryPassRateChart />
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-4">Task Categories</h3>
              <div className="space-y-3">
                {taskCategoryStats.map((cat) => (
                  <div key={cat.category} className="flex items-center justify-between">
                    <span className="text-caption text-muted">{cat.category}</span>
                    <span className="text-caption tabular-nums">{cat.count} tasks · <span className="text-brand">{cat.avgPassRate}%</span></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-4">Difficulty Distribution</h3>
              <div className="space-y-3">
                {taskDifficultyStats.map((diff) => (
                  <div key={diff.difficulty} className="flex items-center justify-between">
                    <span className="text-caption text-muted">{diff.difficulty}</span>
                    <span className="text-caption tabular-nums">{diff.count} tasks · <span className="text-brand">{diff.avgPassRate}%</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Explanation */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-foreground/[0.02] border border-border/30">
            <div>
              <h3 className="text-body font-medium mb-2">Task Success Rate</h3>
              <p className="text-caption text-muted leading-relaxed">
                Percentage of tasks where the agent generated a patch that passes all test cases. 
                A task is considered successful only if 100% of its tests pass.
              </p>
            </div>
            <div>
              <h3 className="text-body font-medium mb-2">Test Pass Rate</h3>
              <p className="text-caption text-muted leading-relaxed">
                Overall percentage of individual test cases passed across all tasks. 
                This provides a more granular view of agent performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Notice */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="p-4 rounded-xl bg-foreground/[0.03] border border-border/30">
            <p className="text-small text-muted">
              <span className="inline-block w-4 h-4 mr-2 align-middle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
              Task details are private. Contact us for research collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="p-6 rounded-2xl bg-brand/5 border border-brand/20">
            <h2 className="text-body font-medium mb-6">Key Insights from Paper</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-caption font-medium mb-1">Agent Design Matters</p>
                <p className="text-small text-muted leading-relaxed">
                  The same model (Opus 4.5) achieves 12% on Cursor but only 4% on Codex—a 3× difference. Agent scaffolding is as important as model capability.
                </p>
              </div>
              <div>
                <p className="text-caption font-medium mb-1">Complexity Impact</p>
                <p className="text-small text-muted leading-relaxed">
                  Performance drops sharply with task complexity: 18% success for 1-2 files vs. only 2% for 7+ files.
                </p>
              </div>
              <div>
                <p className="text-caption font-medium mb-1">Cost-Performance Trade-off</p>
                <p className="text-small text-muted leading-relaxed">
                  Codex + GLM 4.6 offers best value: 12% success at $1.30/task vs. Cursor + Opus at $3.50/task.
                </p>
              </div>
              <div>
                <p className="text-caption font-medium mb-1">Prompt Engineering</p>
                <p className="text-small text-muted leading-relaxed">
                  Simple "Defensive Programming" prompts outperform complex ones by 7.4%. Complexity hurts performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
