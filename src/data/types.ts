export interface Agent {
  id: string;
  name: string;
  model: string;
  provider: string;
  version?: string;
  description?: string;
}

export interface EvaluationResult {
  agentId: string;
  totalPatches: number;
  successfulPatches: number;
  failedPatches: number;
  taskSuccessRate: number;
  totalTestCases: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  testPassRate: number;
  evaluationDate: string;
  avgCost?: number;
}

export interface LeaderboardEntry {
  rank: number;
  agent: Agent;
  result: EvaluationResult;
}

export interface BenchmarkStats {
  totalTasks: number;
  totalAgents: number;
  totalTestCases: number;
  totalEvaluations: number;
  lastUpdated: string;
}

export interface TaskCategoryStat {
  category: string;
  count: number;
  avgPassRate: number;
}

export interface TaskDifficultyStat {
  difficulty: string;
  count: number;
  avgPassRate: number;
}




