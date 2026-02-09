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

// Brand colors
const chartColors = {
  brand: '#ff2d55',
  brandLight: '#ff6482',
  muted: '#a3a3a3',
  grid: '#e5e5e5',
  background: '#fafafa',
};

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
          <CartesianGrid strokeDasharray="0" stroke={chartColors.grid} vertical={false} />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fontSize: 11, fill: chartColors.muted }}
            axisLine={{ stroke: chartColors.grid }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: chartColors.muted }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: chartColors.background }} />
          <Bar dataKey="Task Success" fill={chartColors.brand} radius={[3, 3, 0, 0]} />
          <Bar dataKey="Test Pass" fill={chartColors.brandLight} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TaskDifficultyChart() {
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={taskDifficultyStats} margin={{ top: 20, right: 20, left: 0, bottom: 5 }} barGap={2}>
          <CartesianGrid strokeDasharray="0" stroke={chartColors.grid} vertical={false} />
          <XAxis 
            dataKey="difficulty" 
            tick={{ fontSize: 11, fill: chartColors.muted }}
            axisLine={{ stroke: chartColors.grid }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: chartColors.muted }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: chartColors.background }} />
          <Bar dataKey="count" name="Tasks" fill={chartColors.brand} radius={[3, 3, 0, 0]} />
          <Bar dataKey="avgPassRate" name="Avg Pass %" fill={chartColors.brandLight} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryPassRateChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={taskCategoryStats} 
          layout="vertical"
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="0" stroke={chartColors.grid} horizontal={false} />
          <XAxis 
            type="number" 
            tick={{ fontSize: 11, fill: chartColors.muted }} 
            domain={[0, 20]}
            axisLine={{ stroke: chartColors.grid }}
            tickLine={false}
          />
          <YAxis 
            type="category" 
            dataKey="category" 
            tick={{ fontSize: 11, fill: chartColors.muted }} 
            width={120}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: chartColors.background }} />
          <Bar dataKey="avgPassRate" name="Avg Pass %" fill={chartColors.brand} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
