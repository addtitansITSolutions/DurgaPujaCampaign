import { useState } from "react";
import { useTranslation } from "react-i18next";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzg6v9gWj0NLCGRj8YWmUmR9wqQwRsW-Ey2kj2XOSJoF856I5fGepwzljsdvGeWiCxu/exec";

function RequirementFormAppScript() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    adults: "",
    children: "",
    passType: "",
    date: "",
    additional: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const cleanMobile = formData.mobile.replace(/\D/g, "");

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.adults ||
      !formData.passType ||
      !formData.date
    ) {
      setError(t("form.required"));
      return;
    }

    if (cleanMobile.length !== 10) {
      setError(t("form.invalidMobile"));
      return;
    }

    setIsSubmitting(true);

    const language =
      i18n.language === "hi" ? "Hindi" : "English";

    const passType =
      formData.passType === "regular"
        ? t("form.regular")
        : t("form.vip");

    const submissionData = {
      name: formData.name,
      mobile: cleanMobile,
      adults: formData.adults,
      children: formData.children || "0",
      passType: passType,
      date: formData.date,
      additional: formData.additional || "",
      language: language,
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSuccess(t("form.success"));

      setFormData({
        name: "",
        mobile: "",
        adults: "",
        children: "",
        passType: "",
        date: "",
        additional: "",
      });

    } catch (error) {
      console.error("Form submission error:", error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-16 rounded-lg bg-white p-8 shadow">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          {t("form.title")}
        </h2>

        <p className="mt-2 text-gray-600">
          {t("form.subtitle")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t("form.name")}
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("form.namePlaceholder")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            autoComplete="name"
            required
          />
        </div>

        {/* Mobile */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t("form.mobile")}
          </label>

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder={t("form.mobilePlaceholder")}
            maxLength="10"
            inputMode="numeric"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            autoComplete="tel"
            required
          />
        </div>

        {/* Adults / Children */}

        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              {t("form.adults")}
            </label>

            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              {t("form.children")}
            </label>

            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

        </div>

        {/* Pass Type */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t("form.passType")}
          </label>

          <select
            name="passType"
            value={formData.passType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"
            required
          >
            <option value="">
              {t("form.selectPass")}
            </option>

            <option value="regular">
              {t("form.regular")}
            </option>

            <option value="vip">
              {t("form.vip")}
            </option>
          </select>
        </div>

        {/* Date */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t("form.date")}
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date()
              .toISOString()
              .split("T")[0]}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            required
          />
        </div>

        {/* Additional Requirements */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t("form.additional")}
          </label>

          <textarea
            name="additional"
            value={formData.additional}
            onChange={handleChange}
            placeholder={t(
              "form.additionalPlaceholder"
            )}
            rows="4"
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        {/* Error */}

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        {/* Success */}

        {success && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </p>
        )}

        {/* Submit */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? t("form.submitting")
            : t("form.submit")}
        </button>

      </form>
    </section>
  );
}

export default RequirementFormAppScript;