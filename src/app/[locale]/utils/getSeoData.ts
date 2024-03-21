import { Locale } from "src/locales";

import { getPageInfo } from ".";

interface Props {
  lang: Locale;
  page: string  
}

export async function getSeoData({ lang, page }: Props) {
  // const [page, name] = await getPageInfo(pathname);

  // const parts = String(pathname).split("/");
  // const page = parts.length > 1 ? parts[1] : 'home';  

  let path = ""; // Initialize an empty path
  // Determine the directory based on the lang parameter
  if (lang === "en" || lang === "uk") {
    // Construct the static path based on lang and page
    path = `../data/seo/${lang}/${page}.json`;
  } else {
    console.error(`Unsupported language: ${lang}`);
    return null; // Return null for unsupported languages
  }

  try {
    // Dynamically import the JSON file and return its default export
    const data = await import(/* webpackIgnore: true */ path);
    return data.default; // Return the default export
  } catch (error) {
    console.error(`Error loading SEO data for ${lang}/${page}:`, error);
    return null; // Return null if the file is not found or there's an error
  }
}
