import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold">
        {t("pricing.title")}
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-semibold">
            {t("pricing.adult")}
          </h3>

          <p className="mt-2 text-2xl font-bold">
            ₹500
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-semibold">
            {t("pricing.child")}
          </h3>

          <p className="mt-2 text-2xl font-bold">
            ₹250
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-semibold">
            {t("pricing.vip")}
          </h3>

          <p className="mt-2 text-2xl font-bold">
            ₹1,000
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;