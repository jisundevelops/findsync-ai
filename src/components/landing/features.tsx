"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Sparkles,
  KeyRound,
  MapPin,
  Gauge,
  MessagesSquare,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type Feature = { icon: LucideIcon; title: string; desc: string; tint: string };

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Matching",
    desc: "Two-stage pipeline: a free rule-based shortlist, then Gemini vision ranks your top 5 with a 4-factor confidence breakdown.",
    tint: "bg-[rgba(139,92,246,0.12)] text-violet",
  },
  {
    icon: KeyRound,
    title: "Secret Verification",
    desc: "Owners answer hidden questions only they could know — wallpaper, scratches, hidden stickers — before any handover.",
    tint: "bg-[rgba(59,91,255,0.10)] text-blue",
  },
  {
    icon: MapPin,
    title: "Smart Map",
    desc: "Live glow markers protect privacy: full details appear only for your own reports and verified matches.",
    tint: "bg-[rgba(18,183,106,0.12)] text-teal-dark",
  },
  {
    icon: Gauge,
    title: "Trust Score",
    desc: "Every successful reunion builds your campus reputation with an animated trust gauge and unlockable badges.",
    tint: "bg-[rgba(245,158,11,0.14)] text-amber-dark",
  },
  {
    icon: MessagesSquare,
    title: "In-App Chat",
    desc: "Coordinate meetups without exposing phone numbers — contact info unlocks only with double consent.",
    tint: "bg-[rgba(244,91,105,0.10)] text-coral",
  },
  {
    icon: ShieldAlert,
    title: "Admin Moderation",
    desc: "Flagged reports, fraud review and recovery analytics keep the whole community safe.",
    tint: "bg-[rgba(87,100,122,0.12)] text-slate",
  },
];

export function Features() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything a campus lost & found needs"
          sub="Six pillars that make FindSync AI smart, private and safe by default."
        />

        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-lg border border-border-soft bg-surface p-6 shadow-xs transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <span className={cn("flex h-11 w-11 items-center justify-center rounded-md", f.tint)}>
                <f.icon className="h-[22px] w-[22px]" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold tracking-[-0.02em] text-ink">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}