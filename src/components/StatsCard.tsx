import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  className,
}: StatsCardProps) {
  return (
    <div className={cn('', className)}>
      <p className="text-4xl md:text-5xl font-medium tabular-nums">{value}</p>
      <p className="mt-2 text-caption text-muted">{title}</p>
      {description && (
        <p className="mt-1 text-small text-muted/70">{description}</p>
      )}
    </div>
  );
}
