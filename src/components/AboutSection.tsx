import Reveal from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section className="slide-section relative px-5 py-24">
      {/* BG ACCENT */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(255,106,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* SECTION LABEL */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              01 &mdash;
            </span>
            <span className="mono font-bold" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.6)" }}>
              ABOUT
            </span>
            <div className="flex-1" style={{ height: "1px", background: "rgba(255,106,0,0.2)" }} />
          </div>
        </Reveal>

        {/* PHOTO + BIO */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* PHOTO */}
          <Reveal delay={0.1} direction="left">
            <div
              className="corner-mark relative flex-shrink-0"
              style={{ width: "160px", height: "200px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  border: "1px solid rgba(255,106,0,0.3)",
                }}
              >
                <img
                  src="https://j.top4top.io/p_3799wvgk54.png"
                  alt="reiz_riz thumbnail"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9) contrast(1.1)" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://k.top4top.io/p_3799qrefj5.png";
                  }}
                />
              </div>
              {/* ACCENT BORDER OFFSET */}
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  right: "-8px",
                  bottom: "-8px",
                  border: "1px solid rgba(255,106,0,0.15)",
                  zIndex: -1,
                }}
              />
            </div>
          </Reveal>

          {/* BIO TEXT */}
          <div className="flex-1 flex flex-col gap-5">
            <Reveal delay={0.15}>
              <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(28px, 7vw, 48px)" }}>
                Halo, saya{" "}
                <span className="text-gradient">Farizy</span>
              </h2>
            </Reveal>

            <Reveal delay={0.22}>
              <p style={{ color: "rgba(240,240,240,0.65)", lineHeight: 1.8, fontSize: "15px" }}>
                Software developer yang passion banget sama AI engineering dan suka banget
                nge-vibe coding. Saya percaya teknologi itu harus bisa dirasain, bukan cuma
                dilihat. Dari ngerjain model AI, bikin tools open-source, sampe nyoba hal-hal
                random di linux — semua Saya lakuin dengan sepenuh hati.
              </p>
            </Reveal>

            <Reveal delay={0.29}>
              <p style={{ color: "rgba(240,240,240,0.5)", lineHeight: 1.8, fontSize: "14px" }}>
                Saya juga aktif share ilmu & prompt AI di Telegram channel{" "}
                <a
                  href="https://t.me/reiz_riz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-link"
                  style={{ fontSize: "14px" }}
                >
                  @reiz_riz
                </a>{" "}
                dan nge-dev bareng komunitas di{" "}
                <a
                  href="https://t.me/rixzdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-link"
                  style={{ fontSize: "14px" }}
                >
                  @rixzdev
                </a>.
              </p>
            </Reveal>

            {/* STATS */}
            <Reveal delay={0.36}>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { num: "3+", label: "YEARS EXP" },
                  { num: "AI", label: "ENGINEER" },
                  { num: "OSS", label: "BUILDER" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="card-texture p-4 text-center"
                    style={{ borderRadius: "2px" }}
                  >
                    <div className="mono font-bold text-gradient" style={{ fontSize: "22px" }}>
                      {s.num}
                    </div>
                    <div
                      className="mono"
                      style={{ fontSize: "9px", letterSpacing: "0.15em", color: "rgba(240,240,240,0.4)", marginTop: "4px" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* PREV PORTFOLIO LINK */}
            <Reveal delay={0.42}>
              <a
                href="https://riz-dev-murex.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mono inline-flex items-center gap-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "rgba(255,106,0,0.6)",
                  border: "1px solid rgba(255,106,0,0.2)",
                  padding: "6px 14px",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  display: "inline-flex",
                }}
              >
                PORTFOLIO LAMA &#8599;
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
