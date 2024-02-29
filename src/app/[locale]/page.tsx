"use client";

import { lazy } from "react";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";
import { menuItems } from "./constants";

const Features = lazy(() => import("./components/Features/Features"));
const GallerySection = lazy(
  () => import("./components/3dObjects/GallerySection")
);
const Hero = lazy(() => import("./components/Hero/Hero"));
const ObjectsSection = lazy(
  () => import("./components/3dObjects/ObjectsSection")
);
const Video = lazy(() => import("./components/Video/Video"));

const Robots = dynamic(() =>
  import("./components/Robots/Robots").then((mod) => mod.Robots)
);

export default function Home() {
  const t = useTranslations("home");
  const n = useTranslations("nav");

  return (
    <>
      <Robots
        page={menuItems[0].url}
        ogImg={t("ogImage")}
        title={`${n("page")} ${n("home")}`}
        description={t("description")}
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
