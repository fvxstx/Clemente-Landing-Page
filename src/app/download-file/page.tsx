"use client";
import { Button } from "@/components/ui/button";
import { FaWindows } from "react-icons/fa";
import HeaderDownloadDefault from "./components/HeaderDownload";
export default function DownloadFilePage() {
  const tokenLocal = localStorage.getItem("token");

  const handleDownload = () => {
    const fileUrl = "/dist/clemente-customer.exe";
    const link = document.createElement("a");

    link.href = fileUrl;
    link.setAttribute("download", "clemente-customer.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0F1628] min-h-screen">
      <HeaderDownloadDefault />
      <div className=" items-center justify-center px-4 font-inter flex flex-col mt-20">
        <div className="rounded-2xl from shadow-lg">
          <div className="w-full">
            <div className="flex flex-col md:flex-row py-4 px-10 items-center justify-center gap-6 w-full md:w-[60rem] border border-[#54D739] rounded-3xl bg-gradient-right-left">
              <div className="w-3/4 md:w-[30rem] h-full">
                <FaWindows className="w-full h-full" color="#0077d4" />
              </div>
              <div className="w-full space-y-6">
                <h2 className="text-3xl font-bold text-[#54D739]">windows</h2>
                <p className="text-white font-normal text-2xl ">
                  Facilite a Análise de Placas com o Software que Transforma
                  Diagnósticos e faça o download agoara mesmo!
                </p>
                <Button
                  disabled={!tokenLocal}
                  onClick={handleDownload}
                  className="bg-[#10A666] hover:bg-green-600 text-white w-full md:w-auto py-6"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
