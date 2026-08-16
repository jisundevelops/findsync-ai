"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo-mark";
import { HeroIllustration } from "./hero-illustration";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduced ? false : ({ opacity: 0, y: 28 } as const),
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: easeOut },
  });

  return (
    <section className="relative overflow-hidden">
      {/* ambient gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-8%] h-[440px] w-[440px] rounded-full bg-[rgba(139,92,246,0.16)] blur-3xl" />
        <div className="absolute left-[-10%] top-44 h-[400px] w-[400px] rounded-full bg-[rgba(59,91,255,0.13)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 md:pt-20 lg:grid-cols-2 lg:gap-10 lg:pb-28">
        <div>
          <motion.div {...enter(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue shadow-xs">
              <LogoMark className="h-5 w-5 rounded-[6px]" />
              AI-Powered Smart Lost &amp; Found
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[56px]"
          >
            Lost it on campus? <span className="text-grad">AI brings it back.</span>
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-slate"
          >
            FindSync AI reads your photos, matches lost items against found reports with Gemini
            vision, verifies ownership privately, and reunites you — safely, on one smart map.
          </motion.p>

          <motion.div
            {...enter(0.24)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/signup" size="lg">
              Get started free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button href="/login" variant="secondary" size="lg">
              Log in
            </Button>
          </motion.div>

          <motion.p
            {...enter(0.32)}
            className="mt-5 font-mono text-xs text-slate-light"
          >
            Free for students · No card required · Google or email sign-in
          </motion.p>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}