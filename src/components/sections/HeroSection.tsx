"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaRegClock,
  FaMagic,
  FaWhatsapp,
  FaMouse,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#14181F]">
      {/* Background com Otimização Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bo.png" // Certifique-se que a imagem está na pasta public
          alt="Lavanderia Industrial Green Washer - Higienização Profissional"
          fill
          priority
          className="object-cover opacity-30"
        />
        {/* Overlays para leitura e profundidade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#14181F] via-transparent to-[#14181F]" />
      </div>

      {/* Elementos Decorativos (Glow) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal (SEO H1) */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
          >
            <span className="gradient-text">
              Lavanderia Industrial e Hospitalar:
            </span>{" "}
            e Higiene Rigorosa e Pontualidade Total.
          </h1>

          {/* Descrição */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
             Atendemos hospitais, indústrias e empresas que exigem higienização
            profissional, processos rigorosos e confiança em cada ciclo de
            lavagem.
          </p>

          {/* CTAs */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="http://wa.me/+554999132974"
              className="bg-[#008F3C] hover:bg-green-700/0 hover:border text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
            >
              <FaWhatsapp size={18} />
              Solicite Orçamento
            </Link>
            <Link
              href="#sobre"
              className="bg-[#19313B] hover:bg-[#03a1c8]/40 text-[#02C2F2] hover:text-white border border-[#03a1c8] hover:border-white backdrop-blur-sm px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
            >
              Conheça a Green Washer
            </Link>
          </div>

          {/* Diferenciais Rápidos */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-10"
          >
            {[
              { icon: FaShieldAlt, label: "Higiene Certificada" },
              { icon: FaRegClock, label: "Entrega no Prazo" },
              { icon: FaMagic, label: "Tecnologia de Ponta" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-gray-400"
              >
                <item.icon size={20} className="text-green-500" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 bottom-0 hidden md:flex animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 mb-2 hide">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-0 h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
