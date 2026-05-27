import Reveal from "./AnimatedSection";

const contacts = [
  {
    label: "EMAIL",
    value: "rixzorangbiasa@gmail.com",
    href: "mailto:rixzorangbiasa@gmail.com",
    desc: "Drop a message",
  },
  {
    label: "WHATSAPP",
    value: "+639976911709",
    href: "https://wa.me/639976911709",
    desc: "Chat langsung",
  },
  {
    label: "TELEGRAM",
    value: "@Machamywifee",
    href: "https://t.me/Machamywifee",
    desc: "DM di Telegram",
  },
];

const channels = [
  {
    label: "Telegram Dev Channel",
    href: "https://t.me/rixzdev",
    value: "@rixzdev",
  },
  {
    label: "Telegram AI Prompts",
    href: "https://t.me/reiz_riz",
    value: "@reiz_riz",
  },
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029Vb7pucW8F2pB5qP9Ah0E",
    value: "reiz_riz WA",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@whois_rixz",
    value: "@whois_rixz",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reiz_riz",
    value: "@reiz_riz",
  },
  {
    label: "GitHub",
    href: "https://github.com/rixz-dev",
    value: "rixz-dev",
  },
];

export default function ContactSection() {
  return (
    <section className="slide-section relative px-5 py-24 pb-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(255,106,0,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* LABEL */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              05 &mdash;
            </span>
            <span className="mono font-bold" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              CONTACT
            </span>
            <div className="flex-1" style={{ height: "1px", background: "rgba(255,106,0,0.2)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(26px, 6vw, 42px)" }}>
            Let&#39;s{" "}
            <span className="text-gradient">connect</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-10" style={{ color: "rgba(240,240,240,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
            Mau collab, nanya sesuatu, atau sekadar sapa? Saya selalu buka buat ngobrol.
          </p>
        </Reveal>

        {/* CONTACT CARDS */}
        <div className="flex flex-col gap-3 mb-10">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="card-texture group"
                  style={{
                    padding: "20px 24px",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.5)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(255,106,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div>
                    <div
                      className="mono mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontSize: "14px", color: "rgba(240,240,240,0.9)", fontWeight: 500 }}>
                      {c.value}
                    </div>
                    <div className="mono" style={{ fontSize: "10px", color: "rgba(240,240,240,0.35)", marginTop: "2px" }}>
                      {c.desc}
                    </div>
                  </div>
                  <span style={{ color: "rgba(255,106,0,0.5)", fontSize: "20px", flexShrink: 0 }}>&#8599;</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CHANNELS */}
        <Reveal delay={0.4}>
          <div
            className="card-texture"
            style={{ padding: "20px 24px", borderRadius: "2px", marginBottom: "0" }}
          >
            <div
              className="mono mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}
            >
              SOCIAL &amp; CHANNELS
            </div>
            <div className="grid grid-cols-2 gap-3">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "10px 12px",
                      border: "1px solid rgba(255,106,0,0.1)",
                      borderRadius: "2px",
                      transition: "all 0.25s",
                      background: "rgba(255,255,255,0.01)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.4)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,106,0,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.1)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)";
                    }}
                  >
                    <div
                      className="mono"
                      style={{ fontSize: "9px", letterSpacing: "0.12em", color: "rgba(255,106,0,0.5)", marginBottom: "3px" }}
                    >
                      {ch.label}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(240,240,240,0.7)", fontWeight: 500 }}>
                      {ch.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FOOTER */}
        <Reveal delay={0.55}>
          <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,106,0,0.1)" }}>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="mono font-bold text-gradient-animated" style={{ fontSize: "20px", letterSpacing: "0.15em" }}>
                reiz_riz
              </span>
              <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,240,240,0.25)" }}>
                &copy; {new Date().getFullYear()} &mdash; BUILT WITH PASSION &amp; CAFFEINE
              </p>
              <div className="flex gap-4">
                {[
                  { label: "GH", href: "https://github.com/rixz-dev" },
                  { label: "TG", href: "https://t.me/rixzdev" },
                  { label: "IG", href: "https://www.instagram.com/reiz_riz" },
                  { label: "TT", href: "https://www.tiktok.com/@whois_rixz" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: "rgba(255,106,0,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      padding: "4px 8px",
                      border: "1px solid rgba(255,106,0,0.1)",
                      borderRadius: "1px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#ff6a00";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,106,0,0.4)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.1)";
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
