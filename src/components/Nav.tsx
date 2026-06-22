import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "What I do", href: "#what-i-do" },
  { label: "Things worth sharing", href: "#things" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-[max-content]">
        <div className="flex items-center justify-between gap-2 rounded-full border border-border bg-background/70 px-3 py-2 backdrop-blur-md">
          <div className="hidden md:flex items-center gap-1 mx-auto">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="ml-1 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Download Resume
            </a>
          </div>
          <div className="flex w-full md:hidden items-center justify-between">
            <span className="px-2 text-sm font-medium tracking-tight">Arun M D R</span>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="rounded-full p-2 text-foreground hover:bg-accent"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
