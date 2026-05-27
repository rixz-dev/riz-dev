import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({ children, delay = 0, direction = "up", className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initial =
    direction === "up"
      ? { y: 48, opacity: 0 }
      : direction === "left"
      ? { x: -48, opacity: 0 }
      : { x: 48, opacity: 0 };

  const animate = direction === "up" ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
