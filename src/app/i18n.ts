import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    lng: localStorage.getItem('i18nextLng') || 'uk',
    // react: {
    //   // Turn off the use of React Suspense
    //   useSuspense: false,
    // },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
