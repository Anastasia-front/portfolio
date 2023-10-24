"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Form, LottiePlayer } from "@/components";
import { gridVariants } from "@/utils";

export default function ContactsPage() {
  const t = useTranslations("contacts");

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
      </div>
    </main>
  );
}
