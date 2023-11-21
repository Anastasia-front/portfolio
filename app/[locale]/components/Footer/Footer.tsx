"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Contacts, Logo, Navigation } from "@/components";

interface Props {
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
}

export function Footer({ title, description }: Props) {
  const l = useTranslations("alt");

  const FooterVariants = {
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

  return (
    <footer id="footer">
      <motion.div
        className="footer"
        variants={FooterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {title && <h1 className="footer__title">{title}</h1>}
        {description && <p className="footer__description"> {description}</p>}

        <Logo className="logo__footer" />
        <Navigation location="banner" />
        <Contacts location="footer" />
      </motion.div>
    </footer>
  );
}
