"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaRegClock, FaWhatsapp } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const quickHighlights = [
  { icon: FaShieldAlt, label: "Higiene certificada" },
  { icon: FaRegClock, label: "Entrega no prazo" },
  { icon: FiCpu, label: "Tecnologia profissional" },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#14181F] pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/greenWasher.webp"
          alt="Estrutura da Green Washer, lavanderia industrial e hospitalar especializada"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 blur-xs"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#14181F] via-[#14181F]/50 to-[#14181F]" />
      </div>

      <div
        className="pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-green-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <header>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#008F3C]"
            >
              Green Washer
            </p>

            <h1
              id="hero-title"
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              <span className="gradient-text">
                Lavanderia industrial e hospitalar
              </span>{" "}
              com higiene rigorosa, padronização e pontualidade
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              Atendemos hospitais, clínicas, hotéis e empresas que precisam de
              higienização profissional, processos rigorosos e confiança em cada
              ciclo de lavagem.
            </p>
          </header>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="https://wa.me/554999132974"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento pelo WhatsApp"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#008F3C] bg-[#008F3C] px-8 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:border-white hover:bg-green-700/0"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              Solicite orçamento
            </Link>

            <Link
              href="#sobre"
              aria-label="Ir para a seção Sobre a Green Washer"
              className="flex items-center justify-center rounded-xl border border-[#03a1c8] bg-[#19313B] px-8 py-4 font-bold text-[#02C2F2] backdrop-blur-sm transition-all hover:border-white hover:bg-[#03a1c8]/40 hover:text-white"
            >
              Conheça a Green Washer
            </Link>
          </div>

          <ul
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-1 gap-6 border-t border-white/5 pt-10 sm:grid-cols-3"
            aria-label="Principais diferenciais da Green Washer"
          >
            {quickHighlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-center gap-3 text-gray-400"
              >
                <item.icon size={20} className="text-green-500" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 hidden animate-bounce md:flex"
        aria-hidden="true"
      >
        <div className="mb-2 flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-3 w-1 rounded-full bg-white/50" />
        </div>
      </div>

      <div className="absolute bottom-0 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}