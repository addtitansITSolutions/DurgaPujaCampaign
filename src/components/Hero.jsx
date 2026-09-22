import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold">
        {t("hero.title")}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        {t("hero.description")}
      </p>

      <button className="mt-8 rounded bg-black px-6 py-3 text-white">
        {t("hero.button")}
      </button>
    </section>
  );
}

export default Hero;