import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-white border-2 border-black px-3 py-1 text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

