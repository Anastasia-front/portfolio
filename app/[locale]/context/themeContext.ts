import { createContext, useContext } from "react";

import { IThemeContext } from "../constants/types";

const defaultThemeContext: IThemeContext = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultThemeContext);
export const useThemeContext = () => useContext(ThemeContext);
