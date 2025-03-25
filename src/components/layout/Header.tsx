"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DiWindows } from "react-icons/di";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: "O Módulo Pro", href: "#modulo-pro" },
  { label: "Funcionalidades", href: "#features" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Eventos", href: "#events" },
];

const HeaderDefault = () => {
  const rounter = useRouter();

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

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-white font-semibold"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="default"
            onClick={() => rounter.push("/login")}
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

export default HeaderDefault;
