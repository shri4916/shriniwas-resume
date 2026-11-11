import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experience, industries, personalInfo, publicUrl } from "@/data/portfolio-data";
import portrait from "@/assets/shriniwas-ambad-portrait.jpg";

export default function HeroSection() {
  const { headline, headlineAccent } = personalInfo;
  const accentIndex = headlineAccent ? headline.indexOf(headlineAccent) : -1;
  const headlineStart = accentIndex >= 0 ? headline.slice(0, accentIndex) : headline;

  const stats = [
    { value: personalInfo.yearsOfExperience, label: "Years of experience" },
    { value: String(industries.length), label: "Industries served" },
    { value: String(experience.length), label: "Organisations" },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* quiet structural backdrop */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[38%] bg-surface lg:block" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="eyebrow">{personalInfo.name}</p>

          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-primary text-balance sm:text-6xl lg:text-7xl">
            {headlineStart}
            {accentIndex >= 0 && <span className="italic text-accent">{headlineAccent}</span>}
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium text-primary-soft md:text-lg">
            {personalInfo.titles.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />}
                {t}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {personalInfo.heroDescription}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group h-12 px-7 text-base">
              <a href="#case-studies">
                Explore My Work
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={publicUrl(personalInfo.resumeFile)} download>
                <Download /> Download Resume
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-4xl font-medium text-primary">{s.value}</dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none animate-in fade-in duration-1000">
          <div aria-hidden className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-accent" />
          <div className="relative overflow-hidden rounded-lg bg-surface-strong shadow-portrait">
            <img
              src={portrait}
              alt={`Portrait of ${personalInfo.name}`}
              width={481}
              height={587}
              loading="eager"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-lg border border-border bg-card p-4 shadow-card sm:left-auto sm:-right-6 sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Currently</p>
            <p className="mt-1 font-semibold text-primary">{personalInfo.currentRole.title}</p>
            <p className="text-sm text-muted-foreground">{personalInfo.currentRole.organization}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" /> {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
