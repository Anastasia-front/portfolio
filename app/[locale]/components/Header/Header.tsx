"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { ButtonText, NavigationAndLogo, Switchers } from "@/components";
import { useGlobalContext } from "@/context";
import { useScreenQuery, useScrollLock } from "@/hooks";
import { navVariants } from "@/utils";

export function Header() {
  const t = useTranslations("btn");
  const context = useGlobalContext();
  const { handleToggle } = context;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHeaderFixed = pathname === "/" || pathname === "/uk";
  const headerClassName = isHeaderFixed ? "fixed-header" : "";

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
      className={`navigation ${headerClassName}`}
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
          borderRadius="60px"
          padding="1.2rem 2rem"
          hover="true"
          onClick={handleToggle}
        />
      )}
    </motion.nav>
  );
}
