"use client";

import { useMediaQuery } from "react-responsive";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import decor1 from "@/assets/images/contacts/decoration/1.webp";
import decor2 from "@/assets/images/contacts/decoration/2.webp";

import { menuItems } from "@/constants";
import { useGlobalContext } from "@/context";
import { bannerVariants, gridVariants } from "@/utils";

const Contacts = dynamic(() =>
  import("../components/Contacts/Contacts").then((mod) => mod.Contacts)
);
const Form = dynamic(() =>
  import("../components/Form/Form").then((mod) => mod.Form)
);
const LottiePlayer = dynamic(() =>
  import("../components/LottiePlayer/LottiePlayer").then(
    (mod) => mod.LottiePlayer
  )
);
const Robots = dynamic(() =>
  import("../components/Robots/Robots").then((mod) => mod.Robots)
);

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const a = useTranslations("alt.decoration");
  const n = useTranslations("nav");

  const { settingsModal } = useGlobalContext();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const isContainer = useMediaQuery({ query: "(min-width: 1080px)" });

  return (
    <>
      <Robots
        title={`${n("page")} ${n("contacts")}`}
        page={menuItems[4].url}
        ogImg={t("ogImage")}
      />
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
    </>
  );
}
