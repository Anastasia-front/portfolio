import { ButtonLanguage, ButtonTheme } from "@/components";

interface Props {
  className?: string;
  settings: boolean;
}

export function Switchers({ className = "", settings }: Props) {
  return (
    <ul className={`container-items container-items__frame ${className}`}>
      <li className="container-items__btn">
        <ButtonTheme settings={settings} />
      </li>
      <li className="container-items__btn">
        <ButtonLanguage />
      </li>
    </ul>
  );
}
