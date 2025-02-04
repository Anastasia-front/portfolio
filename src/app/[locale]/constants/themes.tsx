import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";
import System from "@/assets/svg/system.svg";

export type LANGUAGE_KEYS = "light" | "dark" | "system";

export const themes = ["light", "dark", "system"] as const;

export type Theme = (typeof themes)[number];

export const THEMES: Record<
  Theme,
  { label: string; icon: JSX.Element; key: LANGUAGE_KEYS }
> = {
  light: { label: "light", icon: <Sun />, key: "light" },
  dark: { label: "dark", icon: <Moon />, key: "dark" },
  system: { label: "system", icon: <System />, key: "system" },
};
