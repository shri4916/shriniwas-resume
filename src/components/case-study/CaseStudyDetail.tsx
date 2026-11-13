import { ArrowLeft, ArrowRight, Boxes, ClipboardList, Compass, Layers, ListChecks, Target, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import CaseDiagram from "./CaseDiagram";

const showDraftNotes = import.meta.env.DEV;

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((a) => (
        <li key={a} className="flex gap-3">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ n, label, icon: Icon, children }: { n: number; label: string; icon: typeof Target; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border pt-6 md:grid-cols-[14rem_1fr] md:gap-8">
      <h3 className="flex items-start gap-3 text-sm font-semibold text-primary">
        <span className="font-serif text-base font-normal text-muted-foreground">{String(n).padStart(2, "0")}</span>
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0 text-accent" /> {label}
        </span>
      </h3>
      <div className="text-[0.95rem] leading-relaxed text-foreground/80">{children}</div>
    </section>
  );
}

interface Props {
  study: CaseStudy;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function CaseStudyDetail({ study, index, total, onPrev, onNext }: Props) {
  return (
    <article>
      <header className="border-b border-border bg-surface px-6 pb-8 pt-10 sm:px-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
          <span className="text-accent">{study.industry}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
          <span className="text-muted-foreground">
            Case study {index + 1} of {total}
          </span>
        </div>
        <DialogTitle className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl">
          {study.title}
        </DialogTitle>
        <DialogDescription className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {study.summary}
        </DialogDescription>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span key={t} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-primary-soft">
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-6 px-6 py-8 sm:px-10">
        <Block n={1} label="Business Challenge" icon={Target}>
          <p>{study.challenge}</p>
        </Block>
        <Block n={2} label="Project Context" icon={Compass}>
          <p>{study.context}</p>
        </Block>
        <Block n={3} label="My Role & Responsibilities" icon={ClipboardList}>
          <p className="mb-3 font-semibold text-primary">{study.role}</p>
          <Bullets items={study.responsibilities} />
        </Block>
        <Block n={4} label="Business Analysis Approach" icon={ListChecks}>
          <ol className="space-y-3">
            {study.approach.map((a, i) => (
              <li key={a} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block n={5} label="Architecture & Integration" icon={Boxes}>
          <CaseDiagram diagram={study.diagram} />
          <div className="mt-5">
            <Bullets items={study.architecture} />
          </div>
        </Block>
        <Block n={6} label="Solution Approach" icon={Layers}>
          <Bullets items={study.solution} />
        </Block>
        <Block n={7} label="Business Outcome" icon={TrendingUp}>
          <Bullets items={study.outcomes} />
          {showDraftNotes && study.outcomesToVerify && study.outcomesToVerify.length > 0 && (
            <div className="mt-5 rounded-md border border-dashed border-accent/50 bg-accent-soft/50 p-4 text-sm">
              <p className="font-semibold text-accent">To verify — visible in the editor preview only</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                {study.outcomesToVerify.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </Block>
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border px-6 py-5 sm:px-10">
        <Button variant="ghost" onClick={onPrev} className="text-primary">
          <ArrowLeft /> Previous
        </Button>
        <Button variant="outline" onClick={onNext} className="border-primary/25 text-primary">
          Next case study <ArrowRight />
        </Button>
      </footer>
    </article>
  );
}
