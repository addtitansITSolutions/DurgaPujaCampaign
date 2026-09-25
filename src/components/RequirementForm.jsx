// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Minus,
//   Plus,
//   MessageCircle,
//   Send,
//   User,
//   Phone,
//   CalendarDays,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import { PASS_PRICING } from "../config/passPricing";

// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbzg6v9gWj0NLCGRj8YWmUmR9wqQwRsW-Ey2kj2XOSJoF856I5fGepwzljsdvGeWiCxu/exec";

// const WHATSAPP_NUMBER = "917800466039";

// function RequirementForm({ selectedPass, onSelectPass }) {
//   const { t, i18n } = useTranslation();

//   const pricing = PASS_PRICING[selectedPass];

//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     adults: 1,
//     children: 0,
//     date: "",
//     additional: "",
//     website: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const totalPrice = useMemo(() => {
//     return (
//       Number(formData.adults) * pricing.adult +
//       Number(formData.children) * pricing.child
//     );
//   }, [
//     formData.adults,
//     formData.children,
//     pricing,
//   ]);

//   const updateQuantity = (field, amount) => {
//     setFormData((prev) => {
//       const currentValue = Number(prev[field]) || 0;

//       let nextValue = currentValue + amount;

//       if (field === "adults") {
//         nextValue = Math.max(1, Math.min(50, nextValue));
//       }

//       if (field === "children") {
//         nextValue = Math.max(0, Math.min(50, nextValue));
//       }

//       return {
//         ...prev,
//         [field]: nextValue,
//       };
//     });

//     setError("");
//     setSuccess("");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setError("");
//     setSuccess("");
//   };

//   const validateForm = () => {
//     const cleanMobile = formData.mobile.replace(/\D/g, "");

//     if (!formData.name.trim()) {
//       return t("form.required");
//     }

//     if (cleanMobile.length !== 10) {
//       return t("form.invalidMobile");
//     }

//     if (!formData.adults) {
//       return t("form.required");
//     }

//     if (!formData.date) {
//       return t("form.required");
//     }

//     return null;
//   };

//   const getSubmissionData = () => {
//     const language =
//       i18n.language === "hi"
//         ? "Hindi"
//         : "English";

//     return {
//       name: formData.name.trim(),

//       mobile: formData.mobile.replace(/\D/g, ""),

//       passType: selectedPass,

//       adults: Number(formData.adults),

//       children: Number(formData.children),

//       adultPrice: pricing.adult,

//       childPrice: pricing.child,

//       totalPrice,

//       date: formData.date,

//       additional: formData.additional.trim(),

//       language,

//       website: formData.website,
//     };
//   };

//   const handleWhatsApp = () => {
//     const validationError = validateForm();

//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     const data = getSubmissionData();

//     const passName =
//       selectedPass === "vip"
//         ? t("form.vip")
//         : t("form.regular");

//     const message = `
// ${t("form.whatsappGreeting")}

// ${t("form.whatsappPass")}: ${passName}

// ${t("form.name")}: ${data.name}
// ${t("form.mobile")}: ${data.mobile}

// ${t("form.adults")}: ${data.adults}
// ${t("form.children")}: ${data.children}

// ${t("form.date")}: ${data.date}

// ${t("form.total")}: ₹${data.totalPrice.toLocaleString("en-IN")}

// ${data.additional
//   ? `${t("form.additional")}: ${data.additional}`
//   : ""}
//     `.trim();

//     const whatsappUrl =
//       `https://wa.me/${WHATSAPP_NUMBER}?text=` +
//       encodeURIComponent(message);

//     window.open(
//       whatsappUrl,
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     const validationError = validateForm();

//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const submissionData = getSubmissionData();

//       const response = await fetch(
//         GOOGLE_SCRIPT_URL,
//         {
//           method: "POST",
//           body: JSON.stringify(submissionData),
//         }
//       );

//       const result = await response.json();

//       if (!result.success) {
//         throw new Error(
//           result.message || "Submission failed"
//         );
//       }

//       setSuccess(t("form.success"));

