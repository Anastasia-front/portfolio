"use client";

import { useTranslations } from "next-intl";

import * as Yup from "yup";

const form = {
  emailInvalid: "contacts.form.emailInvalid",
  subjectInvalid: "contacts.form.subjectInvalid",
  messageInvalid: "contacts.form.messageInvalid",
};

export function FormSchema() {
  const t = useTranslations();

  return Yup.object().shape({
    email: Yup.string()
      .trim()
      .required(t(form.emailInvalid))
      .min(6, t(form.emailInvalid))
      .max(63, t(form.emailInvalid))
      .matches(
        /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
        t(form.emailInvalid)
      ),
    subject: Yup.string()
      .trim()
      .required(t(form.subjectInvalid))
      .min(3, t(form.subjectInvalid))
      .max(70, t(form.subjectInvalid)),
    message: Yup.string()
      .trim()
      .required(t(form.messageInvalid))
      .min(3, t(form.messageInvalid))
      .max(500, t(form.messageInvalid)),
  });
}
