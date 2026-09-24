import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const scrollToPasses = () => {
    const section = document.getElementById("passes");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
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
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#280204] text-white">

      {/* Background Video */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 1.2,
            ease: "easeOut",
          },
        }}
      >
        {/* Mobile */}
        <source
          src="/videos/mobileportrait.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        {/* Desktop */}
        <source
          src="/videos/mobileportrait.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
      </motion.video>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Red Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(196,55,20,0.38),transparent_48%),linear-gradient(180deg,rgba(20,0,2,0.55)_0%,rgba(91,5,8,0.12)_45%,rgba(20,0,2,0.82)_100%)]" />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] w-full items-end md:items-start  px-5 pb-10 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">

        <div className="w-full">

          <div className="mx-auto max-w-7xl">

            <motion.div
              className="max-w-xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >

              {/* Eyebrow */}
              {/* <motion.div
                variants={itemVariants}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#f28a24]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ffb45d] sm:text-xs">
                  {t("hero.eyebrow")}
                </p>
              </motion.div> */}

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-[clamp(2.7rem,12vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white"
              >
                {t("hero.title")}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-md text-base leading-7 text-white/75 sm:text-lg"
              >
                {t("hero.description")}
              </motion.p>

              {/* Date / Location */}
              <motion.div
                variants={itemVariants}
                className="mt-7 flex flex-wrap gap-3"
              >
                <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-sm text-white/90 backdrop-blur-md">
                  📅 {t("hero.date")}
                </div>

                <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-sm text-white/90 backdrop-blur-md">
                  📍 {t("hero.location")}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.button
                type="button"
                variants={itemVariants}
                onClick={scrollToPasses}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 16px 45px rgba(242, 138, 36, 0.4)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8 w-full rounded-full bg-[#f28a24] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(242,138,36,0.3)] sm:w-auto"
              >
                {t("hero.button")}
              </motion.button>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Transition */}
      <motion.div
        className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#fff8ef] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
      />

    </section>
  );
}

export default Hero;