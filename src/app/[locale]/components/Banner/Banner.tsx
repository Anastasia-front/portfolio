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

  const { formModal } = useGlobalContext();

  return (
    <motion.div
      className={`banner ${className}`}
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 1 }}
    >
      <p className="banner__text">{text}</p>
      {button && (
        <ButtonText
          ariaLabel={t("contacts")}
          text={t("contacts")}
          onClick={formModal.open}
        />
      )}
    </motion.div>
  );
}
