import FR_FLAG from "@/assets/svg/france-flag.svg";
import NO_FLAG from "@/assets/svg/norway-flag.svg";
import SI_FLAG from "@/assets/svg/slovenia-flag.svg";
import UA_FLAG from "@/assets/svg/ukraine-flag.svg";
import US_FLAG from "@/assets/svg/united-states-flag.svg";

type LANGUAGE_KEYS = "fr" | "en" | "uk" | "no" | "si";

export const locales = ["fr", "en", "uk", "no", "si"] as const;
export type Locale = (typeof locales)[number];

export const FR = "fr";
export const EN = "en";
export const UK = "uk";
export const NO = "no";
export const SI = "si";

export const LANGUAGES: Record<
  Locale,
  { label: string; flag: JSX.Element; key: LANGUAGE_KEYS }
> = {
  fr: { label: "French", flag: <FR_FLAG />, key: "fr" },
  en: { label: "English", flag: <US_FLAG />, key: "en" },
  uk: { label: "Ukrainian", flag: <UA_FLAG />, key: "uk" },
  no: { label: "Norwegian", flag: <NO_FLAG />, key: "no" },
  si: { label: "Slovenian", flag: <SI_FLAG />, key: "si" },
};

export const LOCALES: Locale[] = Object.keys(LANGUAGES) as Locale[];
