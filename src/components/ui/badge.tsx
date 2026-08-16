import React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "lost" | "found" | "matched" | "pending" | "confidence";

const variantClasses: Record<BadgeVariant, string> = {
  lost: "bg-[rgba(244,91,105,0.12)] text-coral-dark",
  found: "bg-[rgba(18,183,106,0.12)] text-teal-dark",
  matched: "bg-[rgba(139,92,246,0.14)] text-violet",
  pending: "bg-[rgba(245,158,11,0.16)] text-amber-dark",
  confidence: "bg-[rgba(59,91,255,0.10)] text-blue",
};

export function Badge({
  variant = "pending",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}