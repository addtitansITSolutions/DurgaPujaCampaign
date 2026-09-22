import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <h1 className="text-xl font-bold">
        {t("header.title")}
      </h1>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">
          {t("header.language")}:
        </span>

        <button
          onClick={() => changeLanguage("en")}
          className={`rounded px-3 py-1 text-sm ${
            i18n.language === "en"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          English
        </button>

        <button
          onClick={() => changeLanguage("hi")}
          className={`rounded px-3 py-1 text-sm ${
            i18n.language === "hi"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          हिन्दी
        </button>
      </div>
    </header>
  );
}

export default Header;