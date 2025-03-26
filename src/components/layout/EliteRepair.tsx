import { Button } from "../ui/button";

const EliteRepairSection = () => {
  return (
    <section
      id="modulo-pro"
      className="relative flex w-full flex-col justify-center items-center bg-general-gradient md:p-10 pt-10"
    >
      <img
        src="phone-laptop-desktop.png"
        alt=""
        className="h-full md:h-[35rem] w-auto relative top-4"
      />
      <div className="sm:absolute relative bottom-16 md:bottom-2 bg-header-gradient backdrop-blur-md px-4 md:px-26 md:py-4 py-8 flex flex-col gap-5 text-center md:text-left md:items-start md:justify-start rounded-t-2xl md:rounded-2xl w-full md:w-3/4">
        <h2 className="text-[#54D739] font-bold text-2xl md:text-3xl max-w-[500px]">
          Somos a nova era de reparadores de elite!
        </h2>
        <p className="text-white font-normal md:text-lg">
          Realize diagnósticos de ECUs com uma visão 3D, com precisão e
          agilidade.
        </p>
        <Button className="bg-[#10A666] hover:bg-green-600 text-white w-full md:w-auto py-6">
          Quero ser um reparador de elite!
        </Button>
      </div>
    </section>
  );
};

export default EliteRepairSection;
