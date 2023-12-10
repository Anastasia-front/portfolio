"use client";

import { useTranslations } from "next-intl";

import { Form, PortalModal } from "@/components";
import { useGlobalContext } from "@/context";

export function FormPortal() {
  const t = useTranslations("contacts.form");

  const context = useGlobalContext();
  const { isFormOpen, handleFormClose } = context;

  return (
    isFormOpen && (
      <PortalModal
        nameId="form-portal"
        isOpen={isFormOpen}
        handleClose={handleFormClose}
        title={t("title")}
      >
        <Form onClick={handleFormClose} />
      </PortalModal>
    )
  );
}
