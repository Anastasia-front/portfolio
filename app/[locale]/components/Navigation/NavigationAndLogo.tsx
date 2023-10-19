"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { useScreenQuery } from "@/hooks";

import { BurgerMenu, Navigation } from "@/components";

interface Props {
  isMenuOpen: boolean;
  handleMenuOpen: (newState: boolean) => void;
}

export function NavigationAndLogo({ handleMenuOpen, isMenuOpen }: Props) {
  const logo = useTranslations("alt");

  const { isScreenTabletSm } = useScreenQuery();

  const hideBurger = () => {
    handleMenuOpen(false);
  };

  return (
    <nav className="container-items container-items__frame">
      <Link href="/" className="logo" onClick={hideBurger}>
        <Image
          className="logo__img"
          src="/logo.png"
          alt={logo("logo")}
          width={30}
          height={30}
        />
      </Link>
      {isScreenTabletSm ? (
        <Navigation />
      ) : (
        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      )}
    </nav>
  );
}
