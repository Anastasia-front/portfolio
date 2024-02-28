"use client";

import { useCallback, useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

export default function ContentIndicator() {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY / totalHeight;
    setScrollPosition(currentPosition);
    controls.start({ scaleX: currentPosition });
  }, [controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.div
      className="progress-bar"
      animate={controls}
      style={{
        scaleX: scrollPosition,
        transformOrigin: "center",
      }}
    ></motion.div>
  );
}
