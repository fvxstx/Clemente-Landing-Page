import React from "react";
import Link from "next/link";

export function OfferExclusiveSection() {
  return (
    <section className="bg-[#0a1b2a] py-16 md:py-24 px-2 md:px-6 text-center border border-[#54D739] bg-revolution-market">
      <div className="container mx-auto max-w-3xl space-y-6">
        <h3 className="text-2xl sm:text-3xl font-medium text-[#FEFEFF] flex flex-col sm:flex-row items-center gap-6">
          Oferta exclusiva para o evento{" "}
          <span className="text-green-400">
            <img src="/automatec.png" alt="automatec" />
          </span>
        </h3>

        <div className="flex items-center justify-center space-x-2 pt-6">
          <p className="text-white text-lg ">
            <span className="line-through">12 x de 770,00</span>{" "}
            <span className="text-white">por </span>
            <span className="text-[#54D739] font-semibold text-2xl">
              12 x de 510,00
            </span>
          </p>
        </div>

        <p className="text-[#FEFEFF] text-xl md:text-2xl py-4">
          Pagamento parcelado no cartão,{" "}
          <span className="text-[#54D739] text-3xl font-semibold">
            sem juros!
          </span>
        </p>

        <p className="text-white text-lg md:text-2xl px-2 md:px-8 py-3">
          <Link href="/" className="text-[#54D739] text-3xl md:text-2xl">
            Clique aqui
          </Link>{" "}
          e garanta esta super condição agora mesmo (somente durante os dias do
          evento)!
        </p>
      </div>
    </section>
  );
}

export default OfferExclusiveSection;
