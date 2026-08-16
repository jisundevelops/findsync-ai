"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  LogIn,
  Camera,
  ScanSearch,
  Network,
  BellRing,
  ShieldCheck,
  MessagesSquare,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type Step = { icon: LucideIcon; title: string; desc: string; tint: string };

const steps: Step[] = [
  { icon: LogIn, title: "Log in", desc: "Sign in with Google or your campus email in seconds.", tint: "bg-[rgba(59,91,255,0.10)] text-blue" },
  { icon: Camera, title: "Report lost / found", desc: "Add photos and details — AI scans the image and auto-fills the form.", tint: "bg-[rgba(244,91,105,0.10)] text-coral" },
  { icon: ScanSearch, title: "AI analysis", desc: "Gemini extracts category, color, brand and distinguishing marks.", tint: "bg-[rgba(139,92,246,0.12)] text-violet" },
  { icon: Network, title: "Top-5 matches", desc: "A free rule-based shortlist, then AI ranks the strongest candidates.", tint: "bg-[rgba(139,92,246,0.12)] text-violet" },
  { icon: BellRing, title: "Get notified", desc: "Instant in-app and email alerts the moment a match appears.", tint: "bg-[rgba(245,158,11,0.14)] text-amber-dark" },
  { icon: ShieldCheck, title: "Verify ownership", desc: "Secret questions plus an AI visual check keep imposters out.", tint: "bg-[rgba(18,183,106,0.12)] text-teal-dark" },
  { icon: MessagesSquare, title: "Chat safely", desc: "In-app chat with double-consent contact sharing. No phone leaks.", tint: "bg-[rgba(59,91,255,0.10)] text-blue" },
  { icon: PartyPopper, title: "Reunited", desc: "Item recovered — glow marker removed and your trust score goes up.", tint: "bg-[rgba(18,183,106,0.12)] text-teal-dark" },
];

export function HowItWorks() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.07 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="From report to reunion, automatically"
          sub="One workflow end to end — AI does the matching, you stay in control of every step."
        />

        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              className="rounded-md border border-border-soft bg-surface p-5 shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-[10px]", s.tint)}>
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[15.5px] font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}