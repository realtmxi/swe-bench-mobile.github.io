export const metadata = {
  title: 'Documentation | Mobile-Bench',
  description: 'Learn how to use Mobile-Bench to evaluate AI coding agents',
};

const sections = [
  {
    title: 'Getting Started',
    description: 'Quick start guide to running your first evaluation',
  },
  {
    title: 'Task Format',
    description: 'Understanding PRD structure and task specifications',
  },
  {
    title: 'Evaluation Pipeline',
    description: 'How the automated evaluation system works',
  },
  {
    title: 'Test Cases',
    description: 'Writing and understanding test validations',
  },
  {
    title: 'API Reference',
    description: 'Programmatic access to benchmark data',
  },
  {
    title: 'CLI Usage',
    description: 'Command-line tools for running evaluations',
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-headline">Documentation</h1>
          <p className="mt-2 text-body text-muted">
            Everything you need to use Mobile-Bench
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="p-6 rounded-2xl bg-foreground text-background">
            <h2 className="text-body font-medium mb-4">Quick Start</h2>
            <p className="text-caption text-background/70 mb-6">
              Get up and running with Mobile-Bench in minutes.
            </p>
            <div className="p-4 rounded-xl bg-background/10 font-mono text-small overflow-x-auto">
              <p className="text-background/50"># Clone the repository</p>
              <p>git clone https://github.com/realtmxi/mobile-bench.git</p>
              <p className="mt-3 text-background/50"># Run evaluation</p>
              <p>./run_codex_evaluation.sh --task 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="flex items-center justify-between p-5 rounded-2xl border border-border/50"
              >
                <div>
                  <h3 className="text-body font-medium">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-caption text-muted">
                    {section.description}
                  </p>
                </div>
                <span className="text-small text-muted/60 px-2 py-0.5 rounded-full bg-foreground/[0.03] border border-border/30">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-title mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">What agents are supported?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Mobile-Bench currently supports Codex (OpenAI), Claude Code (Anthropic), 
                Cursor, and can be extended to support any agent that can generate code patches.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">How are tasks evaluated?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Each task has a set of automated test cases that validate the generated code. 
                A task is considered successful only if all its tests pass.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50">
              <h3 className="text-body font-medium mb-2">Can I submit my own agent?</h3>
              <p className="text-caption text-muted leading-relaxed">
                Yes! You can run the evaluation locally and submit your results to be 
                included in the leaderboard. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
