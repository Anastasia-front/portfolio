"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { useKeyPress, useScreenQuery } from "@/hooks";

import logo from "../../../../public/logo.png";

import Burger from "@/assets/svg/burger.svg";
import Close from "@/assets/svg/close.svg";

import { Navigation } from "../Navigation";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  handleMenuOpen: (newState: boolean) => void;
}

export function BurgerMenu({ handleMenuOpen, isMenuOpen }: BurgerMenuProps) {
  const t = useTranslations("alt");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMenuOpen(false);
    }
  };

  const hideBurger = () => {
    handleMenuOpen(!isMenuOpen);
  };

  useKeyPress("Escape", hideBurger);

  const { isScreenTabletSm } = useScreenQuery();

  return (
    <>
      <button type="button" className="buttonIcon" onClick={hideBurger}>
        <Burger width={30} height={30} />
      </button>

      <div
        className={`burgerBackdrop ${isMenuOpen && "burgerBackdrop__active"} `}
        onClick={handleBackdropClick}
      >
        <div
          className={`burgerBackground ${
            isMenuOpen && "burgerBackground__active"
          } `}
        >
          <button
            type="button"
            className="buttonIcon buttonIcon__close"
            onClick={hideBurger}
          >
            <Close width={25} height={25} />
          </button>
          <div className="column">
            <Navigation onClick={hideBurger} />
            <Link href="/" className="logo logo__center">
              <Image
                className="logo__img"
                priority={true}
                src={logo}
                alt={t("logo")}
                width={isScreenTabletSm ? 50 : 100}
                height={isScreenTabletSm ? 50 : 100}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
