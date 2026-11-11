import { ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navigation from "./Navigation";
import SkipLink from "./SkipLink";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SkipLink />
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
