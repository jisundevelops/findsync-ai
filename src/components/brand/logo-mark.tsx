import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-primary shadow-blue",
        className
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 4.9 5.4 11.4 6.6 12.7a.53.53 0 0 0 .8 0C13.6 20.4 19 13.9 19 9a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
    </span>
  );
}