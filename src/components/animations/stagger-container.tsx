"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}