import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutEvent() {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
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
      id="about-event"
      className="relative w-full overflow-hidden bg-[#120601] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >

      {/* Soft red glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#8d171d]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* --------------------------------
            ABOUT EVENT
        -------------------------------- */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f28a24] sm:text-xs"
          >
            {t("about.eventEyebrow")}
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.045em]"
          >
            {t("about.eventTitle")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8"
          >
            {t("about.eventDescription")}
          </motion.p>


          {/* --------------------------------
              EVENT INFORMATION
          -------------------------------- */}

          <motion.div
            variants={itemVariants}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >

            {/* Date */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 sm:px-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f28a24]/25 bg-[#f28a24]/10 text-[#ffae61]">
                <CalendarDays size={19} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  {t("about.dateLabel")}
                </p>

                <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {t("hero.date")}
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 sm:px-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f28a24]/25 bg-[#f28a24]/10 text-[#ffae61]">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  {t("about.locationLabel")}
                </p>

                <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {t("hero.location")}
                </p>
              </div>

            </div>

          </motion.div>


          {/* --------------------------------
              DIVIDER
          -------------------------------- */}

          <motion.div
            variants={itemVariants}
            className="my-16 h-px w-full bg-white/10 sm:my-20"
          />


          {/* --------------------------------
              ABOUT ORGANIZER
          -------------------------------- */}

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* Left */}
            <motion.div variants={itemVariants}>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f28a24] sm:text-xs">
                {t("about.usEyebrow")}
              </p>

              <h3 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                {t("about.usTitle")}
              </h3>

            </motion.div>


            {/* Right */}
            <motion.div variants={itemVariants}>

              <p className="max-w-2xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">
                {t("about.usDescription")}
              </p>


              {/* Trust points */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">

                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#f28a24]"
                  />

                  <p className="text-sm leading-6 text-white/75">
                    {t("about.pointOne")}
                  </p>
                </div>


                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#f28a24]"
                  />

                  <p className="text-sm leading-6 text-white/75">
                    {t("about.pointTwo")}
                  </p>
                </div>


                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#f28a24]"
                  />

                  <p className="text-sm leading-6 text-white/75">
                    {t("about.pointThree")}
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutEvent;