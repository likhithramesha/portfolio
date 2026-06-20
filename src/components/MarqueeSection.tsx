import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { marqueeItems } from "../data";

const firstRow = marqueeItems.slice(0, 5);
const secondRow = marqueeItems.slice(5);

function MarqueeTile({ item }: { item: (typeof marqueeItems)[number] }) {
  return (
    <article className={`marquee-tile tone-${item.tone}`}>
      <span>{item.metric}</span>
      <strong>{item.label}</strong>
      <p>{item.detail}</p>
    </article>
  );
}

export function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rowOneX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-150, 150]);
  const rowTwoX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [150, -150]);
  const repeatedFirst = [...firstRow, ...firstRow, ...firstRow];
  const repeatedSecond = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section ref={ref} className="overflow-hidden bg-paper pb-12 pt-20 sm:pb-16 sm:pt-24" aria-label="Portfolio proof strip">
      <div className="grid gap-3">
        <motion.div className="flex w-max gap-3 will-change-transform" style={{ x: rowOneX }}>
          {repeatedFirst.map((item, index) => (
            <MarqueeTile key={`${item.label}-one-${index}`} item={item} />
          ))}
        </motion.div>
        <motion.div className="flex w-max gap-3 will-change-transform" style={{ x: rowTwoX }}>
          {repeatedSecond.map((item, index) => (
            <MarqueeTile key={`${item.label}-two-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
