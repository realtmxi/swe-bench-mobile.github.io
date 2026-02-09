import { Agent, EvaluationResult, BenchmarkStats, LeaderboardEntry } from './types';

// Agent definitions based on paper configurations
export const agents: Agent[] = [
  // Cursor configurations
  {
    id: 'cursor-opus',
    name: 'Cursor',
    model: 'Opus 4.5',
    provider: 'Cursor',
    description: 'Cursor IDE Agent with Claude Opus 4.5 model',
  },
  {
    id: 'cursor-sonnet',
    name: 'Cursor',
    model: 'Sonnet 4.5',
    provider: 'Cursor',
    description: 'Cursor IDE Agent with Claude Sonnet 4.5 model',
  },
  // Codex configurations
  {
    id: 'codex-glm',
    name: 'Codex',
    model: 'GLM 4.6',
    provider: 'OpenAI + Zhipu',
    description: 'OpenAI Codex CLI with GLM 4.6 model',
  },
  {
    id: 'codex-sonnet',
    name: 'Codex',
    model: 'Sonnet 4.5',
    provider: 'OpenAI + Anthropic',
    description: 'OpenAI Codex CLI with Claude Sonnet 4.5 model',
  },
  {
    id: 'codex-opus',
    name: 'Codex',
    model: 'Opus 4.5',
    provider: 'OpenAI + Anthropic',
    description: 'OpenAI Codex CLI with Claude Opus 4.5 model',
  },
  // Claude Code configurations
  {
    id: 'cc-glm',
    name: 'Claude Code',
    model: 'GLM 4.6',
    provider: 'Anthropic + Zhipu',
    description: 'Claude Code with GLM 4.6 model',
  },
  {
    id: 'cc-sonnet',
    name: 'Claude Code',
    model: 'Sonnet 4.5',
    provider: 'Anthropic',
    description: 'Anthropic Claude Code with Sonnet 4.5 model',
  },
  {
    id: 'cc-opus',
    name: 'Claude Code',
    model: 'Opus 4.5',
    provider: 'Anthropic',
    description: 'Anthropic Claude Code with Opus 4.5 model',
  },
  {
    id: 'cc-haiku',
    name: 'Claude Code',
    model: 'Haiku',
    provider: 'Anthropic',
    description: 'Anthropic Claude Code with Haiku model',
  },
  // OpenCode configurations
  {
    id: 'opencode-glm46',
    name: 'OpenCode',
    model: 'GLM 4.6',
    provider: 'Open Source',
    description: 'OpenCode Agent with GLM 4.6 model',
  },
  {
    id: 'opencode-gpt51',
    name: 'OpenCode',
    model: 'GPT 5.1',
    provider: 'Open Source',
    description: 'OpenCode Agent with GPT 5.1 model',
  },
  {
    id: 'opencode-sonnet',
    name: 'OpenCode',
    model: 'Sonnet 4.5',
    provider: 'Open Source',
    description: 'OpenCode Agent with Claude Sonnet 4.5 model',
  },
  {
    id: 'opencode-glm47',
    name: 'OpenCode',
    model: 'GLM 4.7',
    provider: 'Open Source',
    description: 'OpenCode Agent with GLM 4.7 model',
  },
  {
    id: 'opencode-gemini3pro',
    name: 'OpenCode',
    model: 'Gemini 3 Pro',
    provider: 'Open Source',
    description: 'OpenCode Agent with Gemini 3 Pro model',
  },
  {
    id: 'opencode-gpt52',
    name: 'OpenCode',
    model: 'GPT 5.2',
    provider: 'Open Source',
    description: 'OpenCode Agent with GPT 5.2 model',
  },
  {
    id: 'opencode-opus',
    name: 'OpenCode',
    model: 'Opus 4.5',
    provider: 'Open Source',
    description: 'OpenCode Agent with Claude Opus 4.5 model',
  },
  {
    id: 'opencode-gpt5',
    name: 'OpenCode',
    model: 'GPT 5',
    provider: 'Open Source',
    description: 'OpenCode Agent with GPT 5 model',
  },
];

