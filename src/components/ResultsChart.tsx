'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getLeaderboard, taskCategoryStats, taskDifficultyStats } from '@/data/benchmark-data';

// Use CSS custom properties for brand colors so they stay in sync with globals.css
// Recharts requires hex strings, so we read them from the DOM at render time.
function getCSSColor(varName: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  if (!raw) return fallback;
  // Convert space-separated RGB (e.g. "255 45 85") to hex
  const parts = raw.split(/\s+/).map(Number);
  if (parts.length === 3 && parts.every((n) => !isNaN(n))) {
    return '#' + parts.map((n) => n.toString(16).padStart(2, '0')).join('');
  }
  return fallback;
}

function useChartColors() {
  // Fallbacks match the light-mode defaults in globals.css
  return {
    brand: getCSSColor('--brand', '#ff2d55'),
    brandLight: getCSSColor('--brand-light', '#ff6482'),
    muted: getCSSColor('--muted', '#a3a3a3'),
    grid: getCSSColor('--border', '#e5e5e5'),
    background: getCSSColor('--background', '#fafafa'),
  };
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-soft">
        <p className="text-small font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-small text-muted">
            {entry.name}: {entry.value.toFixed(1)}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AgentComparisonChart() {
  const leaderboard = getLeaderboard();
  const colors = useChartColors();
  
  const data = leaderboard.slice(0, 6).map((entry) => ({
    name: entry.agent.model,
    'Task Success': entry.result.taskSuccessRate,
    'Test Pass': entry.result.testPassRate,
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
          barGap={2}
        >
          <CartesianGrid strokeDasharray="0" stroke={colors.grid} vertical={false} />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fontSize: 11, fill: colors.muted }}
            axisLine={{ stroke: colors.grid }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: colors.muted }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.background }} />
          <Bar dataKey="Task Success" fill={colors.brand} radius={[3, 3, 0, 0]} />
          <Bar dataKey="Test Pass" fill={colors.brandLight} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TaskDifficultyChart() {
  const colors = useChartColors();

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={taskDifficultyStats} margin={{ top: 20, right: 20, left: 0, bottom: 5 }} barGap={2}>
          <CartesianGrid strokeDasharray="0" stroke={colors.grid} vertical={false} />
          <XAxis 
            dataKey="difficulty" 
            tick={{ fontSize: 11, fill: colors.muted }}
            axisLine={{ stroke: colors.grid }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: colors.muted }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.background }} />
          <Bar dataKey="count" name="Tasks" fill={colors.brand} radius={[3, 3, 0, 0]} />
          <Bar dataKey="avgPassRate" name="Avg Pass %" fill={colors.brandLight} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryPassRateChart() {
  const colors = useChartColors();

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={taskCategoryStats} 
          layout="vertical"
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="0" stroke={colors.grid} horizontal={false} />
          <XAxis 
            type="number" 
            tick={{ fontSize: 11, fill: colors.muted }} 
            domain={[0, 40]}
            axisLine={{ stroke: colors.grid }}
            tickLine={false}
          />
          <YAxis 
            type="category" 
            dataKey="category" 
            tick={{ fontSize: 11, fill: colors.muted }} 
            width={120}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.background }} />
          <Bar dataKey="avgPassRate" name="Avg Pass %" fill={colors.brand} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
