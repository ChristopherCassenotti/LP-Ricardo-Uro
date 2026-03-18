"use client";

import { useEffect } from "react";
import { FaTruck, FaClipboardList, FaBoxOpen } from "react-icons/fa";
import { BiSolidWasher } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    icon: FaTruck,
    step: "01",
    title: "Coleta Especializada",
    description:
      "Retirada conforme a necessidade do cliente, com logística programada.",
  },
  {
    icon: FaClipboardList,
    step: "02",
    title: "Triagem Profissional",
    description: "Classificação por tipo de tecido e nível de contaminação.",
  },
  {
    icon: BiSolidWasher,
    step: "03",
    title: "Lavagem Técnica",
    description:
      "Ciclos corretos com produtos profissionais e controle de temperatura.",
  },
  {
    icon: FaBoxOpen,
    step: "04",
    title: "Acabamento e Entrega",
    description: "Secagem, dobra profissional e logística rigorosa no prazo.",
  },
];

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="processo"
      className="py-20 bg-background relative overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="text-center mb-20" data-aos="fade-up">
          <p className="text-xs font-bold text-[#008F3C] uppercase tracking-[0.3em] mb-4">
            Como funciona
          </p>
          <h2
            id="process-title"
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Nosso processo <span className="gradient-text">transparente</span>
          </h2>
        </header>

        <div className="relative">
          {/* LINHA CONECTORAL - DESKTOP (Horizontal) */}
          <div
            className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-line-gradient"
            aria-hidden="true"
          />

          {/* LINHA CONECTORAL - MOBILE (Vertical) */}
          <div
            className="md:hidden absolute left-12 top-10 bottom-10 w-0.5 bg-line-gradient opacity-50"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((item, index) => (
              <article
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group gap-6 md:gap-0"
              >
                {/* Container do Ícone */}
                <div className="relative z-10 shrink-0 w-24 h-24 rounded-3xl bg-[#152826] group-hover:bg-[#141C24] border border-white/5 flex items-center justify-center md:mb-8 shadow-2xl transition-all duration-500 group-hover:border-[#00CCFF]/50 group-hover:scale-110">
                  <item.icon
                    size={32}
                    className="text-[#008F3C] group-hover:text-[#00CCFF] transition-colors duration-500"
                  />
                </div>

                {/* Texto e Conteúdo */}
                <div className="flex flex-col">
                  <header>
                    <span className="text-xs font-black text-[#00CCFF] uppercase tracking-widest mb-1 md:mb-3 block">
                      Passo {item.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 leading-tight">
                      {item.title}
                    </h3>
                  </header>

                  <p className="text-sm text-slate-400 leading-relaxed max-w-[280px] md:max-w-50">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
