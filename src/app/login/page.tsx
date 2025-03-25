"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/UserService";

export default function ModuloProLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigator = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const user = await UserService.Login({ email, password });
      if (user) {
        navigator.push("/download-file");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1628] flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <img
            src="/logo-desktop.png"
            alt="Módulo Pro Logo"
            className="h-30 w-auto"
          />
        </div>

        <div className="bg-[#202534] rounded-lg p-8 shadow-xl">
          <h2 className="text-green-400 text-2xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white/70 mb-2">
                Login <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEmail(e.target.value)}
                placeholder="exemail@gmail.com"
                className="w-full bg-transparent border-[#546080] text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white/70 mb-2">
                Senha<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-transparent border-[#546080] text-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <a
              href="#"
              className="text-white hover:underline block text-left text-sm"
            >
              Esqueci minha senha
            </a>

            <Button
              type="submit"
              className="w-full bg-[#0FA767] hover:bg-green-600 text-white mt-4"
            >
              Avançar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
