"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";

import {
  Features,
  GallerySection,
  Hero,
  ObjectsSection,
  Video,
} from "./components";

export default function Home() {
  const [videoHeight, setVideoHeight] = useState(0);

  const t = useTranslations("home");

  const handleVideoHeightChange = (height: number) => {
    setVideoHeight(height);
  };

  return (
    <motion.main
      variants={bannerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <Video onVideoHeightChange={handleVideoHeightChange} />
      <motion.div
        variants={bannerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        className="home-content"
      >
        <Hero videoHeight={videoHeight} />
        <Features />
        <ObjectsSection />
        <GallerySection />
      </motion.div>
    </motion.main>
  );
}
