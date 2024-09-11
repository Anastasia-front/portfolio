"use client";

import { lazy } from "react";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";

import '@/styles/partials/_home.scss'


const Features = lazy(() => import("./sections/Features/Features"));
const GallerySection = lazy(
  () => import("./sections/3dObjects/GallerySection")
);
const Hero = lazy(() => import("./sections/Hero/Hero"));
const ObjectsSection = lazy(
  () => import("./sections/3dObjects/ObjectsSection")
);
const Video = lazy(() => import("./sections/Video/Video"));

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
        <ObjectsSection />
        <GallerySection />
      </motion.div>
    </motion.main>
  );
}
