"use client";

import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components";
import { opacityVariants } from "@/utils";
import { menuItems } from "@/constants";

import { Dynamic } from "./Dynamic";

export function GallerySection() {
  const i = useTranslations("home.gallery");
  const b = useTranslations("btn");

  return (
    <motion.section
      className="gallery-section"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="gallery container">
        <div className="section-header section-header__container">
          <h2>{i("title")}</h2>
          <ButtonLink text={b("gallery")} href={menuItems[1].url}/>
        </div>
        <p className="block-hint block-hint__for-one block-hint__self-start">
          <BsInfoCircle /> {i("subtitle")}
        </p>
      </div>

      <Dynamic componentName="Gallery" />
    </motion.section>
  );
}
