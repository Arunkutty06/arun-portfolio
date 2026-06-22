import case1 from "@/assets/case1.png";
import case2 from "@/assets/case2.png";
import { Reveal } from "@/hooks/use-in-view";

const items = [
  {
    img: case1,
    title: "Smart Resource Allocation & Substitution Engine | Case Study",
    body: "A comprehensive UX/UI case study focusing on end-to-end product thinking for a heavy industrial ERP platform. This module re-engineers chaotic manual scheduling lookups into a streamlined, automated 30-second substitution matrix, directly safeguarding factory floor uptime and mitigating administrative cognitive load under pressure.",
    href: "https://dribbble.com/shots/27488954-Smart-Resource-Allocation-Substitution-Engine-Case-Study",
  },
  {
    img: case2,
    title: "Visionary Insights: Corporate Newsletter UI",
    body: "Exploration for a corporate leadership newsletter titled \"The Power of Vision.\" The goal here was to transform standard long-form text into an immersive, editorial experience.",
    href: "https://dribbble.com/shots/27488998-Editorial-Blog-Layout",
  },
];

export function ThingsWorthSharing() {
  return (
    <section id="things" className="bg-[#0a0a0b] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Things worth sharing</h2>
        </Reveal>
        <div className="mt-12 space-y-16">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer noopener"
                className="block rounded-3xl transition-shadow hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <article className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={it.img}
                      alt={it.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="md:pt-4">
                    <h3 className="text-xl font-medium md:text-2xl">{it.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {it.body}
                    </p>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
