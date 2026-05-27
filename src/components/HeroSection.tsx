import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["SOFTWARE DEVELOPER", "AI ENGINEER", "VIBE CODER"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (i < current.length) {
        setDisplayed(current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            setDisplayed((prev) => {
              if (prev.length === 0) {
                clearInterval(eraseInterval);
                setRoleIndex((r) => (r + 1) % roles.length);
                return prev;
              }
              return prev.slice(0, -1);
            });
          }, 40);
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="slide-section relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-10 overflow-hidden">
      {/* BG GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,106,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW ORBS */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "10%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* AVATAR */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          className="flex justify-center mb-8"
        >
          <div className="avatar-ring pulse-ring" style={{ display: "inline-block" }}>
            <div style={{ borderRadius: "50%", overflow: "hidden", width: "96px", height: "96px" }}>
              <img
                src="https://k.top4top.io/p_3799qrefj5.png"
                alt="Farizy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Farizy&background=ff6a00&color=fff&size=200";
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* LABEL */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-3 mb-5"
        >
          <span className="tag">rixz-dev</span>
          <span className="tag">INDONESIA</span>
          <span className="tag">OPEN TO WORK</span>
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-bold leading-none mb-2"
          style={{ fontSize: "clamp(52px, 14vw, 96px)", letterSpacing: "-0.03em" }}
        >
          <span className="text-gradient-animated">reiz_riz</span>
        </motion.h1>

        {/* REAL NAME */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mono mb-6"
          style={{ color: "rgba(240,240,240,0.4)", fontSize: "13px", letterSpacing: "0.2em" }}
        >
          AKA. FARIZY
        </motion.p>

        {/* TYPEWRITER */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center items-center gap-1 mb-10"
          style={{ minHeight: "36px" }}
        >
          <span
            className="mono font-bold"
            style={{
              fontSize: "clamp(14px, 4vw, 20px)",
              letterSpacing: "0.12em",
              color: "#ff8c00",
            }}
          >
            {displayed}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ display: "inline-block", width: "2px", height: "22px", background: "#ff6a00" }}
          />
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            className="btn-acid"
            style={{ borderRadius: "2px", fontWeight: 700, letterSpacing: "0.1em" }}
            onClick={() => scrollTo("projects")}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="mono"
            style={{
              padding: "10px 24px",
              border: "1px solid rgba(255,106,0,0.5)",
              background: "transparent",
              color: "rgba(255,106,0,0.8)",
              fontSize: "13px",
              letterSpacing: "0.1em",
              cursor: "pointer",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "rgba(255,106,0,0.1)";
              (e.target as HTMLButtonElement).style.borderColor = "rgba(255,106,0,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
              (e.target as HTMLButtonElement).style.borderColor = "rgba(255,106,0,0.5)";
            }}
          >
            CONTACT ME
          </button>
        </motion.div>

        {/* SOCIAL ROW */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex justify-center flex-wrap gap-4 mt-10"
        >
          {[
            { label: "GITHUB", href: "https://github.com/rixz-dev" },
            { label: "TELEGRAM", href: "https://t.me/rixzdev" },
            { label: "TIKTOK", href: "https://www.tiktok.com/@whois_rixz" },
            { label: "INSTAGRAM", href: "https://www.instagram.com/reiz_riz" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="kinetic-link mono"
              style={{ fontSize: "11px", letterSpacing: "0.12em" }}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        onClick={() => scrollTo("about")}
        style={{ cursor: "pointer" }}
      >
        <span className="mono" style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.5)" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, rgba(255,106,0,0.7), transparent)",
          }}
        />
      </motion.div>

      {/* MARQUEE */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-2"
        style={{ borderTop: "1px solid rgba(255,106,0,0.1)" }}
      >
        <div className="marquee-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mono px-8"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,106,0,0.25)", whiteSpace: "nowrap" }}
            >
              SOFTWARE DEVELOPER &nbsp;&bull;&nbsp; AI ENGINEER &nbsp;&bull;&nbsp; VIBE CODER &nbsp;&bull;&nbsp; RIXZ-DEV &nbsp;&bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
