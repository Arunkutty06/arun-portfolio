import { Reveal } from "@/hooks/use-in-view";

const services = [
  { n: "01", title: "Product design", body: "End-to-end UX and UI for digital products - from early concepts and user flows to polished interfaces ready to ship. I focus on clarity, structure and details that make products easier to use." },
  { n: "02", title: "Design systems", body: "Scalable design systems with clear foundations, reusable components and practical documentation. Built to support both designers and developers, so the system stays useful beyond handoff." },
  { n: "03", title: "Interface direction", body: "Visual direction for digital products that need a distinct and consistent presence. From typography and motion to imagery and UI details, I help shape interfaces that feel cohesive and memorable." },
  { n: "04", title: "Web design", body: "Thoughtful websites for studios, founders and brands - with a strong sense of typography, structure and visual clarity. Designed to feel considered, expressive and easy to navigate." },
  { n: "05", title: "Brand identity", body: "Visual identities and brand systems for digital products and modern businesses. Usually developed alongside the product, so brand and interface feel like one coherent experience." },
  { n: "06", title: "Advisory & audits", body: "Focused design support for teams that need an outside perspective. UX/UI reviews, design system audits and hands-on feedback to identify gaps, sharpen decisions and move work forward." },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="text-center font-display text-4xl md:text-5xl">What I do</h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <div className="h-full border-b border-border p-6 md:border-r [&:nth-child(3n)]:md:border-r-0">
              <div className="text-xs text-muted-foreground">{s.n}</div>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
