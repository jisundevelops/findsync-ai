import React from "react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Sign up — FindSync AI",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-lg border border-border-soft bg-surface p-10 text-center shadow-md">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet">
          Phase 2
        </span>

        <h1 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
          Sign up
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-slate">
          Google &amp; email authentication arrives in Phase 2. This is the
          placeholder route the landing CTAs point to.
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