"use client";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";

import { Features, Hero, Video } from "./components";

export default function Home() {
  return (
    <motion.main
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <Video />
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0 }}
        className="home-content"
      >
        <Hero />
        <Features />
        {/* <ObjectsSection /> */}
        {/* <GallerySection /> */}
      </motion.div>
    </motion.main>
  );
}
