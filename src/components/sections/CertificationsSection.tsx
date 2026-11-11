import { awards, certifications } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function CertificationsSection() {
  return (
    <SplitSection title="Recognition" id="certifications">
      <div className="space-y-16 md:space-y-20">
        <div className="space-y-10">
          <p className="text-tiny tracking-widest">CERTIFICATIONS</p>
          {certifications.map((cert) => (
            <div key={cert.id} className="space-y-2">
              <p className="text-large leading-tight">{cert.name}</p>
              <p className="text-small">
                {cert.period}
                {cert.issuer ? ` · ${cert.issuer}` : ""}
              </p>
            </div>
          ))}
        </div>
        <hr className="border-t border-foreground/15" />
        <div className="space-y-10">
          <p className="text-tiny tracking-widest">AWARDS</p>
          {awards.map((award) => (
            <div key={award.id} className="space-y-2">
              <p className="text-large leading-tight">{award.name}</p>
              <p className="text-small">
                {award.organization} · {award.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}
