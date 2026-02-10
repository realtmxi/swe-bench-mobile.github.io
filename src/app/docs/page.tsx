export const metadata = {
  title: 'Documentation | SWE-Bench Mobile',
  description: 'Learn how to use SWE-Bench Mobile to evaluate AI coding agents',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-headline">Documentation</h1>
          <p className="mt-2 text-body text-muted">
            Everything you need to know about SWE-Bench Mobile
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="p-6 rounded-2xl bg-foreground text-background">
            <h2 className="text-body font-medium mb-4">Quick Start</h2>
            <p className="text-caption text-background/70 mb-6">
              Submit your agent for evaluation on SWE-Bench Mobile.
            </p>
            <div className="p-4 rounded-xl bg-background/10 font-mono text-small overflow-x-auto">
              <p className="text-background/50"># Clone the repository</p>
              <p>git clone https://github.com/realtmxi/swe-bench-mobile.git</p>
              <p className="mt-3 text-background/50"># Run evaluation on a single task</p>
              <p>./run_evaluation.sh --agent codex --task 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Overview</h2>
          <div className="space-y-4 text-caption text-muted leading-relaxed">
            <p>
              SWE-Bench Mobile is an industry-level benchmark for evaluating AI coding agents on
              real-world mobile development tasks. It consists of 50 tasks derived from actual
              product requirements at a major social media platform, with 449 human-verified
              test cases.
            </p>
            <p>
              Unlike existing benchmarks that focus on isolated coding problems or bug fixes,
              SWE-Bench Mobile captures the full complexity of professional software engineering:
              multi-modal inputs (PRDs + Figma designs), a large-scale production codebase
              (~500K lines of Swift/Objective-C), and comprehensive testing.
            </p>
          </div>
        </div>
      </section>

      {/* Task Format */}
      <section id="task-format" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Task Format</h2>
          <p className="text-caption text-muted leading-relaxed mb-6">
            Each task consists of three components that mimic a developer&apos;s starting point:
          </p>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Product Requirement Document (PRD)</h3>
              <p className="text-caption text-muted leading-relaxed">
                Natural language descriptions of the feature to implement, including user stories,
                acceptance criteria, and constraints. Average length is 450 words.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Figma Design Specifications</h3>
              <p className="text-caption text-muted leading-relaxed">
                70% of tasks include visual design specifications from Figma, containing component
                layout, typography, and visual details. 92% of tasks include reference images.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Production Codebase</h3>
              <p className="text-caption text-muted leading-relaxed">
                A Git repository snapshot of ~500K lines of Swift/Objective-C code. Agents must
                navigate this large codebase, locate relevant files, and implement changes.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-xl bg-foreground/[0.03] border border-border/30">
            <p className="text-small text-muted">
              The expected output is a unified diff patch that implements the feature described
              in the PRD, matching the standard pull request workflow used in industry.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Pipeline */}
      <section id="evaluation" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Evaluation Pipeline</h2>
          <p className="text-caption text-muted leading-relaxed mb-6">
            SWE-Bench Mobile uses a diff-based evaluation strategy. Tests inspect the patch
            text directly without compiling or running the iOS application.
          </p>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 rounded-xl border border-border/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand text-caption font-medium flex items-center justify-center">1</span>
              <div>
                <p className="text-caption font-medium">Patch Submission</p>
                <p className="text-small text-muted">Agent generates a unified diff patch for the task.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-border/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand text-caption font-medium flex items-center justify-center">2</span>
              <div>
                <p className="text-caption font-medium">Static Analysis</p>
                <p className="text-small text-muted">Verify diff structure, reject empty patches, check file coverage.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-border/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand text-caption font-medium flex items-center justify-center">3</span>
              <div>
                <p className="text-caption font-medium">Diff-Based Intent Tests</p>
                <p className="text-small text-muted">Task-specific pytest suites verify structural intent, feature entry points, cross-file cohesion, and semantics-aware pattern matching.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-border/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand text-caption font-medium flex items-center justify-center">4</span>
              <div>
                <p className="text-caption font-medium">Reporting</p>
                <p className="text-small text-muted">Task-level and test-case-level results are aggregated with failure classification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Metrics</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Task Success Rate</h3>
              <p className="text-caption text-muted leading-relaxed">
                Percentage of tasks where <strong>all</strong> test cases pass. Computed over
                50 tasks. This is the strict standard for a completed feature.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Test Pass Rate</h3>
              <p className="text-caption text-muted leading-relaxed">
                Percentage of individual test cases passed across all tasks. Computed over
                449 test cases. Reveals partial progress even when tasks are not fully completed.
              </p>
            </div>
          </div>
          <p className="mt-4 text-small text-muted">
            When an agent fails to produce a patch (e.g., timeout or error), it is counted as
            failing all associated tests.
          </p>
        </div>
      </section>

      {/* Supported Agents */}
      <section id="agents" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Supported Agents</h2>
          <p className="text-caption text-muted leading-relaxed mb-6">
            We evaluate four coding agents spanning commercial and open-source systems,
            with 9 backbone models yielding 22 agent-model configurations.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-border/50">
              <p className="text-caption font-medium">Cursor</p>
              <p className="text-small text-muted">AI-powered code editor with agent mode</p>
            </div>
            <div className="p-4 rounded-xl border border-border/50">
              <p className="text-caption font-medium">Codex</p>
              <p className="text-small text-muted">OpenAI&apos;s coding agent CLI</p>
            </div>
            <div className="p-4 rounded-xl border border-border/50">
              <p className="text-caption font-medium">Claude Code</p>
              <p className="text-small text-muted">Anthropic&apos;s coding agent CLI</p>
            </div>
            <div className="p-4 rounded-xl border border-border/50">
              <p className="text-caption font-medium">OpenCode</p>
              <p className="text-small text-muted">Open-source coding agent</p>
            </div>
          </div>
          <p className="mt-4 text-small text-muted">
            Models tested include Claude Opus 4.5, Claude Sonnet 4.5, Claude Haiku,
            GLM 4.6, GLM 4.7, GPT 5, GPT 5.1, GPT 5.2, and Gemini 3 Pro.
          </p>
        </div>
      </section>

      {/* Hosted Evaluation */}
      <section id="hosted-evaluation" className="pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-4">Hosted Evaluation</h2>
          <div className="p-5 rounded-2xl border border-border/50">
            <p className="text-caption text-muted leading-relaxed mb-4">
              The benchmark is derived from a proprietary production codebase. The full dataset
              is not publicly released to <strong>eliminate the risk of data contamination</strong> —
              a well-known issue with public benchmarks where test instances may leak into LLM
              training corpora.
            </p>
            <p className="text-caption text-muted leading-relaxed">
              Agent companies and model providers can submit their systems for evaluation against
              our held-out industrial test suite. This provides an objective, contamination-free
              comparison on real-world mobile development tasks.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">What agents are supported?</h3>
              <p className="text-caption text-muted leading-relaxed">
                SWE-Bench Mobile currently supports Cursor, Codex (OpenAI), Claude Code (Anthropic),
                and OpenCode (open-source), and can be extended to support any agent that generates
                unified diff patches.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">How are tasks evaluated?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Each task has a set of pytest test cases that verify the generated patch using
                diff-based structural analysis. A task is considered successful only if all its
                tests pass.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Can I submit my own agent?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Yes! We host a public leaderboard where agent companies and model providers can
                submit their systems for evaluation. Contact us at{' '}
                <a href="mailto:murphy.tian@mail.utoronto.ca" className="text-brand hover:text-brand-dark transition-colors">
                  murphy.tian@mail.utoronto.ca
                </a>{' '}
                for submission guidelines.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Why is the dataset private?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Keeping the test set private eliminates data contamination risks. Unlike public
                benchmarks where test instances may leak into LLM training corpora, our hosted
                evaluation ensures fair and objective comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
