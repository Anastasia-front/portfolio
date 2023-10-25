"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.png";
import {
  default as decor2,
  default as decor3,
} from "@/assets/images/contacts/decoration/2.png";

import { Form, LottiePlayer } from "@/components";
import { gridVariants } from "@/utils";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const a = useTranslations("alt.decoration");

  return (
    <main className="contact-page container">
      <div className="page-headings">
        <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
          {t("title")}
        </motion.h1>
        <motion.h6 variants={gridVariants} initial="hidden" animate="visible">
          {t("description")}
        </motion.h6>
      </div>
      <div className="contact-block">
        <Form />
        <LottiePlayer
          src="https://assets10.lottiefiles.com/packages/lf20_lstnp9p3.json"
          background="transparent"
          speed={1}
          className="contact__animation"
          loop
          autoplay
        />
        <Image
          className="contact__decoration contact__decoration-first"
          alt={a("contacts")}
          src={decor1}
        />
        <Image
          className="contact__decoration contact__decoration-second"
          alt={a("contacts")}
          src={decor2}
        />
        <Image
          className="contact__decoration contact__decoration-third"
          alt={a("contacts")}
          src={decor3}
        />
      </div>
    </main>
  );
}
