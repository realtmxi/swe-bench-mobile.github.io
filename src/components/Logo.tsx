import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

// Brand color for SVG
const BRAND_COLOR = '#ff2d55';

export function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-[14px]' },
    md: { icon: 'w-8 h-8', text: 'text-[15px]' },
    lg: { icon: 'w-10 h-10', text: 'text-[17px]' },
  };

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Custom Logo Icon */}
      <div className={cn('relative', sizes[size].icon)}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background rounded square */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill={BRAND_COLOR}
          />
          
          {/* Phone outline */}
          <rect
            x="13"
            y="8"
            width="14"
            height="24"
            rx="3"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Screen area */}
          <rect
            x="15"
            y="12"
            width="10"
            height="14"
            rx="1"
            fill="white"
            fillOpacity="0.3"
          />
          
          {/* Benchmark bars on screen */}
          <rect x="16" y="14" width="8" height="2" rx="0.5" fill="white" />
          <rect x="16" y="18" width="6" height="2" rx="0.5" fill="white" fillOpacity="0.7" />
          <rect x="16" y="22" width="4" height="2" rx="0.5" fill="white" fillOpacity="0.5" />
          
          {/* Home indicator */}
          <rect
            x="17"
            y="28"
            width="6"
            height="1.5"
            rx="0.75"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {showText && (
        <span className={cn('font-medium tracking-tight', sizes[size].text)}>
          SWE-BENCH MOBILE
        </span>
      )}
    </div>
  );
}

// Alternative: More abstract/minimal logo
export function LogoMinimal({ className, size = 'md' }: Omit<LogoProps, 'showText'>) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rounded square background */}
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="10"
          fill={BRAND_COLOR}
        />
        
        {/* M + B monogram stylized as benchmark chart */}
        <path
          d="M12 28V16L16 22L20 14L24 22L28 16V28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Baseline */}
        <line
          x1="10"
          y1="28"
          x2="30"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// Version 3: Rising chart bars - clean and modern
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
          {/* Background */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill={BRAND_COLOR}
          />
          
          {/* Rising chart bars */}
          <rect x="10" y="24" width="5" height="8" rx="1.5" fill="white" fillOpacity="0.5" />
          <rect x="17.5" y="18" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.75" />
          <rect x="25" y="12" width="5" height="20" rx="1.5" fill="white" />
        </svg>
      </div>

      {showText && (
        <span className={cn('font-medium tracking-tight', sizes[size].text)}>
          SWE-BENCH MOBILE
        </span>
      )}
    </div>
  );
}
