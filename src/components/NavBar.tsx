import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "stack", label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "support", label: "SUPPORT" },
  { id: "contact", label: "CONTACT" },
];

interface Props {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function NavBar({ activeSection, menuOpen, setMenuOpen }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4"
        style={{
          background: "rgba(5,5,5,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,106,0,0.15)",
        }}
      >
        {/* LOGO */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span
            className="mono text-gradient-animated font-bold tracking-widest"
            style={{ fontSize: "18px", letterSpacing: "0.15em" }}
          >
            reiz_riz
          </span>
          <span
            className="mono text-xs px-1.5 py-0.5"
            style={{
              border: "1px solid rgba(255,106,0,0.5)",
              color: "rgba(255,106,0,0.7)",
              fontSize: "9px",
              letterSpacing: "0.1em",
            }}
          >
            DEV
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="mono relative"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: activeSection === item.id ? "#ff6a00" : "rgba(240,240,240,0.5)",
                transition: "color 0.3s",
              }}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, #ff4500, #ff8c00)" }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
              style={{
                display: "block",
                width: i === 1 ? "18px" : "24px",
                height: "1.5px",
                background: "linear-gradient(90deg, #ff4500, #ffb347)",
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-8"
            style={{
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* GRAIN OVERLAY */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                opacity: 0.04,
                pointerEvents: "none",
              }}
            />
            <div className="divider-orange mb-10" />
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => scrollTo(item.id)}
                className="mono py-4 text-left"
                style={{
                  fontSize: "28px",
                  letterSpacing: "0.1em",
                  color:
                    activeSection === item.id
                      ? "#ff6a00"
                      : "rgba(240,240,240,0.6)",
                  borderBottom: "1px solid rgba(255,106,0,0.08)",
                }}
              >
                <span style={{ color: "rgba(255,106,0,0.4)", fontSize: "12px", marginRight: "12px" }}>
                  0{i + 1}.
                </span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
