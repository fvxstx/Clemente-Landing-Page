import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-[#0a1b2a] text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 items-start pt-14 pb-8 space-y-10">
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="Módulo Pro Logo" className="h-12 w-auto" />
        </div>

        <div className="space-y-4 flex flex-col items-center md:items-start justify-center">
          <h4 className="text-[#0EA767] font-semibold mb-2">Contato</h4>
          <div className="flex items-center space-x-2">
            <IoIosMail className="text-[#54D739] w-6 h-6" />
            <span className="font-sans">contato@Clemente.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PiWhatsappLogoDuotone className="text-[#54D739] w-6 h-6" />
            <span>55+ 71 90000-0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineInstagram className="text-[#54D739] w-6 h-6" />
            <span>@móduloPro</span>
          </div>
        </div>

        <div className="space-y-2 flex flex-col items-center md:items-start">
          <h4 className="text-[#0EA767] font-semibold mb-2">Privacidade</h4>
          <div>
            <a
              href="/termos"
              className="hover:text-green-400 transition-colors"
            >
              Termos de Uso
            </a>
          </div>
          <div>
            <a
              href="/privacidade"
              className="hover:text-green-400 transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#B7F3AC] mt-6 py-6 text-center text-[#122840] flex flex-col sm:flex-row justify-between px-10">
        <p>Clemente Todos os direitos reservados.</p>
        <p>2024 ©</p>
      </div>
    </footer>
  );
}

export default Footer;
