import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}

export function Section({ id, children, className, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tone === "surface" && "bg-surface", className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, intro, align = "left", className }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium tracking-tight text-primary text-balance">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
