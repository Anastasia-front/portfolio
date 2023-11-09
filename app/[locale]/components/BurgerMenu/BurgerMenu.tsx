"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Portal } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScreenQuery } from "@/hooks";

import logo from "../../../../public/logo.png";

import { Navigation } from "../Navigation";
import { Switchers } from "../Switchers";

export function BurgerMenu() {
  const t = useTranslations("alt");

  const context = useGlobalContext();
  const { isMenuOpen, handleMenuOpen, handleMenuClose } = context;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMenuClose();
    }
  };

  const hideBurger = () => {
    handleMenuClose();
  };

  useKeyPress("Escape", hideBurger);

  const { isScreenTabletSm } = useScreenQuery();

  const classNameActive = isMenuOpen ? "active" : "";

  return (
    <>
      <button
        type="button"
        className={`button-icon animated-icon ${classNameActive}`}
        onClick={() => handleMenuOpen()}
      >
        <div className="icon"></div>
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
                className={`button-icon button-icon__close animated-icon ${classNameActive}`}
                onClick={hideBurger}
              >
                <div className="icon"></div>
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
