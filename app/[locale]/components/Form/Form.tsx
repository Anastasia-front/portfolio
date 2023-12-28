"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { opacityVariants } from "@/utils";

import { FormSchema, InputField } from "@/components";
import {
  getButtonClasses,
  getButtonContent,
  sendEmail,
  sendMessageToTelegram,
} from "@/utils";

const publicEmailLocal = process.env.NEXT_PUBLIC_EMAIL_LOCAL;
const publicEmailVercel = process.env.NEXT_PUBLIC_EMAIL_VERCEL;
const baseUrlLocal =
  process.env.NEXT_PUBLIC_BASE_URL_LOCAL || "http://localhost:3000";

let isLocalhost: boolean = false;

if (typeof window !== "undefined") {
  isLocalhost = window.location.href.includes(baseUrlLocal);
}

const formAction = isLocalhost
  ? `https://formsubmit.co/${publicEmailLocal}`
  : `https://formsubmit.co/${publicEmailVercel}`;

type FormStatus = "success" | "error" | null;
interface FormData {
  subject: string;
  email: string;
  message: string;
}

interface Props {
  onClick?: () => void;
}

export function Form({ onClick }: Props) {
  const t = useTranslations("contacts.form");

  const subject = t("subject");
  const subjectPlaceholder = t("subjectPlaceholder");
  const email = t("email");
  const emailPlaceholder = t("emailPlaceholder");
  const message = t("message");
  const messagePlaceholder = t("messagePlaceholder");
  const sendBtnError = t("sendBtnError");
  const sendBtnSuccess = t("sendBtnSuccess");
  const sendBtn = t("sendBtn");

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>(null);

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
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const STORAGE_KEY = "contact_me_form";

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== "undefined" ? window.localStorage! : undefined,
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

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    setLoading(true);
    try {
      await sendEmail(formData);
      await sendMessageToTelegram(formData);
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);

      reset();
    } catch (error) {
      alert(error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitClick = () => {
    if (onClick) {
      setTimeout(() => {
        onClick();
      }, 4000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="contact__form"
      action={formAction}
      method="POST"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
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
      </div>
      <InputField
        label={message}
        type="textarea"
        name="message"
        register={register}
        errors={errors}
        placeholder={messagePlaceholder}
      />
      <button
        type="submit"
        className={`contact__submit ${buttonClasses}`}
        disabled={loading || formStatus === "error" || formStatus === "success"}
        onClick={handleSubmitClick}
      >
        {buttonContent}
      </button>
    </motion.form>
  );
}
