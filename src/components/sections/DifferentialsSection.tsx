"use client";

import { useEffect } from "react";
import { BiTimeFive, BiAward, BiChip, BiLeaf, BiHeart } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const differentials = [
  {
    icon: BiTimeFive,
    title: "Logística eficiente",
    description:
      "Entrega no prazo e logística organizada para manter o fluxo operacional da sua empresa.",
  },
  {
    icon: BiAward,
    title: "Padrão de qualidade",
    description:
      "Processos padronizados e rigorosos em cada etapa da operação, do recebimento à entrega.",
  },
  {
    icon: BiHeart,
    title: "Cuidado com a saúde",
    description:
      "Higienização adequada para ambientes hospitalares, clínicos e operações que exigem alto controle.",
  },
  {
    icon: BiChip,
    title: "Tecnologia profissional",
    description:
      "Equipamentos modernos e produtos profissionais de alta performance para cada tipo de peça.",
  },
  {
    icon: BiLeaf,
    title: "Compromisso sustentável",
    description:
      "Uso consciente de água, processos eficientes e atenção à sustentabilidade ambiental.",
  },
];

export default function DifferentialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section
      id="diferenciais"
      className="bg-background px-10 py-5 md:py-5"
      aria-labelledby="differentials-title"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <header className="mb-16 text-center" data-aos="fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
            Qualidade Green Washer
          </p>

          <h2
            id="differentials-title"
            className="text-3xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            Diferenciais que fazem a{" "}
            <span className="gradient-text">diferença</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#C4C4C4] md:text-lg">
            A Green Washer une tecnologia, padronização, logística eficiente e
            cuidado rigoroso com a higiene para atender com segurança hospitais,
            clínicas, hotéis e empresas.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          aria-label="Diferenciais da Green Washer"
        >
          {differentials.map((item, index) => (
            <li
              key={item.title}
              className="group flex flex-col items-center rounded-2xl border border-[#383838] bg-background p-8 text-center shadow-xl shadow-[#000000]/50 transition-all duration-300 hover:border-green-600/40 hover:shadow-2xl hover:shadow-green-600/30"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#152826] text-green-600 transition-colors duration-300 group-hover:bg-[#008F3C]/30"
                aria-hidden="true"
              >
                <item.icon size={32} />
              </div>

              <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#C4C4C4]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}