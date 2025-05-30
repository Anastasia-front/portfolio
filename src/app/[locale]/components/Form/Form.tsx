"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { yupResolver } from "@hookform/resolvers/yup";

import { FormSchema, InputField } from "@/components";
import { getButtonClasses, getButtonContent } from "@/helpers";
import { sendEmail } from "@/lib";
import { opacityVariants, sendMessageToTelegram } from "@/utils";

import "@/styles/partials/_contacts.scss";

type FormStatus = "success" | "error" | null;
interface FormData {
  subject: string;
  email: string;
  message: string;
}

export function Form() {
  const t = useTranslations("contacts.form");
  const b = useTranslations("btn");

  const subject = t("subject.title");
  const subjectPlaceholder = t("subject.placeholder");
  const email = t("email.title");
  const emailPlaceholder = t("email.placeholder");
  const message = t("message.title");
  const messagePlaceholder = t("message.placeholder");
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
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="contacts__form"
      method="POST"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="contacts__inputs">
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
        className={`contacts__submit ${buttonClasses}`}
        disabled={loading || formStatus === "error" || formStatus === "success"}
        aria-label={b("submit")}
      >
        {buttonContent}
      </button>
    </motion.form>
  );
}

// export async function getStaticProps(formData: FormData) {
//   await sendEmail(formData);
// }
