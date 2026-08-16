import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-blue hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-ink border border-border hover:bg-surface-alt",
  ghost:
    "bg-transparent text-slate hover:bg-surface-alt hover:text-ink",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-[52px] px-8 text-base",
};

export type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}