import type { ComponentType } from "react";
import figma  from "@/assets/figmaicon.svg";
import gemini from "@/assets/Gemini.svg";
import claude from "@/assets/Claude_icon.svg";
import bootstrap from "@/assets/icons8-bootstrap.svg";
import midjourney from "@/assets/midjourney.svg";
import css from "@/assets/icons8-css.svg";
import html from "@/assets/icons8-html.svg";

import {
  SiFramer,
  SiOpenai,
  SiWebflow,
  SiJira,
  SiPinterest,
  SiNotion,
  SiUnsplash,
  SiMiro,
  SiDribbble,
} from "react-icons/si";

const createSvgIcon = (src: string, alt: string) => ({ size }: { size?: number; color?: string }) => (
  <img src={src} alt={alt} style={{ width: size, height: size, objectFit: "contain" }} />
);

const FigmaIcon = createSvgIcon(figma, "Figma");
const GeminiIcon = createSvgIcon(gemini, "Gemini");
const ClaudeIcon = createSvgIcon(claude, "Claude");
const BootstrapIcon = createSvgIcon(bootstrap, "Bootstrap");
const MidjourneyIcon = createSvgIcon(midjourney, "Midjourney");
const CssIcon = createSvgIcon(css, "CSS");
const HtmlIcon = createSvgIcon(html, "HTML");

type Logo = { Icon: ComponentType<{ size?: number; color?: string }>; color: string; bg: string };

const ringOuter: Logo[] = [
  { Icon: FigmaIcon, color: "#f24e1e", bg: "#ffffff" },
  { Icon: GeminiIcon, color: "#ffffff", bg: "#0f0f10" },
  { Icon: ClaudeIcon, color: "#0f0f10", bg: "#ffffff" },
  { Icon: BootstrapIcon, color: "#7952b3", bg: "#ffffff" },
  { Icon: MidjourneyIcon, color: "#ffffff", bg: "#0f0f10" },
  { Icon: CssIcon, color: "#1572b6", bg: "#ffffff" },
  { Icon: HtmlIcon, color: "#e44d26", bg: "#0f0f10" },
  { Icon: SiFramer, color: "#ffffff", bg: "#0f0f10" },
  { Icon: SiOpenai, color: "#0f0f10", bg: "#ffffff" },
  { Icon: SiMiro, color: "#000000", bg: "#ffd02f" },
  { Icon: SiWebflow, color: "#146ef5", bg: "#0f0f10" },
  { Icon: SiDribbble, color: "#ea4c89", bg: "#0f0f10" },
  { Icon: SiOpenai, color: "#ffffff", bg: "#10a37f" },
  { Icon: SiPinterest, color: "#e60023", bg: "#ffffff" },
  { Icon: SiNotion, color: "#ffffff", bg: "#0f0f10" },
  { Icon: SiJira, color: "#2684ff", bg: "#0f0f10" },
  { Icon: SiUnsplash, color: "#ffffff", bg: "#0f0f10" },
];

function Tile({ Icon, color, bg, size }: Logo & { size: number }) {
  return (
    <div
      className="grid place-items-center rounded-2xl shadow-lg ring-4 ring-white/5 p-1 transition-transform hover:scale-110"
      style={{ width: size, height: size, background: bg }}
    >
      <Icon size={size * 0.55} color={color} />
    </div>
  );
}

export function OrbitLogos() {
  // Two rings — produces a denser, "floating" arrangement like the reference.
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center">
      <div className="group relative aspect-square w-[min(92vw,820px)]">
        {/* Outer ring */}
        <Ring logos={ringOuter} radiusPct={65} tile={65} />
        {/* Inner ring (subset, smaller) */}
        <div className="hidden md:block">
          <Ring
            logos={[ringOuter[2], ringOuter[5], ringOuter[8], ringOuter[11], ringOuter[14], ringOuter[0]]}
            radiusPct={30}
            tile={44}
            reverse
          />
        </div>
      </div>
    </div>
  );
}

function Ring({
  logos,
  radiusPct,
  tile,
  reverse = false,
}: {
  logos: Logo[];
  radiusPct: number;
  tile: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 ${reverse ? "orbit-rotate-reverse" : "orbit-rotate"} group-hover:[animation-play-state:paused]`}
    >
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + radiusPct * Math.cos(angle);
        const y = 50 + radiusPct * Math.sin(angle);
        return (
          <div
            key={i}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className={`${reverse ? "orbit-rotate" : "orbit-rotate-reverse"} group-hover:[animation-play-state:paused]`}>
              <Tile {...logo} size={tile} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
