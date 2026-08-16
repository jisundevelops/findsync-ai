"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.17 3.57-8.81Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.1A11.99 11.99 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.57.38-2.29v-3.1H1.29a12 12 0 0 0 0 10.78l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.29 6.61l4 3.1C6.23 6.88 8.88 4.77 12 4.77Z" />
    </svg>
  );
}

export function AuthCta() {
  const reduced = useReducedMotion();

  return (
    <section className="px-6 pb-20 md:pb-28">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-border-soft bg-surface p-10 text-center shadow-lg md:p-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-[0.12] blur-3xl"
        />
        <span className="relative inline-flex items-center rounded-full border border-border bg-surface-alt px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue">
          Free for campus
        </span>
        <h2 className="relative mt-5 text-3xl font-extrabold tracking-[-0.02em] text-ink md:text-4xl">
          Ready to reunite you with <span className="text-grad">your stuff?</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-slate">
          Join FindSync AI — report in seconds and let AI do the matching.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/signup" size="lg">
            <GoogleIcon className="h-[18px] w-[18px]" />
            Sign up with Google
          </Button>
          <Button href="/login" variant="secondary" size="lg">
            Log in
          </Button>
        </div>
        <p className="relative mt-5 font-mono text-xs text-slate-light">
          No card required · Free tier forever
        </p>
      </motion.div>
    </section>
  );
}