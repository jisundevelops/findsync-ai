import React from "react";
import { Mail } from "lucide-react";
import { LogoMark } from "@/components/brand/logo-mark";

const iconBtn =
  "flex h-9 w-9 items-center justify-center rounded-full text-slate transition-colors hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.14 1.18A10.9 10.9 0 0 1 12 5.87c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.73.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.12 0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <LogoMark className="h-8 w-8 rounded-[8px]" />

          <div>
            <p className="text-sm font-extrabold tracking-[-0.02em] text-ink">
              FindSync AI
            </p>

            <p className="text-xs text-slate-light">
              © {new Date().getFullYear()} Team Tech Avengers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/jisundevelops/findsync-ai"
            target="_blank"
            rel="noreferrer"
            className={iconBtn}
            aria-label="FindSync AI on GitHub"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>

          <a
            href="mailto:team@findsync.ai"
            className={iconBtn}
            aria-label="Contact Team Tech Avengers"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}