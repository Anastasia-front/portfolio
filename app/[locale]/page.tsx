"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";

import { Hero, ObjectsSection, Video } from "./components";

export default function Home() {
  const [videoHeight, setVideoHeight] = useState(0);

  const t = useTranslations("home");

  const handleVideoHeightChange = (height: number) => {
    setVideoHeight(height);
  };

  return (
    <>
      <Video onVideoHeightChange={handleVideoHeightChange} />
      <motion.div
        variants={bannerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        className="hero-section"
        style={{ position: "relative", zIndex: 30 }}
      >
        <Hero videoHeight={videoHeight} />
        <ObjectsSection />
      </motion.div>
    </>
  );
}
