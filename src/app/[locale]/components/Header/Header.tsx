"use client";

import { useEffect } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { ButtonText, NavigationAndLogo, Switchers } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScreenQuery, useScrollLock } from "@/hooks";
import { navVariants } from "@/utils";

export default function Header() {
  const t = useTranslations("btn");

  const { formModal, menuModal } = useGlobalContext();

  const pathname = usePathname();
  const isHeaderFixed = pathname === "/";
  const headerClassName = isHeaderFixed ? "fixed-header" : "";
  const contactsPage = pathname === "/contacts";

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (formModal.isOpen || menuModal.isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [formModal.isOpen, menuModal.isOpen, lockScroll, unlockScroll]);

  useKeyPress("Escape", () => {
    if (formModal.isOpen && menuModal.isOpen) {
      menuModal.close;
    } else {
      menuModal.close;
    }
  });

  const { isScreenTabletMd } = useScreenQuery();

  return (
    <motion.header
      className={`navigation ${headerClassName}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavigationAndLogo />

      {!contactsPage && isScreenTabletMd && (
        <ButtonText
          text={t("contacts")}
          onClick={formModal.open}
          ariaLabel={t("contacts")}
        />
      )}

      {!menuModal.isOpen && <Switchers />}
    </motion.header>
  );
}
