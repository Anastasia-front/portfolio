export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];

export const EN = "en";
export const UK = "uk";