// Evaluation results based on paper data (Section 4)
// Paper reports: Best performance 12% Task Success Rate, up to 28.1% Test Pass Rate
// 50 total tasks evaluated
export const evaluationResults: EvaluationResult[] = [
  // Cursor configurations - Best performers (12% Task Success)
  {
    agentId: 'cursor-opus',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 450,
    passedTests: 126,
    failedTests: 324,
    skippedTests: 0,
    testPassRate: 28.0,
    evaluationDate: '2026-01-07',
    avgCost: 3.50,
  },
  {
    agentId: 'cursor-sonnet',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 450,
    passedTests: 122,
    failedTests: 328,
    skippedTests: 0,
    testPassRate: 27.1,
    evaluationDate: '2026-01-07',
    avgCost: 2.00,
  },
  // Codex configurations
  {
    agentId: 'codex-glm',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 450,
    passedTests: 117,
    failedTests: 333,
    skippedTests: 0,
    testPassRate: 26.0,
    evaluationDate: '2026-01-07',
    avgCost: 1.30,
  },
  {
    agentId: 'codex-sonnet',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 450,
    passedTests: 99,
    failedTests: 351,
    skippedTests: 0,
    testPassRate: 22.0,
    evaluationDate: '2026-01-07',
    avgCost: 2.50,
  },
  {
    agentId: 'codex-opus',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 450,
    passedTests: 81,
    failedTests: 369,
    skippedTests: 0,
    testPassRate: 18.0,
    evaluationDate: '2026-01-07',
    avgCost: 4.00,
  },
  // Claude Code configurations
  {
    agentId: 'cc-glm',
    totalPatches: 50,
    successfulPatches: 5,
    failedPatches: 45,
    taskSuccessRate: 10.0,
    totalTestCases: 450,
    passedTests: 120,
    failedTests: 330,
    skippedTests: 0,
    testPassRate: 26.7,
    evaluationDate: '2026-01-07',
    avgCost: 1.30,
  },
  {
    agentId: 'cc-sonnet',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 450,
    passedTests: 108,
    failedTests: 342,
    skippedTests: 0,
    testPassRate: 24.0,
    evaluationDate: '2026-01-07',
    avgCost: 2.00,
  },
  {
    agentId: 'cc-opus',
    totalPatches: 50,
    successfulPatches: 3,
    failedPatches: 47,
    taskSuccessRate: 6.0,
    totalTestCases: 450,
    passedTests: 95,
    failedTests: 355,
    skippedTests: 0,
    testPassRate: 21.1,
    evaluationDate: '2026-01-07',
    avgCost: 4.00,
  },
  {
    agentId: 'cc-haiku',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 450,
    passedTests: 90,
    failedTests: 360,
    skippedTests: 0,
    testPassRate: 20.0,
    evaluationDate: '2026-01-07',
    avgCost: 0.50,
  },
  // OpenCode results
  {
    agentId: 'opencode-glm46',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 442,
    passedTests: 80,
    failedTests: 362,
    skippedTests: 0,
    testPassRate: 18.1,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-gpt51',
    totalPatches: 50,
    successfulPatches: 3,
    failedPatches: 47,
    taskSuccessRate: 6.0,
    totalTestCases: 449,
    passedTests: 32,
    failedTests: 417,
    skippedTests: 0,
    testPassRate: 7.1,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-sonnet',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 449,
    passedTests: 66,
    failedTests: 383,
    skippedTests: 0,
    testPassRate: 14.7,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-glm47',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 449,
    passedTests: 64,
    failedTests: 385,
    skippedTests: 0,
    testPassRate: 14.3,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-gemini3pro',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 445,
    passedTests: 60,
    failedTests: 385,
    skippedTests: 0,
    testPassRate: 13.5,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-gpt52',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 423,
    passedTests: 54,
    failedTests: 369,
    skippedTests: 0,
    testPassRate: 12.8,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-opus',
    totalPatches: 50,
    successfulPatches: 1,
    failedPatches: 49,
    taskSuccessRate: 2.0,
    totalTestCases: 449,
    passedTests: 54,
    failedTests: 395,
    skippedTests: 0,
    testPassRate: 12.0,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
  {
    agentId: 'opencode-gpt5',
    totalPatches: 50,
    successfulPatches: 1,
    failedPatches: 49,
    taskSuccessRate: 2.0,
    totalTestCases: 449,
    passedTests: 54,
    failedTests: 395,
    skippedTests: 0,
    testPassRate: 12.0,
    evaluationDate: '2026-02-09',
    avgCost: 0,
  },
];

// Task category statistics based on paper (Section 4.5)
// Agents perform better on Data Management, struggle with Gesture & Interaction and Media
export const taskCategoryStats = [
  { category: 'UI Components', count: 18, avgPassRate: 24.5 },
  { category: 'Gesture & Interaction', count: 8, avgPassRate: 15.2 },
  { category: 'Data Management', count: 12, avgPassRate: 32.3 },
  { category: 'Media & Assets', count: 6, avgPassRate: 18.8 },
  { category: 'Networking', count: 4, avgPassRate: 22.2 },
  { category: 'Other', count: 2, avgPassRate: 20.5 },
];

// Task difficulty distribution based on paper (Section 4.2)
// Performance drops sharply with complexity
export const taskDifficultyStats = [
  { difficulty: 'Easy (1-2 files)', count: 18, avgPassRate: 18.0 },
  { difficulty: 'Medium (3-6 files)', count: 22, avgPassRate: 10.0 },
  { difficulty: 'Hard (7+ files)', count: 10, avgPassRate: 2.0 },
];

// Generate leaderboard from results
export function getLeaderboard(): LeaderboardEntry[] {
  const entries = evaluationResults
    .map((result) => {
      const agent = agents.find((a) => a.id === result.agentId);
      if (!agent) return null;
      return { agent, result };
    })
    .filter((entry): entry is { agent: Agent; result: EvaluationResult } => entry !== null)
    .sort((a, b) => {
      // Sort by task success rate first, then by test pass rate
      if (b.result.taskSuccessRate !== a.result.taskSuccessRate) {
        return b.result.taskSuccessRate - a.result.taskSuccessRate;
      }
      return b.result.testPassRate - a.result.testPassRate;
    })
    .map((entry, index) => ({
      rank: index + 1,
      ...entry,
    }));

  return entries;
}

// Benchmark statistics
export function getBenchmarkStats(): BenchmarkStats {
  return {
    totalTasks: 50,
    totalAgents: agents.length,
    totalTestCases: 450,
    totalEvaluations: evaluationResults.length,
    lastUpdated: '2026-01-07',
  };
}

// Get agent by ID
export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

// Get results for a specific agent
export function getResultsByAgent(agentId: string): EvaluationResult | undefined {
  return evaluationResults.find((r) => r.agentId === agentId);
}
