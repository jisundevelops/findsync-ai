import React from "react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard — FindSync AI",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-lg border border-border-soft bg-surface p-10 text-center shadow-md">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet">
          Dashboard
        </span>

        <h1 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
          FindSync AI Dashboard
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-slate">
          Your lost and found reports, AI matches, notifications, and recovery
          activity will appear here.
        </p>

        <div className="mt-6">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}