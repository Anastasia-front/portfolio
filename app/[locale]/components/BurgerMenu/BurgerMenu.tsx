"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { useKeyPress, useScreenQuery } from "@/hooks";

import logo from "../../../../public/logo.png";

import Burger from "@/assets/svg/burger.svg";
import Close from "@/assets/svg/close.svg";

import { Navigation } from "../Navigation";
import { Switchers } from "../Switchers";

interface Props {
  isMenuOpen: boolean;
  handleMenuOpen: (newState: boolean) => void;
}

export function BurgerMenu({ handleMenuOpen, isMenuOpen }: Props) {
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
        <Burger width={20} height={20} />
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

          <div className="burgerColumn">
            <Navigation onClick={hideBurger} />
            <Switchers className="burgerSwitchers" />
            <Link href="/" className="logo">
              <Image
                className="logo__img"
                priority={true}
                src={logo}
                alt={t("logo")}
                width={isScreenTabletSm ? 50 : 70}
                height={isScreenTabletSm ? 50 : 70}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
