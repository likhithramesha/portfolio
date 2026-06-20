import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeElement = "div" | "section" | "article" | "header" | "nav" | "p" | "h1" | "h2" | "li";

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  nav: motion.nav,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  li: motion.li,
};

type FadeInProps = {
  as?: FadeElement;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const Component = motionElements[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px 0px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
