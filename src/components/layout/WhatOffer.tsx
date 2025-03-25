import React from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MdOutlineSupportAgent,
  MdManageSearch,
  MdOutlineAssignment,
} from "react-icons/md";

const features = [
  {
    icon: <MdOutlineSupportAgent className="w-12 h-12" />,
    title: "Suporte técnico especializado",
  },
  {
    icon: <MdManageSearch className="w-12 h-12" />,
    title: "Busca avançada com filtros por número de componentes",
  },
  {
    icon: <Eye className="w-12 h-12" />,
    title: "Destaque interativo de trilhas e componentes",
  },
  {
    icon: <MdOutlineAssignment className="w-12 h-12" />,
    title: "Relatórios em PDF",
  },
];

// Componente principal
const WhatOfferSection = () => {
  return (
    <section className="min-h-screen flex md:flex-row flex-col-reverse items-center justify-center overflow-hidden bg-whatOffer p-6">
      <div className="relative container flex md:flex-row flex-col-reverse justify-center gap-12 items-center z-10">
        <div className="grid grod-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        <div className="space-y-6 flex flex-col justify-start items-start text-left max-w-[490px]">
          <h2 className="text-2xl sm:text-4xl font-medium text-white">
            O que o nosso software oferece?
          </h2>
          <p className="text-[#54D739] text-base sm:text-3xl font-medium">
            Otimize seus diagnósticos e ganhe mais eficiência!
          </p>
          <Button className="bg-[#10A666] hover:bg-green-600 text-white w-full md:w-auto">
            Quero ser um reparador de elite!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatOfferSection;

// Componente card
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard = ({ icon, title }: FeatureCardProps) => (
  <div className="bg-[#214A1926] w-full md:max-w-[290px] border border-[#54D739] rounded-lg px-4 py-6 flex items-center space-x-3 hover:bg-green-900/50 transition-all duration-300">
    <div className="text-green-400 ">{icon}</div>
    <span className="text-white text-sm font-medium md:max-w-[180px]">
      {title}
    </span>
  </div>
);
