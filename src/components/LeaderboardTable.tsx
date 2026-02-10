'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LeaderboardEntry } from '@/data/types';
import { AgentIcon } from './AgentIcon';

// Agent brand colors for visual distinction
const AGENT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Cursor': { bg: 'bg-violet-500/10', text: 'text-violet-600', border: 'border-violet-500/20' },
  'Codex': { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
  'Claude Code': { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/20' },
  'OpenCode': { bg: 'bg-sky-500/10', text: 'text-sky-600', border: 'border-sky-500/20' },
};

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  compact?: boolean;
}

type SortKey = 'rank' | 'taskSuccessRate' | 'testPassRate';
type SortOrder = 'asc' | 'desc';

export function LeaderboardTable({ entries, compact = false }: LeaderboardTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder(key === 'rank' ? 'asc' : 'desc');
    }
  };

  const sortedEntries = [...entries].sort((a, b) => {
    let comparison = 0;
    switch (sortKey) {
      case 'rank':
        comparison = a.rank - b.rank;
        break;
      case 'taskSuccessRate':
        comparison = a.result.taskSuccessRate - b.result.taskSuccessRate;
        break;
      case 'testPassRate':
        comparison = a.result.testPassRate - b.result.testPassRate;
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const displayEntries = compact ? sortedEntries.slice(0, 5) : sortedEntries;

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="px-5 py-4 text-left">
              <button
                onClick={() => handleSort('rank')}
                className="text-small font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1"
              >
                Rank
                {sortKey === 'rank' && (
                  <span className="text-[10px] text-brand">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </button>
            </th>
            <th className="px-5 py-4 text-left text-small font-medium text-muted">
              Agent
            </th>
            <th className="px-5 py-4 text-left text-small font-medium text-muted">
              Model
            </th>
            <th className="px-5 py-4 text-right">
              <button
                onClick={() => handleSort('taskSuccessRate')}
                className="text-small font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1 ml-auto"
              >
                Task Success
                {sortKey === 'taskSuccessRate' && (
                  <span className="text-[10px] text-brand">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </button>
            </th>
            <th className="px-5 py-4 text-right">
              <button
                onClick={() => handleSort('testPassRate')}
                className="text-small font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1 ml-auto"
              >
                Test Pass
                {sortKey === 'testPassRate' && (
                  <span className="text-[10px] text-brand">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </button>
            </th>
            {!compact && (
              <th className="px-5 py-4 text-right text-small font-medium text-muted">
                Tasks
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {displayEntries.map((entry, index) => {
            const agentColor = AGENT_COLORS[entry.agent.name] || { bg: 'bg-gray-500/10', text: 'text-gray-600', border: 'border-gray-500/20' };
            return (
              <tr
                key={entry.agent.id}
                className={cn(
                  'border-b border-border/30 hover:bg-brand/[0.02] transition-colors',
                  index === 0 && 'bg-brand/[0.03]'
                )}
              >
                <td className="px-5 py-4">
                  <span className={cn(
                    'inline-flex items-center justify-center w-6 h-6 rounded-full text-small tabular-nums',
                    entry.rank === 1 && 'bg-brand text-white font-medium',
                    entry.rank === 2 && 'bg-foreground/10 text-foreground',
                    entry.rank === 3 && 'bg-foreground/10 text-foreground',
                    entry.rank > 3 && 'text-muted'
                  )}>
                    {entry.rank}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={cn(
                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-small font-medium border',
                    agentColor.bg,
                    agentColor.text,
                    agentColor.border,
                  )}>
                    <AgentIcon name={entry.agent.name} className="w-3.5 h-3.5" />
                    {entry.agent.name}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-foreground/5 text-small">
                    {entry.agent.model}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <div className="w-16 h-1 bg-border/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand/50 rounded-full"
                        style={{ width: `${Math.min(entry.result.taskSuccessRate * 4, 100)}%` }}
                      />
                    </div>
                    <span className="text-body tabular-nums font-medium w-12 text-right">
                      {entry.result.taskSuccessRate.toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="text-body tabular-nums text-muted">
                    {entry.result.testPassRate.toFixed(1)}%
                  </span>
                </td>
                {!compact && (
                  <td className="px-5 py-4 text-right">
                    <span className="text-caption text-muted tabular-nums">
                      {entry.result.successfulPatches}/{entry.result.totalPatches}
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
