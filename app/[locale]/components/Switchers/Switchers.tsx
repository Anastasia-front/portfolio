import { ButtonLanguage } from "../Buttons/ButtonLanguage/ButtonLanguage";
import { ButtonTheme } from "../Buttons/ButtonTheme/ButtonTheme";

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
