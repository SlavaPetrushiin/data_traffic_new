import { useTranslation } from "react-i18next";
import "./App.css";

type Languages = "ru" | "en" | "tr";
type LanguagesInfo = {
  nativeName: string;
}

const languages: Record<Languages, LanguagesInfo> = {
  ru: { nativeName: "Русский " },
  en: { nativeName: "Английский" },
  tr: { nativeName: "Турецкий" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div>
        {Object.keys(languages).map((language) => (
          <button key={language} style={{ fontWeight: i18n.resolvedLanguage === language ? "bold" : "normal" }} type="submit" onClick={() => i18n.changeLanguage(language)}>
            {languages[language as Languages].nativeName}
          </button>
        ))}
      </div>
      <ul>
        <li> {t("Отчёты.Количество посетителей", "Количество посетителей")}</li>
        <li>{t("Отчёты.Динамика посещаемости")}</li>
        <li>{t("Отчёты.Часы пик")}</li>
        <li>{t("Отчёты.Погода", "Погода")}</li>
        <li>{t("Отчёты.Индекс", "Индекс")}</li>
        <li>{t("Меню.Аналитика", "Аналитика")}</li>
        <li>{t("Меню.Индекс")}</li>
      </ul>
    </div>
  );
}

export default App;
