"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.png";
import decor2 from "@/assets/images/contacts/decoration/2.png";

import { Contacts, Form, LottiePlayer } from "@/components";
import { useGlobalContext } from "@/context";
import { gridVariants } from "@/utils";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const a = useTranslations("alt.decoration");

  const { isSettingsOpen } = useGlobalContext();

  return (
    <main className="contact-page container">
      <div className="page-headings">
        <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
          {t("title")}
        </motion.h1>
        <motion.h5
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="page-headings__small-width"
        >
          {t("description")}
        </motion.h5>
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
          className={`contact__decoration ${
            isSettingsOpen ? "contact__decoration-right" : ""
          } contact__decoration-second`}
          alt={a("contacts")}
          src={decor2}
        />
        <Image
          className={`contact__decoration ${
            isSettingsOpen ? "contact__decoration-right" : ""
          } contact__decoration-third`}
          alt={a("contacts")}
          src={decor2}
        />
      </div>
      <div className="relative z-index-1">
        <Image
          className="contact__decoration contact__decoration-first"
          alt={a("contacts")}
          src={decor1}
        />
        <Image
          className="contact__decoration contact__decoration-zero"
          alt={a("contacts")}
          src={decor1}
        />
        <Contacts />
      </div>
    </main>
  );
}
