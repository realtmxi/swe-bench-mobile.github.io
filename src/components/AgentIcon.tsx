import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AgentIconProps {
  name: string;
  className?: string;
}

export function AgentIcon({ name, className }: AgentIconProps) {
  // Normalize name to handle potential variations
  const normalizedName = name.toLowerCase();
  
  let iconPath = '';
  
  if (normalizedName.includes('cursor')) {
    iconPath = '/cursor-color.svg';
  } else if (normalizedName.includes('claude')) {
    iconPath = '/claude-color.svg';
  } else if (normalizedName.includes('codex')) {
    iconPath = '/openai.svg';
  } else if (normalizedName.includes('opencode')) {
    iconPath = '/opencode.svg';
  } else {
    // Default fallback if needed, or maybe just render nothing/generic
    // Using opencode as generic fallback or maybe a placeholder
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-5 h-5", className)}
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center shrink-0", className)}>
       <img 
         src={iconPath} 
         alt={`${name} icon`}
         className="w-full h-full object-contain"
       />
    </div>
  );
}
