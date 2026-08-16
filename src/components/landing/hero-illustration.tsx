"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Package, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroIllustration() {
  const reduced = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduced ? false : ({ opacity: 0, y: 24 } as const),
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 0.7,
      ease: easeOut,
    },
  });

  const float = (duration: number, delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <motion.div {...enter(0.15)} className="relative">
      {/* .glass is permitted on the hero per §2 */}
      <div className="glass relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-lg">
        {/* map-line backdrop */}
        <svg
          className="absolute inset-0 h-full w-full text-border"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="42"
              height="42"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 42 0 L 0 0 0 42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* animated dashed match route */}
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F45B69" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#12B76A" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 72 232 C 150 150 250 168 328 88"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2 10"
            vectorEffect="non-scaling-stroke"
            animate={
              reduced
                ? undefined
                : { strokeDashoffset: [0, -24] }
            }
            transition={
              reduced
                ? undefined
                : {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }
            }
          />
        </svg>

        {/* floating location pins + AI sparkle */}

        <motion.div
          {...float(4.2)}
          className="absolute left-[10%] top-[12%] text-coral"
        >
          <MapPin
            className="h-7 w-7"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          {...float(5, 0.8)}
          className="absolute bottom-[10%] right-[12%] text-teal"
        >
          <MapPin
            className="h-6 w-6"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          {...float(4.6, 0.4)}
          className="absolute right-[22%] top-[30%] text-violet"
        >
          <Sparkles
            className="h-5 w-5"
            aria-hidden="true"
          />
        </motion.div>

        {/* lost item card */}

        <div className="absolute bottom-[13%] left-[5%] sm:left-[8%]">
          <motion.div {...enter(0.35)}>
            <motion.div {...float(5.2, 0.2)}>
              <div className="w-[190px] rounded-md border border-border-soft bg-surface p-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-14 w-8 shrink-0 rounded-[7px] bg-ink p-[3px]">
                    <div className="h-full w-full rounded-[4px] bg-[linear-gradient(160deg,#232C3D,#0B1220)]" />

                    <span className="absolute left-1/2 top-[3px] h-[3px] w-3 -translate-x-1/2 rounded-full bg-white/25" />

                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold text-coral">
                      ?
                    </span>
                  </div>

                  <div className="min-w-0">
                    <Badge variant="lost">Lost</Badge>

                    <p className="mt-1 truncate text-[13px] font-bold text-ink">
                      iPhone 13 · Black
                    </p>

                    <p className="truncate font-mono text-[10.5px] text-slate-light">
                      Last seen: Library
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* found item card */}

        <div className="absolute right-[5%] top-[9%] sm:right-[8%]">
          <motion.div {...enter(0.5)}>
            <motion.div {...float(4.8, 1)}>
              <div className="w-[190px] rounded-md border border-border-soft bg-surface p-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-11 w-8 shrink-0 items-center justify-center rounded-[7px] bg-[rgba(18,183,106,0.12)] text-teal-dark">
                    <Package
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <Badge variant="found">Found</Badge>

                    <p className="mt-1 truncate text-[13px] font-bold text-ink">
                      Phone near Cafe
                    </p>

                    <p className="truncate font-mono text-[10.5px] text-slate-light">
                      2h ago · Bldg C
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* pulsing AI match chip */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div {...enter(0.65)}>
            <motion.div
              animate={
                reduced
                  ? undefined
                  : { scale: [1, 1.06, 1] }
              }
              transition={
                reduced
                  ? undefined
                  : {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }
              }
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-bold text-white shadow-blue">
                <Sparkles
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />

                AI MATCH

                <span className="font-mono font-semibold">
                  94%
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}