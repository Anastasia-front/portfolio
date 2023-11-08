"use client";

import { useEffect } from "react";

import { useTranslations } from "next-intl";

import { Form, Portal } from "@/components";
import { useGlobalContext } from "@/context";
import { useScrollLock } from "@/hooks";

import Close from "@/assets/svg/close.svg";

export function FormPortal() {
  const t = useTranslations("contacts.form");

  const context = useGlobalContext();
  const { toggle, handleToggle } = context;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (toggle) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [toggle, lockScroll, unlockScroll]);

  return (
    toggle && (
      <Portal wrapperId="form-portal">
        <div className="form-backdrop" onClick={handleBackdropClick}>
          <div className="form-background">
            <button
              type="button"
              className="button-icon button-icon__close"
              onClick={handleToggle}
            >
              <Close />
            </button>
            <h3 className="form-title">{t("title")}</h3>
            <Form />
          </div>
        </div>
      </Portal>
    )
  );
}
