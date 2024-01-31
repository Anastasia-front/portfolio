"use client";

import { useTranslations } from "next-intl";
import Head from "next/head";

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
  const t = useTranslations("home");

  return (
    <>
      <Head>
        <meta property="og:image" content={t("ogImage")} />
      </Head>

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
    </>
  );
}