//       setFormData({
//         name: "",
//         mobile: "",
//         adults: 1,
//         children: 0,
//         date: "",
//         additional: "",
//         website: "",
//       });

//     } catch (error) {
//       console.error(
//         "Form submission error:",
//         error
//       );

//       setError(t("form.submitError"));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="requirement-form"
//       className="relative w-full overflow-hidden bg-[#100506] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
//     >

//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-[-180px] top-40 h-96 w-96 rounded-full bg-[#7d1115]/20 blur-[120px]" />

//       <div className="pointer-events-none absolute bottom-[-150px] right-[-120px] h-80 w-80 rounded-full bg-[#f28a24]/10 blur-[110px]" />

//       <div className="relative mx-auto max-w-3xl">

//         {/* Heading */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
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
//         >
//           <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f28a24] sm:text-xs">
//             {t("form.eyebrow")}
//           </p>

//           <h2 className="mt-4 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.045em]">
//             {t("form.title")}
//           </h2>

//           <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/55 sm:text-lg">
//             {t("form.subtitle")}
//           </p>
//         </motion.div>


//         {/* Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mt-10"
//         >

//           {/* PASS SWITCH */}
//           <div className="rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">

//             <div className="grid grid-cols-2">

//               <button
//                 type="button"
//                 onClick={() =>
//                   onSelectPass("regular")
//                 }
//                 className={`rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
//                   selectedPass === "regular"
//                     ? "bg-[#f28a24] text-white shadow-[0_8px_30px_rgba(242,138,36,0.2)]"
//                     : "text-white/45 hover:text-white"
//                 }`}
//               >
//                 {t("form.regular")}
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   onSelectPass("vip")
//                 }
//                 className={`rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
//                   selectedPass === "vip"
//                     ? "bg-[#f28a24] text-white shadow-[0_8px_30px_rgba(242,138,36,0.2)]"
//                     : "text-white/45 hover:text-white"
//                 }`}
//               >
//                 {t("form.vip")}
//               </button>

//             </div>

//           </div>


//           {/* PRICE INFO */}
//           <div className="mt-5 grid grid-cols-2 gap-3">

//             <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur-xl">
//               <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
//                 {t("form.adultPrice")}
//               </p>

//               <p className="mt-1 text-lg font-bold">
//                 ₹{pricing.adult.toLocaleString("en-IN")}
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur-xl">
//               <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
//                 {t("form.childPrice")}
//               </p>

//               <p className="mt-1 text-lg font-bold">
//                 ₹{pricing.child.toLocaleString("en-IN")}
//               </p>
//             </div>

//           </div>


//           {/* NAME */}
//           <div className="mt-5">

//             <label className="mb-2 block text-sm font-medium text-white/75">
//               {t("form.name")}
//             </label>

//             <div className="relative">

