import { ButtonLanguage, ButtonTheme } from "@/components/Buttons";

interface Props {
  className?: string;
}

export function Switchers({ className = "" }: Props) {
  return (
    <ul className={`container-items container-items__frame ${className}`}>
      <li className="container-items__btn">
        <ButtonTheme />
      </li>
      <li className="container-items__btn">
        <ButtonLanguage />
      </li>
    </ul>
  );
}
