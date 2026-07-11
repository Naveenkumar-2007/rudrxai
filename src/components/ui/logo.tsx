import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  withText?: boolean;
}

export function Logo({ withText = true, className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-[1px] bg-background rounded-lg z-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            className="w-4 h-4 text-primary"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
        </div>
      </div>
      {withText && (
        <span className="font-heading font-bold text-xl tracking-tight leading-none pt-0.5">
          Rudrx
        </span>
      )}
    </div>
  );
}
