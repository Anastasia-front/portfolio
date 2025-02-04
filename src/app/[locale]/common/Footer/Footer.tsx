"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

import { Navigation } from "@/common";
import { Contacts, Logo } from "@/components";
import { CV } from "@/constants";
import { currentMonth, currentYear } from "@/helpers";
import { footerVariants } from "@/utils";

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
          <span className="footer__bottom-text">
            {currentMonth}, {currentYear} ©
          </span>
          <a href={CV} target="_blank" aria-label="CV" className="accent-text">
            {t("first")} {i("first")} {i("last")}
          </a>
          <span className="footer__bottom-text">
            {t("last")} {theme === "dark" ? "🧡" : "🩵"}
          </span>
        </p>
      </motion.div>
    </footer>
  );
}
