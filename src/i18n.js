import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/eng/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
import tr from "./locales/tr/translation.json";
import arabic from "./locales/arabic/translation.json";
import deutsch from "./locales/deutsch/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    ru: { translation: ru },
    tr: { translation: tr },
    arabic: { translation: arabic },
    deutsch: { translation: deutsch},

  },
  lng: localStorage.getItem("language") || "uz",
  fallbackLng: "uz",
});

export default i18n;
