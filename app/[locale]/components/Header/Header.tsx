"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { useGlobalContext } from "@/context";
import { useScreenQuery, useScrollLock } from "@/hooks";
import { navVariants } from "@/utils";

import { ButtonText } from "@/components/Buttons";
import { NavigationAndLogo } from "@/components/Navigation";
import { Switchers } from "@/components/Switchers";

export function Header() {
  const t = useTranslations("btn");
  const context = useGlobalContext();
  const { handleToggle } = context;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();
  useEffect(() => {
    if (isMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isMenuOpen, lockScroll, unlockScroll]);

  const handleMenuOpen = (newState: boolean): void => {
    setIsMenuOpen(newState);
  };

  const { isScreenTabletXl } = useScreenQuery();

  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavigationAndLogo
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
      />

      {!isMenuOpen && <Switchers />}

      {isScreenTabletXl && (
        <ButtonText
          text={t("contacts")}
          modifier="white"
          borderRadius="60px"
          padding="1.2rem 2rem"
          hover="true"
          onClick={handleToggle}
        />
      )}
    </motion.nav>
  );
}
