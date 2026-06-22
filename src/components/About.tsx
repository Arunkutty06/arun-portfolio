import portrait from "@/assets/profile.png";
import { Reveal } from "@/hooks/use-in-view";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="font-display text-4xl md:text-5xl">About me</h2>
      </Reveal>
      <div className="mt-10 grid md:grid-cols-2 md:items-start">
        <Reveal delay={100}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-[120%]">
            <span className="">I'm Arun, a UX Designer with 1.5 years of</span>{" "}
            experience turning complex enterprise systems into interfaces that
            actually make sense to the people using them. My background in
            Computer Applications gives me a rare edge — I think in systems,
            but I design for humans. Whether it's untangling a legacy SaaS
            workflow or designing an AI-powered analytics dashboard, I lead
            with research, move fast with prototypes, and stay close to the
            data until the experience feels right. Currently at Bharat Clouds, I
            work on B2B product design where the problems are messy and
            the stakes are real — and that's exactly where I like to be.
          </p>
        </Reveal>
        <Reveal delay={200} className="flex justify-center md:justify-end">
          <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md">
            <img
              src={portrait}
              alt="Portrait of Arun"
              width={800}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
