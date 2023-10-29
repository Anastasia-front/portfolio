import { FieldErrors, UseFormRegister } from "react-hook-form";

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
  return (
    <div className="contact__input-block">
      <label htmlFor={name} className="label">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          {...register("message")}
          className={`${errors.message ? "text-red" : ""} contact__textfield`}
          placeholder={placeholder}
        ></textarea>
      ) : type === "email" ? (
        <input
          id={name}
          {...register("email")}
          type={type}
          className={`${errors.email ? "text-red" : ""} contact__input`}
          placeholder={placeholder}
          autoComplete="true"
        />
      ) : (
        <input
          id={name}
          {...register("subject")}
          type={type}
          className={`${errors.subject ? "text-red" : ""} contact__input`}
          placeholder={placeholder}
          autoComplete="true"
        />
      )}
      {errors[name] && (
        <p
          className={`${
            type === "textarea"
              ? "contact__input-error"
              : "contact__input-error contact__textfield-error"
          } `}
        >
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
