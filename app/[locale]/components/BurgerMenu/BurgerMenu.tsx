"use client";

import { useTranslations } from "next-intl";

import { Logo, Portal } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScreenQuery } from "@/hooks";

import { Navigation } from "../Navigation";
import { Switchers } from "../Switchers";

export function BurgerMenu() {
  const t = useTranslations("alt");

  const { isMenuOpen, handleMenuOpen, handleMenuClose } = useGlobalContext();

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
        <span className="icon"></span>
      </button>
      <Portal wrapperId="portal">
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
              <span className="icon"></span>
            </button>

            <div className="burger-column">
              <Navigation onClick={hideBurger} />
              <Switchers className="burger-switchers" />
              <Logo size={isScreenTabletSm ? 30 : 50} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
}
