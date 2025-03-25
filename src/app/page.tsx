import EliteRepairSection from "@/components/layout/EliteRepair";
import Footer from "@/components/layout/Footer";
import HeaderDefault from "@/components/layout/Header";
import OfferExclusiveSection from "@/components/layout/OfferExclusive";
import RevolutionaryMarketSection from "@/components/layout/RevolutionaryMarket";
import WhatOfferSection from "@/components/layout/WhatOffer";
import WhyModuloProSection from "@/components/layout/WhyModuloPro";

export default function Home() {
  return (
    <div className="bg-general-gradient min-h-screen font-inter">
      <HeaderDefault />

      <main className="w-full">
        <EliteRepairSection />
        <RevolutionaryMarketSection />
        <WhatOfferSection />
        <WhyModuloProSection />
        <OfferExclusiveSection />
        <Footer />
      </main>
    </div>
  );
}
