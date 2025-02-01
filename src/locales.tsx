import NO_FLAG from "@/assets/svg/norway-flag.svg";
import UA_FLAG from "@/assets/svg/ukraine-flag.svg";
import US_FLAG from "@/assets/svg/united-states-flag.svg";

type LANGUAGE_KEYS = "en" | "uk" | "no";

export const locales = ["en", "uk", "no"] as const;
export type Locale = (typeof locales)[number];

export const EN = "en";
export const UK = "uk";
export const NO = "no";

export const LANGUAGES: Record<
  Locale,
  { label: string; flag: JSX.Element; key: LANGUAGE_KEYS }
> = {
  en: { label: "English", flag: <US_FLAG />, key: "en" },
  uk: { label: "Ukrainian", flag: <UA_FLAG />, key: "uk" },
  no: { label: "Norwegian", flag: <NO_FLAG />, key: "no" },
};

export const LOCALES: Locale[] = Object.keys(LANGUAGES) as Locale[];
