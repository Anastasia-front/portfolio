"use client";

import { useTranslations } from "next-intl";

import { Form, PortalModal } from "@/components";
import { useGlobalContext } from "@/context";

export default function FormPortal() {
  const t = useTranslations("contacts.form");

  const { formModal } = useGlobalContext();

  return (
    formModal.isOpen && (
      <PortalModal
        nameId="form-portal"
        isOpen={formModal.isOpen}
        handleClose={formModal.close}
        title={t("title")}
      >
        <Form onClick={formModal.close} />
      </PortalModal>
    )
  );
}
