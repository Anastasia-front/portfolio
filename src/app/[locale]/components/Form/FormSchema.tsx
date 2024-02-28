"use client";

import { useTranslations } from "next-intl";

import * as Yup from "yup";

const form = {
  required: "contacts.form.required",
  emailFormat: "contacts.form.email.format",
  subjectFormat: "contacts.form.subject.format",
  messageFormat: "contacts.form.message.format",
};

export function FormSchema() {
  const t = useTranslations();

  return Yup.object().shape({
    email: Yup.string()
      .trim()
      .required(t(form.required))
      .min(6, t(form.emailFormat))
      .max(30, t(form.emailFormat))
      .matches(
        /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
        t(form.emailFormat)
      ),
    subject: Yup.string()
      .trim()
      .required(t(form.required))
      .min(6, t(form.subjectFormat))
      .max(70, t(form.subjectFormat)),
    message: Yup.string()
      .trim()
      .required(t(form.required))
      .min(6, t(form.messageFormat))
      .max(600, t(form.messageFormat)),
  });
}
