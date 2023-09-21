import { ButtonLanguage } from "../Buttons/ButtonLanguage/ButtonLanguage";
import { ButtonTheme } from "../Buttons/ButtonTheme/ButtonTheme";

export function Switchers() {
  return (
    <ul className="container-items">
      <li>
        <ButtonTheme />
      </li>
      <li>
        <ButtonLanguage />
      </li>
    </ul>
  );
}
