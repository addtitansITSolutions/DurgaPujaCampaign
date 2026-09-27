// import { motion } from "framer-motion";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   MapPin,
//   TrainFront,
//   Zap,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const places = [
//   {
//     key: "kaliMandir",
//     position: "left-[8%] top-[23%]",
//   },
//   {
//     key: "cooperativeGround",
//     position: "left-[25%] top-[8%]",
//   },
//   {
//     key: "melaGround",
//     position: "left-[48%] top-[2%]",
//   },
//   {
//     key: "bBlockGround",
//     position: "right-[7%] top-[20%]",
//   },
//   {
//     key: "gk2Ground",
//     position: "right-[0%] top-[48%]",
//   },
//   {
//     key: "mahilaSamiti",
//     position: "right-[13%] bottom-[8%]",
//   },
//   {
//     key: "eBlockGround",
//     position: "left-[45%] bottom-[0%]",
//   },
//   {
//     key: "dBlockGround",
//     position: "left-[18%] bottom-[10%]",
//   },
//   {
//     key: "s2BlockGround",
//     position: "left-[0%] top-[50%]",
//   },
// ];

// function EventRoute() {
//   const { t } = useTranslation();

//   return (
//     <section
//       id="event-route"
//       className="relative w-full overflow-hidden bg-[#fff8ef] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
//     >
//       {/* Background atmosphere */}
//       <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#f28a24]/10 blur-[130px]" />

//       <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#7d1115]/10 blur-[140px]" />

//       <div className="relative mx-auto max-w-full">

//         {/* Heading */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="max-w-full"
//         >
//           {/* <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c85d13]">
//             {t("route.eyebrow")}
//           </p> */}

//           <h2 className="mt-4 font-display text-center text-[clamp(2.3rem,7vw,5rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#170607]">
//             {t("route.title")}
//           </h2>

//           <p className="mt-5 max-w-full text-center text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
//             <span className="inline-block max-w-2xl">{t("route.description")}</span>
//           </p>
//         </motion.div>


//         {/* Main Layout */}
//         <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">


//           {/* =====================================================
//               LEFT — CR PARK IMAGE
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -45,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="group relative min-h-[560px] overflow-hidden rounded-[12px] bg-[#160104] sm:min-h-[650px]"
//           >
//             {/* Replace this path with your actual image */}
//             <img
//               src="/images/map.jpeg"
//               alt="CR Park"
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
//             />

