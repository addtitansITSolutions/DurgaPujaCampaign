import React, { useState } from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import RequirementForm from "../components/RequirementForm";
import Header from "../components/Header";
import AboutEvent from "../components/AboutEvent";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

function Home() {
  const [selectedPass, setSelectedPass] = useState("vip_1_3");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8ef] text-gray-900">
      <Header />

      <main className="w-full">
        <Hero />

        <AboutEvent />

        <Countdown />

        <Pricing
          selectedPass={selectedPass}
          onSelectPass={setSelectedPass}
        />

        <RequirementForm
          selectedPass={selectedPass}
          onSelectPass={setSelectedPass}
        />

        <Footer />
      </main>
    </div>
  );
}

export default Home;