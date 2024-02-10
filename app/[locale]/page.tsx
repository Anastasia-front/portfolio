"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";
import { menuItems } from "./constants";

import {
  Features,
  GallerySection,
  Hero,
  ObjectsSection,
  Robots,
  Video,
} from "./components";

export default function Home() {
  const t = useTranslations("home");
  const n = useTranslations("nav");

  return (
    <>
      <Robots
        page={menuItems[0].url}
        ogImg={t("ogImage")}
        title={`${n("page")} ${n("home")}`}
      />
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
