import { ButtonLanguage } from "../Buttons/ButtonLanguage";
import { ButtonTheme } from "../Buttons/ButtonTheme";

export function Switchers() {
  return (
    <ul className="nav-items">
      <li>
        <ButtonTheme />
      </li>
      <li>
        <ButtonLanguage />
      </li>
    </ul>
  );
}
