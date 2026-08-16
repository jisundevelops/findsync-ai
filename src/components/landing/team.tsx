"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Maruf Ahmed Jisun",
    initials: "MJ",
    grad: "bg-gradient-primary",
  },
  {
    name: "Rabbie Hasan",
    initials: "RH",
    grad: "bg-gradient-teal",
  },
];

export function Team() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.09 } },
  };

  const item: Variants = {
    hidden: reduced
      ? { opacity: 1 }
      : { opacity: 0, y: 24, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Meet the builders"
          title="Team Tech Avengers"
          sub="Two builders, one mission: no item left behind."
        />

        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={item}
              className="flex flex-col items-center rounded-lg border border-border-soft bg-surface p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <span
                className={cn(
                  "flex h-[72px] w-[72px] items-center justify-center rounded-full text-xl font-extrabold text-white shadow-sm",
                  m.grad
                )}
                aria-hidden="true"
              >
                {m.initials}
              </span>

              <h3 className="mt-4 text-[15.5px] font-bold text-ink">
                {m.name}
              </h3>

              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-light">
                Builder
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}