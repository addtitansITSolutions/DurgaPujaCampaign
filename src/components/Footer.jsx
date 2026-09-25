import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  X,
  FileText,
  RotateCcw,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const [activePolicy, setActivePolicy] = useState(null);

  const togglePolicy = (policy) => {
    setActivePolicy((current) =>
      current === policy ? null : policy
    );
  };

  return (
    <footer className="border-t border-white/10 bg-[#160104] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_1.3fr_0.8fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-base font-bold">
                DP
              </div>

              <div>
                <p className="font-display text-xl font-bold">
                  {t("footer.brand")}
                </p>

                <p className="mt-0.5 text-xs uppercase tracking-[0.25em] text-white/40">
                  {t("footer.year")}
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/60">
              {t("footer.description")}
            </p>
          </div>


          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f28a24]">
              {t("footer.contactTitle")}
            </p>

            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              We're here to help.
            </h3>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {/* Email */}
              <a
                href="mailto:info@example.com"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#f28a24]/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f28a24]/10 text-[#f28a24]">
                  <Mail size={19} />
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/35">
                  {t("footer.emailLabel")}
                </p>

                <p className="mt-1 break-all text-base font-semibold text-white/85 transition group-hover:text-white">
                  info@example.com
                </p>
              </a>


              {/* Phone */}
              <a
                href="tel:+919999999999"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#f28a24]/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f28a24]/10 text-[#f28a24]">
                  <Phone size={19} />
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/35">
                  {t("footer.phoneLabel")}
                </p>

                <p className="mt-1 text-base font-semibold text-white/85 transition group-hover:text-white">
                  +91 99999 99999
                </p>
              </a>

            </div>
          </div>


          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f28a24]">
              {t("footer.legalTitle")}
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <button
                type="button"
                onClick={() => togglePolicy("terms")}
                className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <FileText
                  size={17}
                  className="shrink-0 text-white/45 transition group-hover:text-[#f28a24]"
                />

                <span className="text-base text-white/65 transition group-hover:text-white">
                  {t("footer.terms")}
                </span>
              </button>


              <button
                type="button"
                onClick={() => togglePolicy("refund")}
                className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <RotateCcw
                  size={17}
                  className="shrink-0 text-white/45 transition group-hover:text-[#f28a24]"
                />

                <span className="text-base text-white/65 transition group-hover:text-white">
                  {t("footer.refund")}
                </span>
              </button>

            </div>
          </div>

        </div>


        {/* Expandable Policy */}
        <AnimatePresence initial={false}>
          {activePolicy && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: 48,
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setActivePolicy(null)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/50 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>


                <div className="pr-12">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f28a24]">
                    {activePolicy === "terms"
                      ? t("footer.terms")
                      : t("footer.refund")}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {activePolicy === "terms"
                      ? t("footer.termsTitle")
                      : t("footer.refundTitle")}
                  </h3>

                  <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-white/60 sm:text-base">
                    {activePolicy === "terms" ? (
                      <>
                        <p>
                          {t("footer.termsContent.intro")}
                        </p>

                        <p>
                          {t("footer.termsContent.pass")}
                        </p>

                        <p>
                          {t("footer.termsContent.confirmation")}
                        </p>

                        <p>
                          {t("footer.termsContent.organizer")}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          {t("footer.refundContent.intro")}
                        </p>

                        <p>
                          {t("footer.refundContent.cancellation")}
                        </p>

                        <p>
                          {t("footer.refundContent.refund")}
                        </p>

                        <p>
                          {t("footer.refundContent.contact")}
                        </p>
                      </>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Important Information */}
        <div className="mt-12 border-t border-white/10 pt-8">

          <h3 className="text-sm font-semibold text-white">
            {t("footer.disclaimerTitle")}
          </h3>

          <p className="mt-3 max-w-5xl text-sm leading-7 text-white/50 sm:text-[15px]">
            {t("footer.disclaimer")}
          </p>

        </div>


        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">

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