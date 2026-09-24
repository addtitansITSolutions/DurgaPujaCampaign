import { useTranslation } from "react-i18next";
import { ShieldCheck, Mail, Phone } from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-[#160104] text-white">

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold">
                DP
              </div>

              <div>
                <p className="font-display text-lg font-bold">
                  {t("footer.brand")}
                </p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {t("footer.year")}
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              {t("footer.description")}
            </p>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              {t("footer.contactTitle")}
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">

                <Mail
                  size={17}
                  className="mt-0.5 text-[#f28a24]"
                />

                <div>
                  <p className="text-xs text-white/40">
                    {t("footer.emailLabel")}
                  </p>

                  <a
                    href="mailto:info@example.com"
                    className="mt-1 block text-sm text-white/75 transition hover:text-white"
                  >
                    info@example.com
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={17}
                  className="mt-0.5 text-[#f28a24]"
                />

                <div>
                  <p className="text-xs text-white/40">
                    {t("footer.phoneLabel")}
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="mt-1 block text-sm text-white/75 transition hover:text-white"
                  >
                    +91 99999 99999
                  </a>
                </div>

              </div>

            </div>

          </div>


          {/* Legal */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              {t("footer.legalTitle")}
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="/privacy-policy"
                className="text-sm text-white/55 transition hover:text-white"
              >
                {t("footer.privacy")}
              </a>

              <a
                href="/terms"
                className="text-sm text-white/55 transition hover:text-white"
              >
                {t("footer.terms")}
              </a>

              <a
                href="/refund-policy"
                className="text-sm text-white/55 transition hover:text-white"
              >
                {t("footer.refund")}
              </a>

            </div>

          </div>

        </div>


        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <div className="flex gap-3">

            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-[#f28a24]"
            />

            <div>

              <h3 className="text-sm font-semibold text-white">
                {t("footer.disclaimerTitle")}
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/50">
                {t("footer.disclaimer")}
              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            {t("footer.copyright")}
          </p>

          <p>
            {t("footer.rights")}
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;