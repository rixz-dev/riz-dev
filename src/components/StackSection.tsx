import Reveal from "./AnimatedSection";

const stacks = [
  {
    name: "PHP",
    icon: "https://cdn.svgporn.com/logos/php.svg",
    desc: "Backend scripting",
  },
  {
    name: "Python",
    icon: "https://cdn.svgporn.com/logos/python.svg",
    desc: "AI & scripting",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.svgporn.com/logos/javascript.svg",
    desc: "Web & fullstack",
  },
  {
    name: "Node.js",
    icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
    desc: "Runtime & APIs",
  },
  {
    name: "Next.js",
    icon: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
    desc: "React framework",
  },
  {
    name: "Supabase",
    icon: "https://cdn.svgporn.com/logos/supabase-icon.svg",
    desc: "DB & Auth",
  },
  {
    name: "GitHub",
    icon: "https://cdn.svgporn.com/logos/github-icon.svg",
    desc: "Version control",
  },
  {
    name: "Linux",
    icon: "https://cdn.svgporn.com/logos/linux-tux.svg",
    desc: "OS & server",
  },
  {
    name: "pip",
    icon: "https://cdn.svgporn.com/logos/pypi.svg",
    desc: "Python packages",
  },
  {
    name: "llama.cpp",
    icon: "https://cdn.svgporn.com/logos/c-plusplus.svg",
    desc: "LLM inference",
  },
];

export default function StackSection() {
  return (
    <section className="slide-section relative px-5 py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(255,106,0,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* LABEL */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              02 &mdash;
            </span>
            <span className="mono font-bold" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              TECH STACK
            </span>
            <div className="flex-1" style={{ height: "1px", background: "rgba(255,106,0,0.2)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(26px, 6vw, 42px)" }}>
            Tools yang{" "}
            <span className="text-gradient">saya pake</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-10" style={{ color: "rgba(240,240,240,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
            Stack yang saya andelin setiap hari buat build, deploy, dan break things.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3">
          {stacks.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <div
                className="card-texture relative overflow-hidden group"
                style={{
                  padding: "16px",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                {/* HOVER GLOW */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,106,0,0.08) 0%, transparent 60%)",
                    transition: "opacity 0.3s",
                    pointerEvents: "none",
                  }}
                />

                <div className="flex items-center gap-3 relative z-10">
                  {/* ICON */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,106,0,0.12)",
                      borderRadius: "2px",
                      padding: "6px",
                    }}
                  >
                    <img
                      src={s.icon}
                      alt={s.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: s.name === "GitHub" || s.name === "Next.js" ? "invert(1) brightness(0.9)" : "none",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="mono" style="color:#ff6a00;font-size:10px;font-weight:700;">${s.name.slice(0, 2).toUpperCase()}</span>`;
                        }
                      }}
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <div
                      className="font-semibold"
                      style={{ fontSize: "13px", color: "rgba(240,240,240,0.9)" }}
                    >
                      {s.name}
                    </div>
                    <div
                      className="mono"
                      style={{ fontSize: "10px", color: "rgba(255,106,0,0.6)", letterSpacing: "0.05em" }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACCENT LINE on hover */}
                <div
                  className="absolute bottom-0 left-0 h-px group-hover:opacity-100 opacity-0"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #ff4500, #ff8c00, transparent)",
                    transition: "opacity 0.4s",
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
