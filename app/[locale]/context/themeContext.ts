import { createContext, useContext } from "react";

import { IThemeContext } from "../constants/types";

export const ThemeContext = createContext<IThemeContext | null>(null);
export const useThemeContext = () => useContext(ThemeContext);
