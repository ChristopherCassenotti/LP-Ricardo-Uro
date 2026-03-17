"use client";

import { useEffect } from "react";
import { BiTimeFive, BiAward, BiChip, BiLeaf, BiHeart } from "react-icons/bi"; // Usando BoxIcons do pacote react-icons
import AOS from "aos";
import "aos/dist/aos.css";

const differentials = [
  {
    icon: BiTimeFive,
    title: "Logística",
    description:
      "Entrega no prazo e logística eficiente para manter seu fluxo operacional.",
  },
  {
    icon: BiAward,
    title: "Padrão",
    description:
      "Processos padronizados e rigorosos em cada etapa da operação.",
  },
  {
    icon: BiHeart,
    title: "Saúde",
    description:
      "Higienização adequada para ambientes hospitalares e clínicos.",
  },
  {
    icon: BiChip,
    title: "Tecnologia",
    description:
      "Tecnologia moderna e produtos profissionais de última geração.",
  },
  {
    icon: BiLeaf,
    title: "Eco",
    description:
      "Compromisso com uso consciente de água e sustentabilidade ambiental.",
  },
];

export default function DifferentialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-back", // Efeito de leve "bounce" na entrada
    });
  }, []);

  return (
    <section
      id="diferenciais"
      className="py-5 md:py-5 bg-background px-10"
      aria-labelledby="differentials-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header da Seção com Semântica de SEO */}
        <header className="text-center mb-16" data-aos="fade-up">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
            Qualidade Green Washer
          </span>
          <h2
            id="differentials-title"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Diferenciais que fazem a{" "}
            <span className="gradient-text">diferença</span>
          </h2>
        </header>

        {/* Grid usando a tag <article> para cada diferencial (Melhor para SEO) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className="bg-background p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center shadow-[#000000]/50 hover:shadow-green-600/30 border border-[#383838] hover:border-green-600/40"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              {/* Container do Ícone */}
              <div
                className="w-16 h-16 rounded-2xl bg-[#152826] text-green-600 flex items-center justify-center mb-6 group-hover:bg-[#008F3C]/30 transition-colors duration-300"
                aria-hidden="true"
              >
                <item.icon size={32} />
              </div>

              {/* Título com h3 para hierarquia correta */}
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="text-[#C4C4C4] text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
