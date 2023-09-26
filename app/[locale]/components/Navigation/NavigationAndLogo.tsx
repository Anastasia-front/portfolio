"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { useScreenQuery, useScrollLock } from "@/hooks";

import { BurgerMenu } from "@/components/BurgerMenu";

import { Navigation } from "./Navigation";

export function NavigationAndLogo() {
  const logo = useTranslations("alt");

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

  const { isScreenTabletLg } = useScreenQuery();

  return (
    <div className="container-items container-items__frame">
      <Link href="/" className="logo">
        <Image
          className="logo__img"
          src="/logo.png"
          alt={logo("logo")}
          width={45}
          height={45}
        />
      </Link>
      {isScreenTabletLg ? (
        <Navigation />
      ) : (
        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      )}
    </div>
  );
}
