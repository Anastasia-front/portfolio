"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.webp";
import decor2 from "@/assets/images/contacts/decoration/2.webp";

import { Contacts } from "@/components";
import { useGlobalContext } from "@/context";
import { bannerVariants, gridVariants } from "@/utils";

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

  const { settingsModal } = useGlobalContext();

  return (
    <motion.main
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0 }}
      className="contact-page container"
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
      <div className="contact-block">
        <Form />
        <LottiePlayer
          src="/animation/email.json"
          background="transparent"
          speed={1}
          className="contact__animation"
          loop
          autoplay
        />
        <Image
          loading="lazy"
          className={`contact__decoration ${
            settingsModal.isOpen ? "contact__decoration-right" : ""
          } contact__decoration-second`}
          alt={a("contacts")}
          src={decor2}
        />
        <Image
          loading="lazy"
          className={`contact__decoration ${
            settingsModal.isOpen ? "contact__decoration-right" : ""
          } contact__decoration-third`}
          alt={a("contacts")}
          src={decor2}
        />
      </div>
      <div className="relative z-index-1">
        <Image
          loading="lazy"
          className="contact__decoration contact__decoration-first"
          alt={a("contacts")}
          src={decor1}
        />
        <Image
          loading="lazy"
          className="contact__decoration contact__decoration-zero"
          alt={a("contacts")}
          src={decor1}
        />
        <Contacts />
      </div>
    </motion.main>
  );
}
