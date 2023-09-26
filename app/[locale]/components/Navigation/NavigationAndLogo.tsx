"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { useScreenQuery } from "@/hooks";

import { BurgerMenu } from "@/components/BurgerMenu";

import { Navigation } from "./Navigation";

interface Props {
  isMenuOpen: boolean;
  handleMenuOpen: (newState: boolean) => void;
}

export function NavigationAndLogo({ handleMenuOpen, isMenuOpen }: Props) {
  const logo = useTranslations("alt");

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
