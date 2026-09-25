import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gift,
  Sparkles,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    key: "incensestick",
    image: "/nira/incense_stick.jpeg",
  },
  {
    key: "dhoopCones",
    image: "/nira/dhoop-cone.jpeg",
  },
  {
    key: "dhoopSticks",
    image: "/nira/dhoop_sticks.png",
  },
  {
    key: "SambraniCup",
    image: "/nira/SambraniCup.jpeg",
  },
  {
    key: "FragranceOil",
    image: "/nira/FragranceOil.jpeg",
  },
  
];

function NiraSponsor() {
  const { t } = useTranslation();

  const scrollToPasses = () => {
    const passes = document.getElementById("passes");

    if (passes) {
      passes.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4eadb] px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#d8a34b]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#8f321d]/10 blur-[110px]" />


      <div className="relative mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[26px] border border-[#6d311d]/10 bg-[#fffaf3] shadow-[0_20px_70px_rgba(72,35,18,0.08)]">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">


            {/* =====================================================
                LEFT — NIRA OFFER
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
            >

              {/* Sponsored */}
              <div className="flex items-center gap-2">

                <Sparkles
                  size={14}
                  className="text-[#a56622]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b5a2b]">
                  {t("nira.sponsored")}
                </span>

              </div>


              {/* Logo */}
              <div className="mt-5 h-9 sm:h-10">
                <img
                  src="/nira/nira.png"
                  alt="NIRA Fragrance"
                  className="h-full w-auto max-w-[180px] object-contain object-left"
                />
              </div>


              {/* Heading */}
              <h2 className="mt-5 max-w-md font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#2a110b]">
                {t("nira.title")}
              </h2>


              {/* Description */}
              <p className="mt-4 max-w-md text-sm leading-6 text-[#2a110b]/55 sm:text-base sm:leading-7">
                {t("nira.description")}
              </p>


              {/* Discount */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="mt-6 flex w-full max-w-md items-center gap-4 rounded-2xl border border-[#c9903d]/30 bg-[#fff4d9] p-4"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8f321d] text-white">
                  <Gift size={20} />
                </div>

                <div>
                  <p className="font-display text-xl font-bold text-[#8f321d] sm:text-2xl">
                    {t("nira.discount")}
                  </p>

                  <p className="mt-0.5 text-xs leading-5 font-medium text-[#2a110b]/55">
                    {t("nira.discountDescription")}
                  </p>
                </div>

              </motion.div>


              {/* Stall */}
              <div className="mt-5 flex items-center gap-2 text-xs leading-5 text-[#2a110b]/50">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a56622]" />

                <span>
                  {t("nira.stall")}
                </span>
              </div>


              {/* CTA */}
              <button
                type="button"
                onClick={scrollToPasses}
                className="mt-6 flex w-fit items-center gap-2 rounded-full bg-[#2a110b] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#8f321d] hover:shadow-[0_10px_30px_rgba(143,50,29,0.2)]"
              >
                {t("nira.button")}

                <ArrowUpRight size={15} />
              </button>

            </motion.div>


            {/* =====================================================
                RIGHT — PRODUCTS
            ====================================================== */}

            <div className="min-w-0 border-t border-[#6d311d]/10 bg-[#efe0ca] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-2">

              {/* Product heading */}
              <div className="mb-5 flex items-end justify-between gap-4">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8b5a2b]">
                    {t("nira.productsEyebrow")}
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-[#2a110b] sm:text-2xl">
                    {t("nira.productsTitle")}
                  </h3>
                </div>

                <p className="hidden text-xs text-[#2a110b]/40 sm:block">
                  {t("nira.productsHint")}
                </p>

              </div>


              {/* =================================================
                  MOBILE / TABLET CAROUSEL
              ================================================== */}

              <div className="lg:hidden">

                <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1.15}
                  spaceBetween={12}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="nira-mobile-swiper !pb-10"
                >

                  {products.map((product, index) => (
                    <SwiperSlide key={product.key}>

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="overflow-hidden rounded-2xl"
                      >

                        {/* Image */}
                        <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-[#e3d0b5]">

                          <img
                            src={product.image}
                            alt={t(`nira.products.${product.key}`)}
                            className="h-full w-full object-cover p-0 rounded-xl p-1"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20" />

                        </div>


                        {/* Product info */}
                        <div className="mt-3 px-1">

                          <p className="text-base font-semibold text-[#2a110b]">
                            {t(`nira.products.${product.key}`)}
                          </p>

                          <div className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#a56622]">
                            <span>
                              {t("nira.discountShort")}
                            </span>

                            <ArrowUpRight size={11} />
                          </div>

                        </div>

                      </motion.div>

                    </SwiperSlide>
                  ))}

                </Swiper>

              </div>


              {/* =================================================
                  DESKTOP PRODUCT GRID
              ================================================== */}

              <div className="hidden gap-3 lg:grid lg:grid-cols-3">

                {products.map((product, index) => (
                  <motion.div
                    key={product.key}
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
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group"
                  >

                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e3d0b5]">

                      <img
                        src={product.image}
                        alt={t(`nira.products.${product.key}`)}
                        className="h-full w-full object-cover p-2 transition-transform duration-700 ease-out group-hover:scale-105 rounded-3xl"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20" />

                    </div>


                    <div className="mt-3">

                      <p className="text-sm font-semibold text-[#2a110b]">
                        {t(`nira.products.${product.key}`)}
                      </p>

                      <div className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#a56622]">
                        <span>
                          {t("nira.discountShort")}
                        </span>

                        <ArrowUpRight size={11} />
                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Swiper pagination styling */}
      <style>
        {`
          .nira-mobile-swiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            background: #8f321d;
            opacity: 0.25;
          }

          .nira-mobile-swiper .swiper-pagination-bullet-active {
            width: 18px;
            border-radius: 999px;
            opacity: 1;
          }
        `}
      </style>

    </section>
  );
}

export default NiraSponsor;