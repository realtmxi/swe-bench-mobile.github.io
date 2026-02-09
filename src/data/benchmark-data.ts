import { Agent, EvaluationResult, BenchmarkStats, LeaderboardEntry } from './types';

// Agent definitions based on paper configurations (22 total)
export const agents: Agent[] = [
  // Cursor configurations (5)
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
  {
    id: 'cursor-gpt52',
    name: 'Cursor',
    model: 'GPT 5.2',
    provider: 'Cursor',
    description: 'Cursor IDE Agent with GPT 5.2 model',
  },
  {
    id: 'cursor-gemini3pro',
    name: 'Cursor',
    model: 'Gemini 3 Pro',
    provider: 'Cursor',
    description: 'Cursor IDE Agent with Gemini 3 Pro model',
  },
  {
    id: 'cursor-gpt51',
    name: 'Cursor',
    model: 'GPT 5.1',
    provider: 'Cursor',
    description: 'Cursor IDE Agent with GPT 5.1 model',
  },
  // Codex configurations (5)
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
    id: 'codex-gpt5',
    name: 'Codex',
    model: 'GPT 5',
    provider: 'OpenAI',
    description: 'OpenAI Codex CLI with GPT 5 model',
  },
  {
    id: 'codex-opus',
    name: 'Codex',
    model: 'Opus 4.5',
    provider: 'OpenAI + Anthropic',
    description: 'OpenAI Codex CLI with Claude Opus 4.5 model',
  },
  {
    id: 'codex-gpt51',
    name: 'Codex',
    model: 'GPT 5.1',
    provider: 'OpenAI',
    description: 'OpenAI Codex CLI with GPT 5.1 model',
  },
  // Claude Code configurations (4)
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
  // OpenCode configurations (8)
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

