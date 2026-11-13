import { ArrowDown, ArrowRight } from "lucide-react";
import { Fragment } from "react";
import type { CaseDiagram as CaseDiagramData } from "@/types/portfolio";
import { cn } from "@/lib/utils";

/** Simple left-to-right flow diagram built from case-study data. Stacks vertically on small screens. */
export default function CaseDiagram({ diagram }: { diagram: CaseDiagramData }) {
  return (
    <figure className="rounded-lg border border-border bg-surface p-5 sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{diagram.title}</span>
      </figcaption>
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
        {diagram.stages.map((stage, i) => (
          <Fragment key={stage.label}>
            {i > 0 && (
              <div aria-hidden className="flex shrink-0 items-center justify-center text-accent">
                <ArrowDown className="h-4 w-4 md:hidden" />
                <ArrowRight className="hidden h-4 w-4 md:block" />
              </div>
            )}
            <div
              className={cn(
                "flex flex-1 flex-col rounded-md border p-3.5",
                stage.highlight ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card",
              )}
            >
              <p
                className={cn(
                  "text-[0.7rem] font-semibold uppercase tracking-wider",
                  stage.highlight ? "text-accent-soft" : "text-accent",
                )}
              >
                {stage.label}
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {stage.nodes.map((n) => (
                  <li
                    key={n}
                    className={cn(
                      "rounded px-2 py-1.5 text-xs font-medium leading-snug",
                      stage.highlight ? "bg-primary-foreground/10" : "bg-surface text-primary-soft",
                    )}
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
      {diagram.caption && <p className="mt-4 text-xs text-muted-foreground">{diagram.caption}</p>}
    </figure>
  );
}
