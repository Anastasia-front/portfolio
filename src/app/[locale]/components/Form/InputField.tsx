"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import { useGlobalContext } from "@/context";

interface FormData {
  subject: string;
  email: string;
  message: string;
}
interface Props {
  label: string;
  type: "text" | "email" | "textarea";
  name: "email" | "subject" | "message";
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  placeholder: string;
}

export function InputField({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}: Props) {
  const { formModal } = useGlobalContext();

  const errorMessage =
    (type === "text" &&
      (formModal.isOpen
        ? "contacts__input-error contacts__input-error-text contacts__input-error-text-modal"
        : "contacts__input-error contacts__input-error-text")) ||
    (type === "email" &&
      (formModal.isOpen
        ? "contacts__input-error contacts__input-error-email contacts__input-error-email-modal"
        : "contacts__input-error contacts__input-error-email")) ||
    (type === "textarea" &&
      (formModal.isOpen
        ? "contacts__input-error contacts__input-error-textfield contacts__input-error-textfield-modal"
        : "contacts__input-error contacts__input-error-textfield")) ||
    "";

  return (
    <div className="contacts__input-block">
      <label htmlFor={name} className="label">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          {...register("message")}
          className={`${errors.message ? "text-red" : ""} contacts__textfield`}
          placeholder={placeholder}
          inputMode="text"
        ></textarea>
      ) : type === "email" ? (
        <input
          id={name}
          {...register("email")}
          type={type}
          className={`${errors.email ? "text-red" : ""} contacts__input`}
          placeholder={placeholder}
          autoComplete="true"
          inputMode="email"
        />
      ) : (
        <input
          id={name}
          {...register("subject")}
          type={type}
          className={`${errors.subject ? "text-red" : ""} contacts__input`}
          placeholder={placeholder}
          autoComplete="true"
          inputMode="text"
        />
      )}
      {errors[name] && <p className={errorMessage}>{errors[name]?.message}</p>}
    </div>
  );
}
