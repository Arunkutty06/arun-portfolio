import { Reveal } from "@/hooks/use-in-view";
import linkedin from "@/assets/linkedin.svg";
import behance from "@/assets/behance.svg";
import dribbble from "@/assets/dribbble.svg";
  
export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0b] pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-muted-foreground">LET'S WORK TOGETHER</p>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="mailto:arunrajaram6@gmail.com"
            className=" flex justify-center mt-6 block break-all font-display text-[12vw] leading-[1.05] underline decoration-[#7c7cff] decoration-[3px] underline-offset-[0.25em] sm:text-[10vw] md:text-[6vw]"
          >
            arunrajaram6@gmail.com
          </a>
        </Reveal>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>Designed and built by Arun M D R</p>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/arunmdr" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground">
              <img src={linkedin} alt="LinkedIn" className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.behance.net/arunromeo" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground">
              <img src={behance} alt="Behance" className="h-4 w-4" />
              <span>Behance</span>
            </a>
            <a href="https://dribbble.com/Arun_MDR" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground">
              <img src={dribbble} alt="Dribbble" className="h-4 w-4" />
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
