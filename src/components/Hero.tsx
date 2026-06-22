import { ArrowUpRight } from "lucide-react";
import { OrbitLogos } from "./OrbitLogos";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28">
      {/* Subtle radial backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      <OrbitLogos />
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <h1 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          Human insights. <br /> Product results.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cross-functional collaboration: clear design systems.
          <br className="hidden sm:block" /> Rapid research, iterative testing, stakeholder alignment.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
