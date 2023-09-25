"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { useGlobalContext } from "@/context";
import { navVariants } from "@/utils";

import { ButtonText } from "@/components/Buttons";
import { NavigationAndLogo } from "@/components/Navigation";
import { Switchers } from "@/components/Switchers";

export function Header() {
  const t = useTranslations("btn");
  const context = useGlobalContext();
  const { handleToggle } = context;

  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavigationAndLogo />
      <Switchers />
      <ButtonText
        text={t("contacts")}
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
        onClick={handleToggle}
      />
    </motion.nav>
  );
}
