import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function LogoChart({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-[14px]' },
    md: { icon: 'w-8 h-8', text: 'text-[15px]' },
    lg: { icon: 'w-10 h-10', text: 'text-[17px]' },
  };

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className={cn('relative', sizes[size].icon)}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background - uses brand color from Tailwind/CSS variables */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            className="fill-brand"
          />
          
          {/* Rising chart bars */}
          <rect x="10" y="24" width="5" height="8" rx="1.5" fill="white" fillOpacity="0.5" />
          <rect x="17.5" y="18" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.75" />
          <rect x="25" y="12" width="5" height="20" rx="1.5" fill="white" />
        </svg>
      </div>

      {showText && (
        <span className={cn('font-medium tracking-tight', sizes[size].text)}>
          Mobile-Bench
        </span>
      )}
    </div>
  );
}
