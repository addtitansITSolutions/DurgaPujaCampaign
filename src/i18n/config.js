import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
      bn: {
        translation: bn,
      },
    },

    lng: savedLanguage,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;