// Evaluation results based on paper Appendix Table 5 (Complete Experimental Results)
// 50 total tasks, 449 test cases
export const evaluationResults: EvaluationResult[] = [
  // Cursor configurations
  {
    agentId: 'cursor-opus',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 449,
    passedTests: 126,
    failedTests: 323,
    skippedTests: 0,
    testPassRate: 28.1,
    evaluationDate: '2026-01-07',
    avgCost: 3.50,
  },
  {
    agentId: 'cursor-sonnet',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 449,
    passedTests: 120,
    failedTests: 329,
    skippedTests: 0,
    testPassRate: 26.7,
    evaluationDate: '2026-01-07',
    avgCost: 2.00,
  },
  {
    agentId: 'cursor-gpt52',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 449,
    passedTests: 123,
    failedTests: 326,
    skippedTests: 0,
    testPassRate: 27.4,
    evaluationDate: '2026-01-07',
    avgCost: 1.80,
  },
  {
    agentId: 'cursor-gemini3pro',
    totalPatches: 50,
    successfulPatches: 3,
    failedPatches: 47,
    taskSuccessRate: 6.0,
    totalTestCases: 449,
    passedTests: 104,
    failedTests: 345,
    skippedTests: 0,
    testPassRate: 23.2,
    evaluationDate: '2026-01-07',
    avgCost: 1.00,
  },
  {
    agentId: 'cursor-gpt51',
    totalPatches: 50,
    successfulPatches: 1,
    failedPatches: 49,
    taskSuccessRate: 2.0,
    totalTestCases: 449,
    passedTests: 88,
    failedTests: 361,
    skippedTests: 0,
    testPassRate: 19.6,
    evaluationDate: '2026-01-07',
    avgCost: 1.10,
  },
  // Codex configurations
  {
    agentId: 'codex-glm',
    totalPatches: 50,
    successfulPatches: 6,
    failedPatches: 44,
    taskSuccessRate: 12.0,
    totalTestCases: 449,
    passedTests: 88,
    failedTests: 361,
    skippedTests: 0,
    testPassRate: 19.6,
    evaluationDate: '2026-01-07',
    avgCost: 1.30,
  },
  {
    agentId: 'codex-sonnet',
    totalPatches: 50,
    successfulPatches: 5,
    failedPatches: 45,
    taskSuccessRate: 10.0,
    totalTestCases: 449,
    passedTests: 126,
    failedTests: 323,
    skippedTests: 0,
    testPassRate: 28.1,
    evaluationDate: '2026-01-07',
    avgCost: 2.50,
  },
  {
    agentId: 'codex-gpt5',
    totalPatches: 50,
    successfulPatches: 5,
    failedPatches: 45,
    taskSuccessRate: 10.0,
    totalTestCases: 449,
    passedTests: 96,
    failedTests: 353,
    skippedTests: 0,
    testPassRate: 21.4,
    evaluationDate: '2026-01-07',
    avgCost: 1.50,
  },
  {
    agentId: 'codex-opus',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 449,
    passedTests: 93,
    failedTests: 356,
    skippedTests: 0,
    testPassRate: 20.7,
    evaluationDate: '2026-01-07',
    avgCost: 3.50,
  },
  {
    agentId: 'codex-gpt51',
    totalPatches: 50,
    successfulPatches: 0,
    failedPatches: 50,
    taskSuccessRate: 0.0,
    totalTestCases: 449,
    passedTests: 32,
    failedTests: 417,
    skippedTests: 0,
    testPassRate: 7.1,
    evaluationDate: '2026-01-07',
    avgCost: 1.00,
  },
  // Claude Code configurations
  {
    agentId: 'cc-glm',
    totalPatches: 50,
    successfulPatches: 5,
    failedPatches: 45,
    taskSuccessRate: 10.0,
    totalTestCases: 449,
    passedTests: 120,
    failedTests: 329,
    skippedTests: 0,
    testPassRate: 26.7,
    evaluationDate: '2026-01-07',
    avgCost: 1.30,
  },
  {
    agentId: 'cc-sonnet',
    totalPatches: 50,
    successfulPatches: 5,
    failedPatches: 45,
    taskSuccessRate: 10.0,
    totalTestCases: 449,
    passedTests: 111,
    failedTests: 338,
    skippedTests: 0,
    testPassRate: 24.7,
    evaluationDate: '2026-01-07',
    avgCost: 2.00,
  },
  {
    agentId: 'cc-opus',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 449,
    passedTests: 98,
    failedTests: 351,
    skippedTests: 0,
    testPassRate: 21.8,
    evaluationDate: '2026-01-07',
    avgCost: 4.00,
  },
  {
    agentId: 'cc-haiku',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 449,
    passedTests: 82,
    failedTests: 367,
    skippedTests: 0,
    testPassRate: 18.3,
    evaluationDate: '2026-01-07',
    avgCost: 0.50,
  },
  // OpenCode configurations
  {
    agentId: 'opencode-glm46',
    totalPatches: 50,
    successfulPatches: 4,
    failedPatches: 46,
    taskSuccessRate: 8.0,
    totalTestCases: 449,
    passedTests: 80,
    failedTests: 369,
    skippedTests: 0,
    testPassRate: 17.8,
    evaluationDate: '2026-02-09',
    avgCost: 0.13,
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
    avgCost: 0.02,
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
    avgCost: 3.50,
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
    avgCost: 0.49,
  },
  {
    agentId: 'opencode-gemini3pro',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 449,
    passedTests: 60,
    failedTests: 389,
    skippedTests: 0,
    testPassRate: 13.4,
    evaluationDate: '2026-02-09',
    avgCost: 0.03,
  },
  {
    agentId: 'opencode-gpt52',
    totalPatches: 50,
    successfulPatches: 2,
    failedPatches: 48,
    taskSuccessRate: 4.0,
    totalTestCases: 449,
    passedTests: 54,
    failedTests: 395,
    skippedTests: 0,
    testPassRate: 12.0,
    evaluationDate: '2026-02-09',
    avgCost: 0.04,
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
    avgCost: 9.33,
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
    avgCost: 0.18,
  },
];

// Task category statistics based on paper Table 8 (Section 3)
export const taskCategoryStats = [
  { category: 'UI Components', count: 18, avgPassRate: 12.5 },
  { category: 'Data Management', count: 10, avgPassRate: 15.3 },
  { category: 'Gesture & Interaction', count: 8, avgPassRate: 8.0 },
  { category: 'Media & Assets', count: 7, avgPassRate: 9.8 },
  { category: 'Networking', count: 4, avgPassRate: 11.2 },
  { category: 'Other', count: 3, avgPassRate: 10.5 },
];

// Task difficulty distribution based on paper Table 8 (Section 3)
export const taskDifficultyStats = [
  { difficulty: 'Easy (1-2 files)', count: 15, avgPassRate: 18.5 },
  { difficulty: 'Medium (3-6 files)', count: 25, avgPassRate: 10.0 },
  { difficulty: 'Hard (7+ files)', count: 10, avgPassRate: 5.8 },
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
    totalTestCases: 449,
    totalEvaluations: evaluationResults.length,
    lastUpdated: '2026-02-09',
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
