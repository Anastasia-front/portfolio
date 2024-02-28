"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { ButtonText, Logo, Portal } from "@/components";
import { useGlobalContext } from "@/context";

import { Navigation } from "../Navigation";
import { Switchers } from "../Switchers";

export function BurgerMenu() {
  const t = useTranslations("btn");

  const { menuModal, formModal } = useGlobalContext();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      menuModal.close();
    }
  };

  const handleButtonClick = () => {
    if (menuModal.isOpen) {
      menuModal.close();
      formModal.open();
    }
  };

  const pathname = usePathname();
  const contactsPage = pathname === "/contacts";

  const classNameActive = menuModal.isOpen ? "active" : "";

  return (
    <>
      <button
        type="button"
        className={`button-icon animated-icon ${classNameActive}`}
        onClick={menuModal.open}
        aria-label={t("burger")}
      >
        <span className="icon"></span>
      </button>
      <Portal wrapperId="burger-portal">
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
              aria-label={t("close")}
            >
              <span className="icon"></span>
            </button>

            <div className="burger-column">
              <Navigation onClick={menuModal.close} />
              <Switchers className="burger-switchers" />
              {!contactsPage && (
                <ButtonText
                  text={t("contacts")}
                  onClick={handleButtonClick}
                  ariaLabel={t("contacts")}
                />
              )}
              <Logo size={40} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
}
