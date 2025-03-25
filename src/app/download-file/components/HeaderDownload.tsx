"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DiWindows } from "react-icons/di";

const HeaderDownloadDefault = () => {
  return (
    <header className="p-2">
      <div className="rounded-2xl from shadow-lg bg-header-gradient ">
        <div className="flex items-center justify-between py-4 px-6 w-full">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Módulo Pro Logo"
              className="h-10 w-auto"
            />
          </Link>

          <Button
            variant="default"
            className="bg-[#54D739] hover:bg-green-600 text-[#065B37]"
          >
            Download
            <DiWindows size={35} color="#000000" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderDownloadDefault;
