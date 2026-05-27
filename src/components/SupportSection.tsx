import Reveal from "./AnimatedSection";

const supports = [
  {
    name: "HIRASAWA.ID",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbC13UP1CYoODnULpp3E" },
      { label: "GitHub", href: "https://github.com/Tenkxzz" },
    ],
    thumbnail: null,
    github: "Tenkxzz",
  },
  {
    name: "Kevin",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCeuLM5K3zcAzISsg3S" },
      { label: "GitHub", href: "https://github.com/ventosilenzioso" },
      { label: "TikTok", href: "https://www.tiktok.com/@ventosilenzioso" },
    ],
    thumbnail: null,
    github: "ventosilenzioso",
  },
  {
    name: "RedzFlow",
    links: [
      { label: "GitHub", href: "https://github.com/petangZi" },
      { label: "TikTok", href: "https://www.tiktok.com/@azuredz.ai" },
    ],
    thumbnail: "https://f.top4top.io/p_3799ozkz50.jpg",
    github: "petangZi",
  },
  {
    name: "Rhmt | Code AI",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p" },
      { label: "Telegram", href: "https://t.me/rAi_engine" },
    ],
    thumbnail: null,
    github: null,
  },
  {
    name: "Shadownex",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb8Lge5FHWq3fTan4V0J" },
      { label: "GitHub", href: "https://github.com/ShadowNex293" },
    ],
    thumbnail: "https://i.top4top.io/p_3799gnnt93.jpg",
    github: "ShadowNex293",
  },
  {
    name: "Ptrx OFFicial",
    links: [
      { label: "GitHub", href: "https://github.com/ptrxofficial98" },
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbB7qrYAjPXKdnnnwK1r" },
    ],
    thumbnail: null,
    github: "ptrxofficial98",
  },
  {
    name: "Uda El vibe coding",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCv2yYBqbr1lJK6lU0U" },
      { label: "GitHub", href: "https://github.com/udaanotdev" },
    ],
    thumbnail: "https://g.top4top.io/p_3799qbmzi1.jpg",
    github: "udaanotdev",
  },
  {
    name: "Zyvora",
    links: [
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCarKyDOQIfNAUjYg0F" },
    ],
    thumbnail: null,
    github: null,
  },
  {
    name: "RK | Rozak Kairos",
    links: [
      { label: "GitHub", href: "https://github.com/Rozak-Kairos" },
      { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCn7jt1t90ZENMcZ32N" },
    ],
    thumbnail: null,
    github: "Rozak-Kairos",
  },
  {
    name: "ZAN",
    links: [
      { label: "TikTok", href: "https://www.tiktok.com/@zanzxyy4you" },
      { label: "Instagram", href: "https://www.instagram.com/Aelz4U" },
    ],
    thumbnail: "https://h.top4top.io/p_3799f9dt22.jpg",
    github: null,
  },
];

export default function SupportSection() {
  return (
    <section className="slide-section relative px-5 py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(255,106,0,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* LABEL */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              04 &mdash;
            </span>
            <span className="mono font-bold" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              SUPPORT CIRCLE
            </span>
            <div className="flex-1" style={{ height: "1px", background: "rgba(255,106,0,0.2)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(26px, 6vw, 42px)" }}>
            Orang-orang yang{" "}
            <span className="text-gradient">support saya</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-10" style={{ color: "rgba(240,240,240,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
            Komunitas yang selalu ada. Mereka juga builder, developer, dan kreator yang keren banget.
          </p>
        </Reveal>

        {/* SUPPORT GRID */}
        <div className="grid grid-cols-1 gap-3">
          {supports.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <div className="support-card" style={{ borderRadius: "2px", padding: "16px 20px" }}>
                <div className="flex items-center gap-4">
                  {/* AVATAR */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "1px solid rgba(255,106,0,0.25)",
                      background: "rgba(255,106,0,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.thumbnail ? (
                      <img
                        src={s.thumbnail}
                        alt={s.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          const parent = img.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="mono" style="color:#ff6a00;font-weight:700;font-size:14px;">${s.name.slice(0, 2).toUpperCase()}</span>`;
                          }
                        }}
                      />
                    ) : (
                      <span className="mono font-bold" style={{ color: "#ff6a00", fontSize: "14px" }}>
                        {s.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold mb-1 truncate"
                      style={{ fontSize: "14px", color: "rgba(240,240,240,0.9)" }}
                    >
                      {s.name}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono"
                          style={{
                            fontSize: "9px",
                            letterSpacing: "0.1em",
                            color: "rgba(255,106,0,0.65)",
                            border: "1px solid rgba(255,106,0,0.2)",
                            padding: "2px 8px",
                            borderRadius: "1px",
                            textDecoration: "none",
                            transition: "all 0.2s",
                            display: "inline-block",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.6)";
                            (e.currentTarget as HTMLElement).style.color = "#ff8c00";
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,106,0,0.07)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.2)";
                            (e.currentTarget as HTMLElement).style.color = "rgba(255,106,0,0.65)";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
