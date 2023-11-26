"use client";

import { useEffect } from "react";

import { useTranslations } from "next-intl";

import { Form, Portal } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScrollLock } from "@/hooks";

import Close from "@/assets/svg/close.svg";

export function FormPortal() {
  const t = useTranslations("contacts.form");

  const context = useGlobalContext();
  const { isFormOpen, handleFormClose } = context;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleFormClose();
    }
  };

  useKeyPress("Escape", handleFormClose);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isFormOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isFormOpen, lockScroll, unlockScroll]);

  return (
    isFormOpen && (
      <Portal wrapperId="form-portal">
        <div className="form-backdrop" onClick={handleBackdropClick}>
          <div className="form-background">
            <button
              type="button"
              className="button-icon button-icon__close"
              onClick={handleFormClose}
            >
              <Close />
            </button>
            <div className="form-content">
              <h3 className="form-title">{t("title")}</h3>
              <Form onClick={handleFormClose} />
            </div>
          </div>
        </div>
      </Portal>
    )
  );
}
