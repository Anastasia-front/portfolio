import { Locale } from "src/locales";

interface Props {
  lang: Locale;
  page: string;
}

export async function getSeoData({ lang, page }: Props) {
  if (page === "/")
    return await import(`../data/seo/${lang}/home.json`).then((r) => r.default);
  return await import(`../data/seo/${lang}/${page}.json`).then((r) => r.default);
}
