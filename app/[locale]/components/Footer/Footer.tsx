"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

import { Contacts, Logo, Navigation } from "@/components";
import { CV } from "@/constants";

interface Props {
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
}

export function Footer({ title, description }: Props) {
  const i = useTranslations("name");
  const t = useTranslations("text");

  const { theme } = useTheme();

  const footerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      y: -300,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,

      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);

  return (
    <footer id="footer">
      <motion.div
        className="footer"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {title && <h1 className="footer__title">{title}</h1>}
        {description && <p className="footer__description"> {description}</p>}

        <Logo className="logo__footer" />
        <Navigation location="banner" />
        <Contacts location="footer" />

        <p className="footer__bottom">
          <span>
            {currentMonth}, {currentYear} ©
          </span>
          <a href={CV} target="_blank" aria-label="CV">
            {t("first")} {i("first")} {i("last")}
          </a>
          <span>
            {t("last")} {theme === "dark" ? "🧡" : "🩵"}
          </span>
        </p>
      </motion.div>
    </footer>
  );
}
