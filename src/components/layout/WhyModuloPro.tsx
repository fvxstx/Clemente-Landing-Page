import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Suporte técnico especializado",
    description: "Equipe pronta para te auxiliar quando preciso.",
  },
  {
    title: "Busca rápida e eficiente",
    description: "Encontre componentes e esquemas com agilidade.",
  },
  {
    title: "Interface intuitiva e fácil de usar",
    description: "Acesso simples tanto para iniciantes quanto especialistas.",
  },
  {
    title: "Interação visual avançada",
    description: "Destaque trilhas e funcionalidades com apenas um clique.",
  },
  {
    title: "Compatível com múltiplos formatos",
    description: "Flexibilidade para atender diferentes tipos de projetos.",
  },
];

// Componente principal
export function WhyModuloProSection() {
  return (
    <section className="py-16 md:py-32 px-6 bg-general-gradient-bottom-top">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-[540px]">
          <h2 className="text-2xl md:text-4xl font-medium text-white">
            Por que escolher o Módulo Pro?
          </h2>
          <p className="text-white font-medium md:text-3xl">
            Ser <span className="text-[#54D739]">Módulo Pro</span> é jogar no
            próximo nível. É ter acesso ao que poucos têm. É fazer parte de uma
            <span className="text-[#54D739]"> nova era de reparadores!</span>
          </p>
          <Button className="bg-[#10A666] hover:bg-green-600 text-white w-full md:w-auto">
            Quero ser um reparador de elite!
          </Button>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyModuloProSection;

// Componente card de funcionalidades
interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <div className="flex items-start space-x-3">
    <div className="text-[#54D739] mt-1">•</div>
    <div>
      <h3 className="text-[#54D739] font-semibold md:text-2xl">
        {title}:{" "}
        <span className="text-white font-normal md:text-xl">{description}</span>
      </h3>
    </div>
  </div>
);
