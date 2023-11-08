"use client";

import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { ButtonText, NavigationAndLogo, Switchers } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScreenQuery, useScrollLock } from "@/hooks";
import { navVariants } from "@/utils";

export function Header() {
  const t = useTranslations("btn");

  const context = useGlobalContext();
  const { handleToggle, handleClose } = context;

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

  useKeyPress("Escape", () => {
    if (isMenuOpen) {
      handleClose();
    }
  });

  const handleMenuOpen = (newState: boolean): void => {
    setIsMenuOpen(newState);
  };

  // const isBigMobileLandscape = useMediaQuery({
  //   query: `(min-width: 460px) and (max-width: 767px)`,
  // });
  // const isScreenTabletXl = useMediaQuery({
  //   query: `(min-width: 920px)`,
  // });

  const { isScreenMobileLg } = useScreenQuery();

  return (
    <motion.header
      className={`navigation ${headerClassName}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavigationAndLogo
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
      />

      {/* {(isBigMobileLandscape || isScreenTabletXl) && ( )}*/}
      {isScreenMobileLg && (
        <ButtonText text={t("contacts")} hover="true" onClick={handleToggle} />
      )}

      {!isMenuOpen && <Switchers />}
    </motion.header>
  );
}
