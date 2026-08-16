"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}