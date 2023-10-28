"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { useTranslations } from "next-intl";

import { FormSchema, InputField } from "@/components";
import {
  getButtonClasses,
  getButtonContent,
  sendEmail,
  sendMessageToTelegram,
} from "@/utils";

export function Form() {
  const t = useTranslations("contacts.form");

  const subject = t("subject");
  const email = t("email");
  const emailPlaceholder = t("emailPlaceholder");
  const message = t("subject");
  const messagePlaceholder = t("subject");
  const sendBtnError = t("sendBtnError");
  const sendBtnSuccess = t("sendBtnSuccess");
  const sendBtn = t("sendBtn");

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const buttonClasses = getButtonClasses({ formStatus, loading });
  const buttonContent = getButtonContent({
    formStatus,
    loading,
    sendBtn,
    sendBtnSuccess,
    sendBtnError,
  });

  const validationSchema = FormSchema();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const STORAGE_KEY = "contact_me_form";

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== "undefined" ? window.localStorage : null,
    setValue,
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setFormStatus("error");
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      await sendEmail(formData);
      await sendMessageToTelegram(formData);
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);

      reset();
      if (toggleModal) {
        setTimeout(() => {
          toggleModal();
        }, 3100);
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <div className="contact__inputs">
        <InputField
          label={email}
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder={emailPlaceholder}
        />
        <InputField
          label={subject}
          type="text"
          name="subject"
          register={register}
          errors={errors}
          placeholder={subjectPlaceholder}
        />
        <InputField
          label={message}
          type="textarea"
          name="message"
          register={register}
          errors={errors}
          placeholder={messagePlaceholder}
        />
      </div>
      <div className="contact__submit">
        <button
          type="submit"
          className={buttonClasses}
          disabled={
            loading || formStatus === "error" || formStatus === "success"
          }
        >
          {buttonContent}
        </button>
      </div>
    </form>
  );
}
