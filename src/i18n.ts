import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: import.meta.env.DEV,
        fallbackLng: "ru",
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "i18nextLng",
        },
        interpolation: {
            escapeValue: false,
        },
        saveMissing: true,
        missingKeyHandler: (_lng, _ns, key, fallbackValue) => {
            console.log(`[i18n] Отсутствует ключ: ${key}. Значение по умолчанию: ${fallbackValue}`);
        },
    });

export default i18n;