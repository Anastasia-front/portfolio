interface Parameters {
  pathname: string;
  ConstantUkrainian: string;
  ConstantEnglish: string;
}

export const getConstantByLanguage = ({
  pathname,
  ConstantUkrainian,
  ConstantEnglish,
}: Parameters) => {
  const lang = pathname.slice(0, 3);
  return lang === "/uk" ? ConstantUkrainian : ConstantEnglish;
};
