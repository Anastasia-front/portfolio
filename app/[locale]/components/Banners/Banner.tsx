"use client";

import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

import { useGlobalContext } from "@/context/globalContext";
import { bannerVariants } from "@/utils/animation";

import { ButtonText } from "../Buttons/ButtonText/ButtonText";

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
      <p className="banner__text">{text}</p>
      {button && (
        <ButtonText
          modifier="white"
          text={t("contacts")}
          padding="1.2rem 2rem"
          hover="true"
          onClick={context.handleToggle}
        />
      )}
    </motion.div>
  );
}
