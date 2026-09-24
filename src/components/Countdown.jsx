import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Countdown() {
  const { t } = useTranslation();

  /*
    IMPORTANT:
    Replace this with your actual event start date/time.

    Example:
    "2026-10-17T00:00:00"
  */
  const EVENT_DATE = "2026-10-17T00:00:00";

  const calculateTimeLeft = () => {
    const difference =
      new Date(EVENT_DATE).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: timeLeft.days,
      label: t("countdown.days"),
    },
    {
      value: timeLeft.hours,
      label: t("countdown.hours"),
    },
    {
      value: timeLeft.minutes,
      label: t("countdown.minutes"),
    },
    {
      value: timeLeft.seconds,
      label: t("countdown.seconds"),
    },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full overflow-hidden bg-[#210305] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/durga-puja-crpark-guide.webp')",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#300205]/75" />

      {/* Red atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,35,35,0.3),transparent_55%)]" />

       {/* Bottom fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#100506] to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#100506] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">

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
          className="text-center"
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#f28a24] sm:text-xs">
            {t("countdown.eyebrow")}
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            {t("countdown.title")}
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55 sm:text-base">
            {t("countdown.description")}
          </p>

        </motion.div>


        {/* Countdown */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4"
        >

          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 0.8,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.08,
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 px-4 py-5 text-center shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-md sm:rounded-3xl sm:px-5 sm:py-7"
            >

              {/* Orange top line */}
              <div className="absolute left-1/2 top-0 h-[2px] w-12 -translate-x-1/2 bg-[#f28a24]" />

              <motion.div
                key={item.value}
                initial={{
                  opacity: 0.5,
                  y: -5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
              >
                {String(item.value).padStart(2, "0")}
              </motion.div>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
                {item.label}
              </p>

            </motion.div>
          ))}

        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          className="mt-9 flex justify-center"
        >

          <button
            type="button"
            onClick={() => {
              const section =
                document.getElementById("passes");

              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="rounded-full bg-[#f28a24] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(242,138,36,0.25)] transition duration-300 hover:bg-[#ff9d3e] active:scale-[0.98]"
          >
            {t("countdown.button")}
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Countdown;