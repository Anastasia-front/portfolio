"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { ButtonText } from "@/components";
import { useGlobalContext } from "@/context";
import { bannerVariants } from "@/utils";

interface Props {
  text: string;
  button?: boolean;
}

export function Banner({ text, button }: Props) {
  const context = useGlobalContext();
  const t = useTranslations("btn");
  return (
    <motion.div
      className="banner"
      variants={bannerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <h3 className="banner__text">{text}</h3>
      {button && (
        <ButtonText
          modifier="white"
          text={t("contacts")}
          padding="0.5rem 1rem"
          hover="true"
          onClick={context.handleToggle}
        />
      )}
    </motion.div>
  );
}
