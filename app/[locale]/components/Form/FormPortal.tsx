"use client";

import { useTranslations } from "next-intl";

import { Form, Portal } from "@/components";
import { useGlobalContext } from "@/context";

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
              <Close width={25} height={25} />
            </button>
            <h1 className="form-title">{t("title")}</h1>
            <Form />
          </div>
        </div>
      </Portal>
    )
  );
}