//             {/* Image fade */}
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-[#100304] via-[#100304]/35 to-transparent" /> */}

//             {/* <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">

//               <div className="flex items-center gap-2 text-[#ffad5c]">
//                 <MapPin size={17} />

//                 <span className="text-xs font-bold uppercase tracking-[0.25em]">
//                   {t("route.locationLabel")}
//                 </span>
//               </div>

//               <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
//                 {t("route.location")}
//               </h3>

//               <p className="mt-3 max-w-md text-sm leading-6 text-white/60 sm:text-base">
//                 {t("route.locationDescription")}
//               </p>



//               <div className="mt-7 flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-xl sm:max-w-sm">

//                 <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
//                   <img
//                     src="/images/QR.jpeg"
//                     alt="CR Park contact QR"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-white">
//                     {t("route.qrTitle")}
//                   </p>

//                   <p className="mt-1 text-xs leading-5 text-white/50">
//                     {t("route.qrDescription")}
//                   </p>
//                 </div>

//               </div>

//             </div> */}
//           </motion.div>


//           {/* =====================================================
//               RIGHT — TRANSPORT / ROUTE
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 45,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 0.9,
//               delay: 0.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative overflow-hidden rounded-[32px] border border-[#170607]/10 bg-white p-5 sm:p-8 lg:p-10"
//           >

//             {/* Pickup */}
//             <div className="relative z-20 rounded-2xl border border-[#f28a24]/20 bg-[#fff8ef] p-5 sm:p-6">

//               <div className="flex items-start gap-4">

//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f28a24] text-white shadow-[0_10px_30px_rgba(242,138,36,0.25)]">
//                   <TrainFront size={20} />
//                 </div>

//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c85d13]">
//                     {t("route.pickupEyebrow")}
//                   </p>

//                   <h3 className="mt-2 font-display text-xl font-bold text-[#170607] sm:text-2xl">
//                     {t("route.pickupTitle")}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-black/55">
//                     {t("route.pickupDescription")}
//                   </p>
//                 </div>

//               </div>


//               {/* Metro stations */}
//               <div className="mt-5 grid gap-2 sm:grid-cols-2">

//                 <div className="rounded-xl border border-black/5 bg-white px-4 py-3">
//                   <p className="text-sm font-semibold text-[#170607]">
//                     {t("route.metroOne")}
//                   </p>

//                   <p className="mt-1 text-xs text-black/45">
//                     {t("route.metroOneLine")}
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-black/5 bg-white px-4 py-3">
//                   <p className="text-sm font-semibold text-[#170607]">
//                     {t("route.metroTwo")}
//                   </p>

//                   <p className="mt-1 text-xs text-black/45">
//                     {t("route.metroTwoLine")}
//                   </p>
//                 </div>

//               </div>

//             </div>


//             {/* Route title */}
//             <div className="relative z-10 mt-10">

//               <div className="flex items-end justify-between gap-4">

//                 <div>
//                   {/* <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c85d13]">
//                     {t("route.exploreEyebrow")}
//                   </p> */}

//                   <h3 className="mt-2 font-display text-2xl font-bold text-[#170607] sm:text-3xl">
//                     {t("route.exploreTitle")}
//                   </h3>
//                 </div>

//                 <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 sm:flex">
//                   <ArrowDown size={17} />
//                 </div>

//               </div>

//             </div>


//             {/* =================================================
//                 CIRCULAR ROUTE
//             ================================================== */}

//             <div className="relative mx-auto mt-5 aspect-square w-full max-w-[560px]">


//               {/* Outer ring */}
//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-[8%] rounded-full border border-dashed border-[#7d1115]/15"
//               />


//               {/* Inner ring */}
//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 24,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-[22%] rounded-full border border-[#f28a24]/20"
//               />


//               {/* Route glow */}
//               <div className="absolute inset-[30%] rounded-full bg-[#f28a24]/10 blur-[45px]" />


//               {/* Animated route path */}
//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 18,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-[14%] rounded-full border border-[#f28a24]/30"
//               >
//                 <motion.div
//                   animate={{
//                     opacity: [0.2, 1, 0.2],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute -right-1.5 top-1/2 h-3 w-3 rounded-full bg-[#f28a24] shadow-[0_0_20px_rgba(242,138,36,0.8)]"
//                 />
//               </motion.div>


//               {/* Center */}
//               <motion.div
//                 initial={{
//                   scale: 0.8,
//                   opacity: 0,
//                 }}
//                 whileInView={{
//                   scale: 1,
//                   opacity: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.3,
//                 }}
//                 className="absolute left-1/2 top-1/2 z-20 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#170607] text-center shadow-[0_25px_70px_rgba(23,6,7,0.3)] sm:h-[155px] sm:w-[155px]"
//               >

//                 <motion.div
//                   animate={{
//                     y: [0, -4, 0],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="text-[#f28a24]"
//                 >
//                   <Zap size={22} fill="currentColor" />
//                 </motion.div>

//                 <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">
//                   {t("route.centerEyebrow")}
//                 </p>

//                 <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
//                   {t("route.centerTitle")}
//                 </p>

//                 <p className="mt-1 text-[10px] uppercase tracking-wider text-[#ffad5c]">
//                   {t("route.centerSubtitle")}
//                 </p>

//               </motion.div>


//               {/* Place Nodes */}
//               {places.map((place, index) => (
//                 <motion.div
//                   key={place.key}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.7,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.3,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                     delay: 0.35 + index * 0.06,
//                   }}
//                   className={`absolute ${place.position} z-10 max-w-[115px]`}
//                 >
//                   <motion.div
//                     animate={{
//                       y: [0, -3, 0],
//                     }}
//                     transition={{
//                       duration: 3 + index * 0.15,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: index * 0.2,
//                     }}
//                     className="flex items-center gap-1.5"
//                   >

//                     <span className="h-2 w-2 shrink-0 rounded-full bg-[#f28a24] shadow-[0_0_12px_rgba(242,138,36,0.45)]" />

//                     <span className="text-[10px] font-semibold leading-tight text-[#170607]/65 sm:text-xs">
//                       {t(`route.places.${place.key}`)}
//                     </span>

//                   </motion.div>
//                 </motion.div>
//               ))}


//               {/* Direction Arrow */}
//               <motion.div
//                 animate={{
//                   x: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-[17%] right-[21%] z-20 hidden items-center gap-1.5 text-[#c85d13] sm:flex"
//               >
//                 <span className="text-[9px] font-bold uppercase tracking-wider">
//                   {t("route.routeLabel")}
//                 </span>

//                 <ArrowUpRight size={15} />
//               </motion.div>

//             </div>


//             {/* Bottom transport strip */}
//             <div className="relative z-20 mt-3 flex items-center justify-center gap-2 rounded-full border border-[#170607]/10 bg-[#fff8ef] px-4 py-3 text-center">

//               <Zap
//                 size={15}
//                 className="text-[#f28a24]"
//                 fill="currentColor"
//               />

//               <span className="text-xs font-semibold text-[#170607]/65 sm:text-sm">
//                 {t("route.transport")}
//               </span>

//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default EventRoute;

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  TrainFront,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const places = [
  "kaliMandir",
  "cooperativeGround",
  "melaGround",
  "bBlockGround",
  "gk2Ground",
  "mahilaSamiti",
  "eBlockGround",
  "dBlockGround",
  "s2BlockGround",
];

function EventRoute() {
  const { t } = useTranslation();

  return (
    <section
      id="event-route"
      className="w-full bg-[#fff8ef] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a33b20]">
            {t("route.eyebrow")}
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-[#170607] sm:text-4xl lg:text-5xl">
            {t("route.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-black/60 sm:text-base">
            {t("route.description")}
          </p>
        </motion.div>

        {/* Full-width layout */}
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Portrait image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl bg-[#f0e4d4] p-3 sm:min-h-[520px] sm:p-5 lg:min-h-[680px]"
          >
            <img
              src="/images/map.jpeg"
              alt="CR Park"
              className="h-full max-h-[680px] w-full object-contain"
            />
          </motion.div>

          {/* Pickup and route */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            {/* Pickup */}
            <div className="border-b border-[#170607]/15 pb-7">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f5e4ce] text-[#9b351d]">
                  <TrainFront size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a33b20]">
                    {t("route.pickupEyebrow")}
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-[#170607] sm:text-2xl">
                    {t("route.pickupTitle")}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {t("route.pickupDescription")}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[ 
                  {
                    name: t("route.metroOne"),
                    line: t("route.metroOneLine"),
                  },
                  {
                    name: t("route.metroTwo"),
                    line: t("route.metroTwoLine"),
                  },
                ].map((station) => (
                  <div
                    key={station.name}
                    className="flex items-start gap-3 rounded-xl border border-[#170607]/10 bg-white p-4"
                  >
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-[#a33b20]"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-5 text-[#170607]">
                        {station.name}
                      </p>
                      <p className="mt-1 text-xs text-black/50">
                        {station.line}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted route */}
            <div className="mt-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a33b20]">
                    {t("route.exploreEyebrow")}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[#170607] sm:text-3xl">
                    {t("route.exploreTitle")}
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#8f1d22] px-4 py-2 text-white">
                  <Zap size={16} fill="currentColor" />
                  <span className="text-xs font-bold tracking-wide">
                    {t("route.centerTitle")}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-black/55">
                {t("route.transport")}
              </p>

              {/* Route stops */}
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#8f1d22]/20 bg-white">
                <div className="flex items-center gap-3 bg-[#8f1d22] px-4 py-4 text-white sm:px-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {t("route.routeLabel")}
                    </p>
                    <p className="mt-0.5 font-display text-lg font-bold">
                      {t("route.centerTitle")} · {t("route.centerSubtitle")}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto shrink-0" size={20} />
                </div>

                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  {places.map((place, index) => (
                    <div
                      key={place}
                      className={`flex min-w-0 items-center gap-3 border-b border-[#170607]/10 px-4 py-3.5 sm:px-5 ${
                        index % 2 === 0 ? "sm:border-r" : ""
                      }`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f8e9d7] text-xs font-bold text-[#8f1d22]">
                        {index + 1}
                      </span>

                      <span className="text-sm font-semibold text-[#170607]">
                        {t(`route.places.${place}`)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-[#fff5e8] px-4 py-3 text-xs font-medium text-[#8f1d22] sm:px-5">
                  <Zap size={15} fill="currentColor" />
                  {t("route.transport")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EventRoute;
