import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">

      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="Durga Puja home"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xs font-bold text-white backdrop-blur-md">
            DP
          </div>

          <div className="leading-none">

            <p className="font-display text-sm font-bold tracking-wide text-white">
              DURGA
            </p>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
              PUJA 2026
            </p>

          </div>

        </a>

        {/* Language selector */}
        <div className="flex items-center rounded-full border border-white/20 bg-black/30 p-1 shadow-lg backdrop-blur-md">

          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold transition sm:px-4 sm:py-2 sm:text-xs ${
              i18n.language === "en"
                ? "bg-white text-[#6d0c10]"
                : "text-white/75 hover:text-white"
            }`}
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("hi")}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold transition sm:px-4 sm:py-2 sm:text-xs ${
              i18n.language === "hi"
                ? "bg-white text-[#6d0c10]"
                : "text-white/75 hover:text-white"
            }`}
          >
            हिन्दी
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("bn")}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold transition sm:px-4 sm:py-2 sm:text-xs ${
              i18n.language === "bn"
                ? "bg-white text-[#6d0c10]"
                : "text-white/75 hover:text-white"
            }`}
          >
            বাংলা
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;