"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Portal } from "@/components";
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
      <Portal wrapperId="portal">
        <>
          <div
            className={`burger-backdrop ${
              isMenuOpen ? "burger-backdrop__active" : ""
            } `}
            onClick={handleBackdropClick}
          >
            <div
              className={`burger-background ${
                isMenuOpen && "burger-background__active"
              } `}
            >
              <button
                type="button"
                className="buttonIcon buttonIcon__close"
                onClick={hideBurger}
              >
                <Close width={25} height={25} />
              </button>

              <div className="burger-column">
                <Navigation onClick={hideBurger} />
                <Switchers className="burger-switchers" />
                <Link href="/" className="logo">
                  <Image
                    className="logo__img"
                    priority={true}
                    src={logo}
                    alt={t("logo")}
                    width={isScreenTabletSm ? 30 : 50}
                    height={isScreenTabletSm ? 30 : 50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      </Portal>
    </>
  );
}
