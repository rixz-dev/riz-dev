import Reveal from "./AnimatedSection";

const projects = [
  {
    name: "rxs-code",
    desc: "Code editor / tools berbasis web yang Saya build sendiri dari nol.",
    link: "https://rxs-code.vercel.app",
    tags: ["WEB", "TOOLS", "OPEN-SOURCE"],
    status: "LIVE",
  },
  {
    name: "aria-x1-v1.0",
    desc: "AI language model yang saya pre-train dan publish di HuggingFace.",
    link: "https://huggingface.co/rixz-aners/aria-x1-v1.0",
    tags: ["AI", "LLM", "HUGGINGFACE"],
    status: "PUBLISHED",
  },
  {
    name: "Base-ryn-ai",
    desc: "Base framework untuk membangun AI chatbot berbasis ryn engine.",
    link: "https://github.com/rixz-dev/Base-ryn-ai",
    tags: ["AI", "FRAMEWORK", "GITHUB"],
    status: "OSS",
  },
];

export default function ProjectsSection() {
  return (
    <section className="slide-section relative px-5 py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(255,69,0,0.07) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* LABEL */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              03 &mdash;
            </span>
            <span className="mono font-bold" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              PROJECTS
            </span>
            <div className="flex-1" style={{ height: "1px", background: "rgba(255,106,0,0.2)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(26px, 6vw, 42px)" }}>
            Yang udah saya{" "}
            <span className="text-gradient">selesaikan</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-10" style={{ color: "rgba(240,240,240,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
            Kunjungi langsung webnya biar dapet info lebih lanjut.
          </p>
        </Reveal>

        {/* PROJECT CARDS */}
        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.12}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="card-texture corner-mark relative group"
                  style={{
                    padding: "24px",
                    borderRadius: "2px",
                    transition: "all 0.35s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.5)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(255,106,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* TOP ROW */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className="font-bold mono"
                        style={{ fontSize: "18px", color: "rgba(240,240,240,0.95)", letterSpacing: "-0.01em" }}
                      >
                        {p.name}
                      </h3>
                    </div>
                    {/* STATUS */}
                    <span
                      className="mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.15em",
                        color: "#ff6a00",
                        border: "1px solid rgba(255,106,0,0.4)",
                        padding: "3px 8px",
                        borderRadius: "1px",
                        background: "rgba(255,106,0,0.06)",
                        flexShrink: 0,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* DESC */}
                  <p style={{ color: "rgba(240,240,240,0.55)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
                    {p.desc}
                  </p>

                  {/* TAGS + LINK ROW */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <span
                      className="mono group-hover:text-orange-400"
                      style={{ fontSize: "11px", letterSpacing: "0.1em", color: "rgba(255,106,0,0.5)", transition: "color 0.3s" }}
                    >
                      VISIT &#8599;
                    </span>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div
                    className="absolute bottom-0 left-0 h-px opacity-0 group-hover:opacity-100"
                    style={{
                      width: "100%",
                      background: "linear-gradient(90deg, #ff4500, #ffb347, transparent)",
                      transition: "opacity 0.4s",
                    }}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* GITHUB CTA */}
        <Reveal delay={0.5}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/rixz-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex items-center gap-3"
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                color: "rgba(255,106,0,0.6)",
                textDecoration: "none",
                padding: "10px 20px",
                border: "1px solid rgba(255,106,0,0.2)",
                borderRadius: "2px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.6)";
                (e.currentTarget as HTMLElement).style.color = "#ff8c00";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,106,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,106,0,0.6)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              LIHAT SEMUA DI GITHUB &#8599;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
