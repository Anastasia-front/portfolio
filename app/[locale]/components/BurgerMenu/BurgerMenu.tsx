"use client";

import { useTranslations } from "next-intl";

import { Logo, Portal } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScreenQuery } from "@/hooks";

import { Navigation } from "../Navigation";
import { Switchers } from "../Switchers";
import { m } from "framer-motion";

export function BurgerMenu() {
  const t = useTranslations("alt");

  const { menuModal } = useGlobalContext();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      menuModal.close();
    }
  };

  useKeyPress("Escape", menuModal.close);

  const { isScreenTabletSm } = useScreenQuery();

  const classNameActive = menuModal.isOpen ? "active" : "";

  return (
    <>
      <button
        type="button"
        className={`button-icon animated-icon ${classNameActive}`}
        onClick={menuModal.open}
      >
        <span className="icon"></span>
      </button>
      <Portal wrapperId="portal">
        <div
          className={`burger-backdrop ${
            menuModal.isOpen ? "burger-backdrop__active" : ""
          } `}
          onClick={handleBackdropClick}
        >
          <div
            className={`burger-background ${
              menuModal.isOpen && "burger-background__active"
            } `}
          >
            <button
              type="button"
              className={`button-icon button-icon__close button-icon__close-right animated-icon ${classNameActive}`}
              onClick={menuModal.close}
            >
              <span className="icon"></span>
            </button>

            <div className="burger-column">
              <Navigation onClick={menuModal.close} />
              <Switchers className="burger-switchers" />
              <Logo size={isScreenTabletSm ? 30 : 50} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
}
