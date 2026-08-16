"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue shadow-xs">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] text-ink md:text-4xl">
        {title}
      </h2>

      {sub ? (
        <p className="mt-4 text-[17px] leading-relaxed text-slate">
          {sub}
        </p>
      ) : null}
    </motion.div>
  );
}