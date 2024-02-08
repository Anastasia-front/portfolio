"use client";

import { useMediaQuery } from "react-responsive";

import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.webp";
import decor2 from "@/assets/images/contacts/decoration/2.webp";

import { Contacts, Form, LottiePlayer } from "@/components";
import { useGlobalContext } from "@/context";
import { bannerVariants, gridVariants } from "@/utils";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const a = useTranslations("alt.decoration");

  const { settingsModal } = useGlobalContext();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const isContainer = useMediaQuery({ query: "(min-width: 1080px)" });

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
        className="contact-page container"
      >
        <div
          className={`page-headings ${
            lang === "/en" && isContainer ? "m-l" : ""
          }`}
        >
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
              settingsModal.isOpen ? "contact__decoration-right" : ""
            } contact__decoration-second`}
            alt={a("contacts")}
            src={decor2}
          />
          <Image
            className={`contact__decoration ${
              settingsModal.isOpen ? "contact__decoration-right" : ""
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
      </motion.main>
    </>
  );
}
