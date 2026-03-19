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
    title: "Coleta especializada",
    description:
      "Retirada programada conforme a necessidade do cliente, com logística organizada e pontual.",
  },
  {
    icon: FaClipboardList,
    step: "02",
    title: "Triagem profissional",
    description:
      "Classificação por tipo de tecido, uso e nível de contaminação para garantir o tratamento correto.",
  },
  {
    icon: BiSolidWasher,
    step: "03",
    title: "Lavagem técnica",
    description:
      "Ciclos adequados com produtos profissionais, controle de temperatura e rigor em cada etapa.",
  },
  {
    icon: FaBoxOpen,
    step: "04",
    title: "Acabamento e entrega",
    description:
      "Secagem, dobra profissional e entrega no prazo para manter o fluxo operacional da sua empresa.",
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
      className="relative overflow-hidden bg-background py-20"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-20 text-center" data-aos="fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
            Como funciona
          </p>

          <h2
            id="process-title"
            className="text-3xl font-extrabold text-white md:text-5xl"
          >
            Nosso processo <span className="gradient-text">transparente</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Da coleta à entrega, a Green Washer segue um processo padronizado de
            lavanderia industrial e hospitalar para garantir higiene, segurança,
            rastreabilidade e pontualidade.
          </p>
        </header>

        <div className="relative">
          <div
            className="absolute left-[10%] right-[10%] top-12 hidden h-0.5 bg-line-gradient md:block"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-10 left-12 top-10 w-0.5 bg-line-gradient opacity-50 md:hidden"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((item, index) => (
              <li
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="group flex flex-row items-center gap-6 text-left md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div
                  className="relative z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-white/5 bg-[#152826] shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#00CCFF]/50 group-hover:bg-[#141C24] md:mb-8"
                  aria-hidden="true"
                >
                  <item.icon
                    size={32}
                    className="text-[#008F3C] transition-colors duration-500 group-hover:text-[#00CCFF]"
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <span className="mb-1 block text-xs font-black uppercase tracking-widest text-[#00CCFF] md:mb-3">
                      Passo {item.step}
                    </span>

                    <h3 className="mb-2 text-lg font-bold leading-tight text-white md:mb-4 md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-70 text-sm leading-relaxed text-slate-400 md:max-w-50">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}