//               <User
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//               />

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder={t(
//                   "form.namePlaceholder"
//                 )}
//                 autoComplete="name"
//                 className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
//                 required
//               />

//             </div>

//           </div>


//           {/* MOBILE */}
//           <div className="mt-5">

//             <label className="mb-2 block text-sm font-medium text-white/75">
//               {t("form.mobile")}
//             </label>

//             <div className="relative">

//               <Phone
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//               />

//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 placeholder={t(
//                   "form.mobilePlaceholder"
//                 )}
//                 maxLength="10"
//                 inputMode="numeric"
//                 autoComplete="tel"
//                 className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
//                 required
//               />

//             </div>

//           </div>


//           {/* QUANTITY */}
//           <div className="mt-5 grid grid-cols-2 gap-3">

//             {/* Adults */}
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">

//               <p className="text-sm font-semibold">
//                 {t("form.adults")}
//               </p>

//               <p className="mt-1 text-xs text-white/35">
//                 ₹{pricing.adult.toLocaleString("en-IN")} / {t("form.person")}
//               </p>

//               <div className="mt-4 flex items-center justify-between gap-2">

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity("adults", -1)
//                   }
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition hover:bg-white/10 active:scale-95"
//                 >
//                   <Minus size={15} />
//                 </button>

//                 <span className="min-w-6 text-center text-lg font-bold">
//                   {formData.adults}
//                 </span>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity("adults", 1)
//                   }
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f28a24] transition hover:bg-[#ff9d3e] active:scale-95"
//                 >
//                   <Plus size={15} />
//                 </button>

//               </div>

//             </div>


//             {/* Children */}
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">

//               <p className="text-sm font-semibold">
//                 {t("form.children")}
//               </p>

//               <p className="mt-1 text-xs text-white/35">
//                 ₹{pricing.child.toLocaleString("en-IN")} / {t("form.person")}
//               </p>

//               <div className="mt-4 flex items-center justify-between gap-2">

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity("children", -1)
//                   }
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition hover:bg-white/10 active:scale-95"
//                 >
//                   <Minus size={15} />
//                 </button>

//                 <span className="min-w-6 text-center text-lg font-bold">
//                   {formData.children}
//                 </span>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity("children", 1)
//                   }
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f28a24] transition hover:bg-[#ff9d3e] active:scale-95"
//                 >
//                   <Plus size={15} />
//                 </button>

//               </div>

//             </div>

//           </div>


//           {/* DATE */}
//           <div className="mt-5">

//             <label className="mb-2 block text-sm font-medium text-white/75">
//               {t("form.date")}
//             </label>

//             <div className="relative">

//               <CalendarDays
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//               />

//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 min={
//                   new Date()
//                     .toISOString()
//                     .split("T")[0]
//                 }
//                 className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition focus:border-[#f28a24]/50"
//                 required
//               />

//             </div>

//           </div>


//           {/* ADDITIONAL */}
//           <div className="mt-5">

//             <label className="mb-2 block text-sm font-medium text-white/75">
//               {t("form.additional")}
//             </label>

//             <textarea
//               name="additional"
//               value={formData.additional}
//               onChange={handleChange}
//               placeholder={t(
//                 "form.additionalPlaceholder"
//               )}
//               rows="4"
//               maxLength="1000"
//               className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
//             />

//           </div>


//           {/* HONEYPOT */}
//           <input
//             type="text"
//             name="website"
//             value={formData.website}
//             onChange={handleChange}
//             autoComplete="off"
//             tabIndex="-1"
//             className="absolute left-[-9999px] h-0 w-0 opacity-0"
//             aria-hidden="true"
//           />


//           {/* PRICE SUMMARY */}
//           <div className="mt-6 rounded-3xl border border-[#f28a24]/20 bg-[#7d1115]/20 p-5 backdrop-blur-xl">

//             <div className="flex items-center justify-between">

//               <div>
//                 <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
//                   {t("form.total")}
//                 </p>

//                 <p className="mt-1 text-xs text-white/45">
//                   {formData.adults} {t("form.adults")} +{" "}
//                   {formData.children} {t("form.children")}
//                 </p>
//               </div>

//               <p className="font-display text-3xl font-bold">
//                 ₹{totalPrice.toLocaleString("en-IN")}
//               </p>

//             </div>

//           </div>


//           {/* ERROR */}
//           {error && (
//             <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
//               {error}
//             </div>
//           )}


//           {/* SUCCESS */}
//           {success && (
//             <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
//               {success}
//             </div>
//           )}


//           {/* BUTTONS */}
//           <div className="mt-6 grid gap-3 sm:grid-cols-2">

//             {/* WhatsApp */}
//             <button
//               type="button"
//               onClick={handleWhatsApp}
//               className="flex items-center justify-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-4 text-sm font-bold text-green-300 transition hover:bg-green-500/15 active:scale-[0.98]"
//             >
//               <MessageCircle size={18} />

//               {t("form.whatsapp")}
//             </button>


//             {/* Apps Script */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="flex items-center justify-center gap-2 rounded-full bg-[#f28a24] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(242,138,36,0.2)] transition hover:bg-[#ff9d3e] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               <Send size={18} />

//               {isSubmitting
//                 ? t("form.submitting")
//                 : t("form.submit")}
//             </button>

//           </div>

//         </motion.form>

//       </div>
//     </section>
//   );
// }

// export default RequirementForm;
















import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Minus,
  Plus,
  MessageCircle,
  Send,
  User,
  Phone,
  CalendarDays,
  Crown,
  Ticket,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzg6v9gWj0NLCGRj8YWmUmR9wqQwRsW-Ey2kj2XOSJoF856I5fGepwzljsdvGeWiCxu/exec";

const WHATSAPP_NUMBER = "917800466039";

const PASS_OPTIONS = {
  vip_1_3: {
    minPeople: 1,
    maxPeople: 3,
    price: 1000,
  },

  vip_4_6: {
    minPeople: 4,
    maxPeople: 6,
    price: 2000,
  },
};

function RequirementForm({
  selectedPass,
  onSelectPass,
}) {
  const { t, i18n } = useTranslation();

  /*
   * Default to 1–3 people pass
   * if nothing is selected from Home.
   */
  const activePassKey =
    PASS_OPTIONS[selectedPass]
      ? selectedPass
      : "vip_1_3";

  const activePass =
    PASS_OPTIONS[activePassKey];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    passCount: 1,
    date: "",
    additional: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  /*
   * Whenever the pass is changed externally
   * from Pricing/Home, reset pass count to 1.
   *
   * Example:
   * vip_1_3 → vip_4_6
   *
   * becomes:
   * 1 × ₹2,000
   */
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      passCount: 1,
    }));

    setError("");
    setSuccess("");
  }, [activePassKey]);


  /*
   * Total price
   *
   * 1 pass  × ₹1,000 = ₹1,000
   * 2 passes × ₹1,000 = ₹2,000
   *
   * OR
   *
   * 1 pass × ₹2,000 = ₹2,000
   * 2 passes × ₹2,000 = ₹4,000
   */
  const totalPrice =
    formData.passCount * activePass.price;


  /*
   * Change pass from the switch.
   */
  const handlePassChange = (passType) => {
    if (!PASS_OPTIONS[passType]) {
      return;
    }

    onSelectPass(passType);

    setError("");
    setSuccess("");
  };


  /*
   * Increase / decrease number of passes.
   *
   * We allow multiple passes.
   *
   * Maximum can be adjusted later.
   */
  const updatePassCount = (amount) => {
    setFormData((prev) => {
      const current =
        Number(prev.passCount) || 1;

      const next = Math.max(
        1,
        Math.min(50, current + amount)
      );

      return {
        ...prev,
        passCount: next,
      };
    });

    setError("");
    setSuccess("");
  };


  /*
   * Normal input change.
   */
  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };


  /*
   * Validation.
   */
  const validateForm = () => {
    const cleanMobile =
      formData.mobile.replace(/\D/g, "");

    if (!formData.name.trim()) {
      return t("form.required");
    }

    if (cleanMobile.length !== 10) {
      return t("form.invalidMobile");
    }

    if (
      !formData.passCount ||
      Number(formData.passCount) < 1
    ) {
      return t("form.invalidPassCount");
    }

    if (!formData.date) {
      return t("form.required");
    }

    return null;
  };


  /*
   * Get pass name.
   */
  const getPassName = () => {
    if (activePassKey === "vip_4_6") {
      return t("form.vipFourSix");
    }

    return t("form.vipOneThree");
  };


  /*
   * Prepare submission data.
   */
  const getSubmissionData = () => {
    const language = i18n.language === "hi" ? "Hindi" : i18n.language === "bn" ? "Bengali"  : "English";

    return {
      name: formData.name.trim(),

      mobile:
        formData.mobile.replace(
          /\D/g,
          ""
        ),

      passType: activePassKey,

      passName: getPassName(),

      passCount:
        Number(formData.passCount),

      pricePerPass:
        activePass.price,

      totalPrice,

      date: formData.date,

      additional:
        formData.additional.trim(),

      language,

      website:
        formData.website,
    };
  };


  /*
   * WhatsApp.
   */
  const handleWhatsApp = () => {
    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const data =
      getSubmissionData();

    const message = `
${t("form.whatsappGreeting")}

${t("form.whatsappPass")}: ${data.passName} : ${data.passType}

${t("form.passCount")}: ${data.passCount}

${t("form.pricePerPass")}: ₹${data.pricePerPass.toLocaleString(
      "en-IN"
    )}

${t("form.total")}: ₹${data.totalPrice.toLocaleString(
      "en-IN"
    )}

${t("form.name")}: ${data.name}

${t("form.mobile")}: ${data.mobile}

${t("form.date")}: ${data.date}

${
  data.additional
    ? `${t("form.additional")}: ${data.additional}`
    : ""
}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /*
   * Apps Script submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData =
        getSubmissionData();

      const response = await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(
            submissionData
          ),
        }
      );

      const result =
        await response.json();

      if (!result.success) {
        throw new Error(
          result.message ||
            "Submission failed"
        );
      }

      setSuccess(
        t("form.success")
      );

      setFormData({
        name: "",
        mobile: "",
        passCount: 1,
        date: "",
        additional: "",
        website: "",
      });

    } catch (error) {
      console.error(
        "Form submission error:",
        error
      );

      setError(
        t("form.submitError")
      );

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="requirement-form"
      className="relative w-full overflow-hidden bg-[#100506] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-[-180px] top-40 h-96 w-96 rounded-full bg-[#7d1115]/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-120px] h-80 w-80 rounded-full bg-[#f28a24]/10 blur-[110px]" />


      <div className="relative mx-auto max-w-3xl">


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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f28a24] sm:text-xs">
            {t("form.eyebrow")}
          </p>

          <h2 className="mt-4 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.045em]">
            {t("form.title")}
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/55 sm:text-lg">
            {t("form.subtitle")}
          </p>

        </motion.div>



        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="mt-10"
        >


          {/* =========================
              PASS SWITCH
          ========================= */}
          <div>

            <p className="mb-3 text-sm font-medium text-white/75">
              {t("form.choosePass")}
            </p>

            <div className="rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">

              <div className="grid grid-cols-2">

                {/* 1–3 */}
                <button
                  type="button"
                  onClick={() =>
                    handlePassChange(
                      "vip_1_3"
                    )
                  }
                  className={`rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    activePassKey ===
                    "vip_1_3"
                      ? "bg-[#f28a24] text-white shadow-[0_8px_30px_rgba(242,138,36,0.2)]"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {t(
                    "form.oneThreePeople"
                  )}
                </button>


                {/* 4–6 */}
                <button
                  type="button"
                  onClick={() =>
                    handlePassChange(
                      "vip_4_6"
                    )
                  }
                  className={`rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    activePassKey ===
                    "vip_4_6"
                      ? "bg-[#f28a24] text-white shadow-[0_8px_30px_rgba(242,138,36,0.2)]"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {t(
                    "form.fourSixPeople"
                  )}
                </button>

              </div>

            </div>

          </div>



          {/* =========================
              PASS INFO
          ========================= */}
          <div className="mt-5 rounded-2xl border border-[#f28a24]/20 bg-[#7d1115]/20 p-4 backdrop-blur-xl">

            <div className="flex items-center justify-between gap-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f28a24]/20 bg-[#f28a24]/10 text-[#ffae61]">

                  {activePassKey ===
                  "vip_4_6" ? (
                    <Crown size={18} />
                  ) : (
                    <Ticket size={18} />
                  )}

                </div>

                <div>

                  <p className="text-sm font-bold">
                    {t(
                      "form.vipEntry"
                    )}
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    {activePassKey ===
                    "vip_4_6"
                      ? t(
                          "form.fourSixPeople"
                        )
                      : t(
                          "form.oneThreePeople"
                        )}
                  </p>

                </div>

              </div>


              <div className="text-right">

                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  {t(
                    "form.pricePerPass"
                  )}
                </p>

                <p className="mt-1 font-display text-xl font-bold">
                  ₹
                  {activePass.price.toLocaleString(
                    "en-IN"
                  )}
                </p>

              </div>

            </div>

          </div>



          {/* =========================
              NUMBER OF PASSES
          ========================= */}
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-sm font-semibold">
                  {t(
                    "form.passCount"
                  )}
                </p>

                <p className="mt-1 text-xs text-white/35">
                  {t(
                    "form.passCountDescription"
                  )}
                </p>

              </div>


              <div className="flex items-center gap-3">

                {/* Minus */}
                <button
                  type="button"
                  onClick={() =>
                    updatePassCount(-1)
                  }
                  disabled={
                    formData.passCount <=
                    1
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition hover:bg-white/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Minus size={16} />
                </button>


                {/* Count */}
                <span className="min-w-7 text-center text-xl font-bold">
                  {formData.passCount}
                </span>


                {/* Plus */}
                <button
                  type="button"
                  onClick={() =>
                    updatePassCount(1)
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f28a24] transition hover:bg-[#ff9d3e] active:scale-95"
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>

          </div>



          {/* =========================
              NAME
          ========================= */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-white/75">
              {t("form.name")}
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="text"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                placeholder={t(
                  "form.namePlaceholder"
                )}
                autoComplete="name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
                required
              />

            </div>

          </div>



          {/* =========================
              MOBILE
          ========================= */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-white/75">
              {t("form.mobile")}
            </label>

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="tel"
                name="mobile"
                value={
                  formData.mobile
                }
                onChange={
                  handleChange
                }
                placeholder={t(
                  "form.mobilePlaceholder"
                )}
                maxLength="10"
                inputMode="numeric"
                autoComplete="tel"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
                required
              />

            </div>

          </div>



          {/* =========================
              DATE
          ========================= */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-white/75">
              {t("form.date")}
            </label>

            <div className="relative">

              <CalendarDays
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="date"
                name="date"
                value={
                  formData.date
                }
                onChange={
                  handleChange
                }
                min={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none backdrop-blur-xl transition focus:border-[#f28a24]/50"
                required
              />

            </div>

          </div>



          {/* =========================
              ADDITIONAL
          ========================= */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-white/75">
              {t(
                "form.additional"
              )}
            </label>

            <textarea
              name="additional"
              value={
                formData.additional
              }
              onChange={
                handleChange
              }
              placeholder={t(
                "form.additionalPlaceholder"
              )}
              rows="4"
              maxLength="1000"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/25 focus:border-[#f28a24]/50 focus:bg-white/[0.07]"
            />

          </div>



          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={
              formData.website
            }
            onChange={
              handleChange
            }
            autoComplete="off"
            tabIndex="-1"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />



          {/* =========================
              TOTAL
          ========================= */}
          <div className="mt-6 rounded-3xl border border-[#f28a24]/20 bg-[#7d1115]/20 p-5 backdrop-blur-xl">

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {t(
                    "form.total"
                  )}
                </p>

                <p className="mt-1 text-xs text-white/45">
                  {formData.passCount}{" "}
                  {t(
                    "form.passCount"
                  )}{" "}
                  × ₹
                  {activePass.price.toLocaleString(
                    "en-IN"
                  )}
                </p>

              </div>

              <p className="font-display text-3xl font-bold">
                ₹
                {totalPrice.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

          </div>



          {/* Error */}
          {error && (
            <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}



          {/* Success */}
          {success && (
            <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
              {success}
            </div>
          )}



          {/* =========================
              BUTTONS
          ========================= */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {/* WhatsApp */}
            <button
              type="button"
              onClick={
                handleWhatsApp
              }
              className="flex items-center justify-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-4 text-sm font-bold text-green-300 transition hover:bg-green-500/15 active:scale-[0.98]"
            >
              <MessageCircle
                size={18}
              />

              {t(
                "form.whatsapp"
              )}
            </button>


            {/* Submit */}
            <button
              type="submit"
              disabled={
                isSubmitting
              }
              className="flex items-center justify-center gap-2 rounded-full bg-[#f28a24] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(242,138,36,0.2)] transition hover:bg-[#ff9d3e] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />

              {isSubmitting
                ? t(
                    "form.submitting"
                  )
                : t(
                    "form.submit"
                  )}
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
}

export default RequirementForm;