"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { ButtonText } from "@/components";
import { useGlobalContext } from "@/context";
import { bannerVariants } from "@/utils";

interface Props {
  text: string;
  button?: boolean;
  className?: string;
}

export function Banner({ text, button, className = "" }: Props) {
  const t = useTranslations("btn");

  const context = useGlobalContext();
  const { handleFormOpen } = context;

  return (
    <motion.div
      className={`banner ${className}`}
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 1 }}
    >
      <h4 className="banner__text">{text}</h4>
      {button && (
        <ButtonText
          text={t("contacts")}
          hover="true"
          onClick={handleFormOpen}
        />
      )}
    </motion.div>
  );
}
