import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { CtaStrip } from "@/components/CtaStrip";
import { ThingsWorthSharing } from "@/components/ThingsWorthSharing";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun M D R — UX Designer · Human insights, product results" },
      { name: "description", content: "Portfolio of Arun, a UX Designer crafting clear, human-centered B2B product experiences." },
      { property: "og:title", content: "Arun M D R — UX Designer" },
      { property: "og:description", content: "Portfolio of Arun, a UX Designer crafting clear, human-centered B2B product experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <WhatIDo />
      <CtaStrip />
      <ThingsWorthSharing />
      <Footer />
    </main>
  );
}
