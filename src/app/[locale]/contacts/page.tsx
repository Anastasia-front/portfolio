"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.webp";
import decor2 from "@/assets/images/contacts/decoration/2.webp";

import { Contacts } from "@/components";
import { useGlobalContext } from "@/context";
import { bannerVariants, gridVariants, textAnimation } from "@/utils";

import "@/styles/partials/_contacts.scss";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const Form = dynamic(() =>
  import("../components/Form/Form").then((mod) => mod.Form)
);
const LottiePlayer = dynamic(() =>
  import("../components/LottiePlayer/LottiePlayer").then(
    (mod) => mod.LottiePlayer
  )
);

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const a = useTranslations("alt.decoration");

  const { theme } = useTheme();

  const { settingsModal } = useGlobalContext();

  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    textAnimation(
      descriptionRef.current,
      t("farewell.secondPart"),
      "animation-6",
      theme
    );
  }, [t, theme]);

  return (
    <motion.main
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0 }}
      className="contacts-page container"
    >
      <div className="page-headings">
        <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
          {t("title")}
        </motion.h1>
        <motion.p
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="page-headings__small-width"
        >
          {t("description")}
        </motion.p>
      </div>
      <div className="contacts-block">
        <Form />
        <LottiePlayer
          src="/animation/email.json"
          background="transparent"
          speed={1}
          className="contacts__animation"
          loop
          autoplay
        />
        <Image
          loading="lazy"
          className={`contacts__decoration ${
            settingsModal.isOpen ? "contacts__decoration-right" : ""
          } contacts__decoration-second`}
          alt={a("contacts")}
          src={decor2}
        />
        <Image
          loading="lazy"
          className={`contacts__decoration ${
            settingsModal.isOpen ? "contacts__decoration-right" : ""
          } contacts__decoration-third`}
          alt={a("contacts")}
          src={decor2}
        />
      </div>
      <div className="relative z-index-1">
        <Image
          loading="lazy"
          className="contacts__decoration contacts__decoration-first"
          alt={a("contacts")}
          src={decor1}
        />
        <Image
          loading="lazy"
          className="contacts__decoration contacts__decoration-zero"
          alt={a("contacts")}
          src={decor1}
        />
        <Contacts />
      </div>
      <div className="contacts__farewell">
        <h4 className="accent-text text-align__center width-70vw line-height__small">
          {t("farewell.firstPart")}
        </h4>
        <p className="accent-text" ref={descriptionRef}>
          {t("farewell.secondPart")}
        </p>
      </div>
    </motion.main>
  );
}
