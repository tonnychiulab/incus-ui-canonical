import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

void i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "zh-TW"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: { loadPath: "/ui/locales/{{lng}}/{{ns}}.json" },
    interpolation: { escapeValue: false },
  });

export default i18n;