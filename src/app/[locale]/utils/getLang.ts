import { EN, Locale } from "src/locales";

export async function getLang(localeString: string): Promise<Locale> {
  const prefix = "NEXT_LOCALE=";
  const startIndex = localeString.indexOf(prefix);

  if (startIndex !== -1) {
    return EN;
  }

  return EN;
}
