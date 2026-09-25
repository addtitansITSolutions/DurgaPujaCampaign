import { motion } from "framer-motion";
import { Crown, Ticket, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function Pricing({ selectedPass, onSelectPass }) {
  const { t } = useTranslation();

  const scrollToForm = (passType) => {
    onSelectPass(passType);

    const form = document.getElementById("requirement-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="passes"
      className="relative w-full overflow-hidden bg-[#100506] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#7d1115]/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#f28a24]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.32em] text-[#f28a24] sm:text-xs">
            {t("pricing.eyebrow")}
          </p>

          <h2 className="mt-4 font-display text-[clamp(2.2rem,8vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
            {t("pricing.title")}
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/55 sm:text-lg sm:leading-8">
            {t("pricing.description")}
          </p>
        </motion.div>

        {/* Pass Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-2"
        >

          {/* =========================
              VIP ENTRY — 1–3 PEOPLE
          ========================= */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -6,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`group relative overflow-hidden rounded-[24px] border p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 sm:rounded-[28px] sm:p-7 ${
              selectedPass === "vip_1_3"
                ? "border-[#f28a24]/60 bg-[#f28a24]/10"
                : "border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.08]"
            }`}
          >

            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f28a24]/20 bg-[#f28a24]/10 text-[#ffae61] sm:h-12 sm:w-12 sm:rounded-2xl">
              <Ticket
                size={20}
                strokeWidth={1.8}
              />
            </div>

            {/* Content */}
            <div className="mt-5 sm:mt-7">

              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-bold leading-tight sm:text-2xl">
                  {t("pricing.vipEntry")}
                </h3>

                <span className="rounded-full border border-[#f28a24]/25 bg-[#f28a24]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#ffb45d] sm:px-2.5 sm:text-[9px]">
                  VIP
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-white/45 sm:text-sm sm:leading-6">
                {t("pricing.oneToThreePeople")}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-0.5 sm:mt-7">

                <span className="mb-1 text-xs font-medium text-white/40">
                  ₹
                </span>

                <span className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
                  1,000
                </span>

              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => scrollToForm("vip_1_3")}
              className={`mt-5 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-[11px] font-bold transition-all duration-300 sm:mt-8 sm:px-5 sm:py-3.5 sm:text-sm ${
                selectedPass === "vip_1_3"
                  ? "bg-[#f28a24] text-white shadow-[0_10px_35px_rgba(242,138,36,0.25)]"
                  : "border border-white/15 bg-white/[0.05] text-white hover:border-[#f28a24] hover:bg-[#f28a24]"
              }`}
            >
              {t("pricing.selectPass")}

              <ArrowUpRight
                size={14}
                className="hidden sm:block"
              />
            </button>

          </motion.div>

          {/* =========================
              VIP ENTRY — 4–6 PEOPLE
          ========================= */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -6,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`group relative overflow-hidden rounded-[24px] border p-4 shadow-[0_25px_80px_rgba(125,17,21,0.2)] backdrop-blur-xl transition-all duration-300 sm:rounded-[28px] sm:p-7 ${
              selectedPass === "vip_4_6"
                ? "border-[#f28a24]/60 bg-gradient-to-br from-[#7d1115]/50 via-white/[0.07] to-white/[0.03]"
                : "border-[#f28a24]/25 bg-gradient-to-br from-[#7d1115]/40 via-white/[0.055] to-white/[0.03] hover:border-[#f28a24]/45"
            }`}
          >

            {/* Orange glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#f28a24]/20 blur-[70px]" />

            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffae61]/60 to-transparent" />

            {/* Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#f28a24]/20 bg-[#f28a24]/10 text-[#ffae61] sm:h-12 sm:w-12 sm:rounded-2xl">
              <Crown
                size={20}
                strokeWidth={1.8}
              />
            </div>

            {/* Content */}
            <div className="relative mt-5 sm:mt-7">

              <div className="flex items-start justify-between gap-2">

                <h3 className="font-display text-lg font-bold leading-tight sm:text-2xl">
                  {t("pricing.vipEntry")}
                </h3>

                <span className="rounded-full border border-[#f28a24]/25 bg-[#f28a24]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#ffb45d] sm:px-2.5 sm:text-[9px]">
                  VIP
                </span>

              </div>

              <p className="mt-2 text-[11px] leading-5 text-white/50 sm:text-sm sm:leading-6">
                {t("pricing.fourToSixPeople")}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-0.5 sm:mt-7">

                <span className="mb-1 text-xs font-medium text-white/40">
                  ₹
                </span>

                <span className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
                  2,000
                </span>

              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => scrollToForm("vip_4_6")}
              className="relative mt-5 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#f28a24] px-2 py-2.5 text-[11px] font-bold text-white shadow-[0_10px_35px_rgba(242,138,36,0.2)] transition-all duration-300 hover:bg-[#ff9d3e] hover:shadow-[0_15px_45px_rgba(242,138,36,0.3)] sm:mt-8 sm:px-5 sm:py-3.5 sm:text-sm"
            >
              {t("pricing.selectPass")}

              <ArrowUpRight
                size={14}
                className="hidden sm:block"
              />
            </button>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Pricing;