import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:pr-20">
        <p>Designed and developed by {personalInfo.name}.</p>
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
