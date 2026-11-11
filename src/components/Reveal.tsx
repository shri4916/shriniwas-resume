import { ReactNode, useRef, ElementType } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/** Fades content up once when it scrolls into view. Disabled for reduced-motion users via CSS. */
export default function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersectionObserver(ref, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
