import { ButtonLanguage, ButtonTheme } from "@/components/Buttons";

export function Switchers() {
  return (
    <ul className="container-items container-items__frame">
      <li className="container-items__btn">
        <ButtonTheme />
      </li>
      <li className="container-items__btn">
        <ButtonLanguage />
      </li>
    </ul>
  );
}
