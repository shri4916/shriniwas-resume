import { useEffect, useState } from "react";
import { Menu, Download } from "lucide-react";
import { navLinks, personalInfo, publicUrl } from "@/data/portfolio-data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const active = useActiveSection(120);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = personalInfo.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_transparent]" : "bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 md:h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${personalInfo.name} — back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-serif text-base font-semibold text-primary-foreground">
            {initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-primary">{personalInfo.name}</span>
            <span className="hidden sm:block text-xs text-muted-foreground">{personalInfo.titles[0]}</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-accent transition-transform origin-left",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={publicUrl(personalInfo.resumeFile)} download>
              <Download /> Resume
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-serif text-xl text-primary">Menu</SheetTitle>
              <ul className="mt-8 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-surface hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full">
                <a href={publicUrl(personalInfo.resumeFile)} download>
                  <Download /> Download Resume
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
