import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  type: "text" | "textarea";
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: { [key: string]: { message: string } };
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
        {label} *
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          {...register(name)}
          className={`${errors[name] ? "text-red" : ""} contact__textfield`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          id={name}
          {...register(name)}
          type={type}
          className={`${errors[name] ? "text-red" : ""} contact__input`}
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
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
