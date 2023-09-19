"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function Progressbar() {
  const scrollYProgress = useScroll().scrollYProgress;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX,
      }}
    ></motion.div>
  );
}
