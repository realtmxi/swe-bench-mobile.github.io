import Link from 'next/link';

export const metadata = {
  title: 'About | SWE-Bench Mobile',
  description: 'Learn about SWE-Bench Mobile, the industry-level benchmark for mobile development AI agents',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-headline">About SWE-BENCH MOBILE</h1>
          <p className="mt-4 text-xl text-muted leading-relaxed">
            An industry-level benchmark for evaluating AI coding agents on real-world mobile development tasks.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Motivation */}
          <div>
            <h2 className="text-title mb-4">Motivation</h2>
            <div className="space-y-4 text-body text-muted leading-relaxed">
              <p>
                While benchmarks like SWE-bench have been instrumental in evaluating AI coding agents 
                on general software engineering tasks, there has been a notable gap in evaluating 
                these agents on mobile development specifically.
              </p>
              <p>
                Mobile development presents unique challenges including platform-specific APIs, 
                UI/UX considerations, gesture handling, and performance constraints that are not 
                well-represented in existing benchmarks.
              </p>
              <p>
                SWE-Bench Mobile addresses this gap by providing a comprehensive benchmark focused on 
                industry-level mobile development tasks derived from real Product Requirement Documents.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-title mb-6">Our Approach</h2>
            <div className="grid gap-4">
              <div className="p-5 rounded-2xl border border-border/50">
                <h3 className="text-body font-medium mb-2">Real-World PRDs</h3>
                <p className="text-caption text-muted leading-relaxed">
                  Each task is based on actual product requirement documents from mobile app development, 
                  including feature specifications, design references, and acceptance criteria.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-border/50">
                <h3 className="text-body font-medium mb-2">Automated Evaluation</h3>
                <p className="text-caption text-muted leading-relaxed">
                  We use comprehensive test suites to automatically evaluate generated patches, 
                  ensuring consistent and reproducible results across different agents.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-border/50">
                <h3 className="text-body font-medium mb-2">Multi-Agent Support</h3>
                <p className="text-caption text-muted leading-relaxed">
                  The benchmark supports evaluation of various AI coding agents including Codex, 
                  Claude Code, Cursor, and more, enabling fair comparison across different tools.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-border/30">
            <h2 className="text-body font-medium mb-6">Benchmark Statistics</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-medium tabular-nums">50</p>
                <p className="mt-1 text-small text-muted">Tasks</p>
              </div>
              <div>
                <p className="text-3xl font-medium tabular-nums">449</p>
                <p className="mt-1 text-small text-muted">Test Cases</p>
              </div>
              <div>
                <p className="text-3xl font-medium tabular-nums">22</p>
                <p className="mt-1 text-small text-muted">Agent Configurations</p>
              </div>
            </div>
          </div>

          {/* Citation */}
          <div id="citation">
            <h2 className="text-title mb-4">Citation</h2>
            <pre className="p-4 rounded-xl bg-foreground/[0.03] border border-border/30 text-small text-muted overflow-x-auto">
{`@inproceedings{swebenchmobile2026,
  title={SWE-Bench Mobile: Can Large Language Model
         Agents Develop Industry-Level Mobile
         Applications?},
  author={Tian, Muxin and Wang, Zhe and Yang, Blair
          and Tang, Zhenwei and Zhu, Kunlun
          and Dong, Honghua and Li, Hanchen
          and Xie, Xinni and Wang, Guangjing
          and You, Jiaxuan},
  booktitle={Proceedings of the 32nd ACM SIGKDD
             Conference on Knowledge Discovery
             and Data Mining (KDD '26)},
  year={2026},
  url={https://swebenchmobile.com}
}`}
            </pre>
          </div>

          {/* Contact */}
          <div id="contact">
            <h2 className="text-title mb-4">Contact</h2>
            <p className="text-body text-muted leading-relaxed mb-6">
              Interested in research collaboration or evaluating your AI coding agent? 
              We&apos;d love to hear from you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/realtmxi/swe-bench-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-[15px] font-medium bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="mailto:murphy.tian@mail.utoronto.ca"
                className="px-5 py-2.5 text-[15px] text-muted hover:text-foreground transition-colors"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
