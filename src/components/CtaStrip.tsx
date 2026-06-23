import { ArrowUpRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm md:text-base">
          Have a thought in mind?{" "}
          {/* <a href="#contact" className="underline underline-offset-4 hover:text-foreground text-muted-foreground">
            Let's discuss.
          </a> */}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
