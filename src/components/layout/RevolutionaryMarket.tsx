import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VehicleCategoryProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const categories: VehicleCategoryProps[] = [
  {
    title: "Diesel Pesado",
    subtitle: "(Caminhões)",
  },
  {
    title: "Agrícolas",
    description: "Disponível até o final de 2025",
  },
  {
    title: "Diesel Leve",
    subtitle: "(Vans e Caminhonetes)",
    description: "Disponível até o final de 2025",
  },
  {
    title: "Carros a gasolina",
    description: "Disponível até o final de 2025",
  },
];

// Componente principal
export function RevolutionaryMarketSection() {
  return (
    <section
      id="features"
      className="bg-general-gradient-top-bottom flex w-full flex-col justify-center items-center gap-10 md:gap-32 mt-2 md:mt-10 pb-20"
    >
      {/* Componente imagem e gradiente */}
      <div className="mt-8 md:mt-16 container bg-revolution-market mx-auto flex flex-col md:flex-row justify-center gap-6 items-center py-6 md:py-16 px-6 border border-[#61E529] rounded-3xl">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-medium text-white max-w-[750px]">
            Chegamos para{" "}
            <span className="text-[#54D739]">
              revolucionar o mercado de reparo de ECUs!
            </span>
          </h2>
          <p className="text-[#54D739] text-base sm:text-2xl">
            Mais precisão, menos erros e maior eficiência no reparo!
          </p>
          <p className="text-white text-sm sm:text-lg max-w-[555px]">
            O Módulo Pro facilita a trabalho de reparadores de placas
            eletrônicas automotivas, oferecendo diagnósticos rápidos e precisos.
            Com uma interface intuitiva e recursos avançados, permite a
            visualização segura de esquemas elétricos, identificando conexões e
            componentes com facilidade.
          </p>
          <Button className="bg-[#10A666] hover:bg-green-600 text-white w-full md:w-auto">
            Quero ser um reparador de elite!
          </Button>
        </div>
        <div className="flex justify-end ">
          <div className="relative w-full">
            <Image
              src="/mackbook-mock.png"
              alt="Módulo Pro Interface"
              width={300}
              height={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* Componente de veiculos */}
      <div className="container flex flex-col gap-10 justify-center items-center py-10">
        <h2 className="text-2xl md:text-4xl font-medium max-w-[820px] text-white text-center md:mb-12">
          Possuímos informações de módulos para as seguintes categorias de
          veículos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-fit p-2">
          {categories.map((category, index) => (
            <VehicleCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RevolutionaryMarketSection;

// Componente de categoria de veículo
const VehicleCategory = ({
  title,
  subtitle,
  description,
}: VehicleCategoryProps) => (
  <Card className="border-[#54D739] w-full md:w-[360px] gap-0 flex flex-col items-start justify-center bg-revolution-market rounded-xl px-3 py-5 hover:scale-105 transition-transform duration-300">
    <CardHeader className="w-[190px]">
      <CardTitle className="text-white font-medium w-full">
        {title} <span className="text-[#54D739]">{subtitle}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#FF3B30]">{description}</p>
    </CardContent>
  </Card>
);
