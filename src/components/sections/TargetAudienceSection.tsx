"use client";

import { useEffect } from "react";
import { Hotel, Factory, Hospital } from "lucide-react";
import { BiSpa } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const audiences = [
  {
    title: "Hospitais e clínicas",
    description:
      "Higienização com alto rigor para enxovais e peças utilizadas em ambientes de saúde, com processos padronizados, segurança operacional e atenção à barreira sanitária.",
    icon: Hospital,
    delay: 100,
    bgImage: "/targetaudience/hospital.webp",
  },
  {
    title: "Hotéis e pousadas",
    description:
      "Lavagem profissional de enxovais com maciez, brancura e padronização, além de logística ágil para manter a operação e a experiência do hóspede em alto nível.",
    icon: Hotel,
    delay: 200,
    bgImage: "/targetaudience/hotel.webp",
  },
  {
    title: "Indústrias",
    description:
      "Lavagem técnica de uniformes e tecidos industriais com foco em remoção de sujidades pesadas, durabilidade das peças e apresentação profissional da equipe.",
    icon: Factory,
    delay: 300,
    bgImage: "/targetaudience/industria.webp",
  },
  {
    title: "Clínicas estéticas e spas",
    description:
      "Cuidado especializado com toalhas, roupões e peças de uso frequente, garantindo higiene, conforto e uma apresentação impecável para o atendimento ao cliente.",
    icon: BiSpa,
    delay: 400,
    bgImage: "/targetaudience/spa.webp",
  },
];

export default function TargetAudienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="publico-alvo"
      className="overflow-hidden bg-background py-10 text-white"
      aria-labelledby="audience-title"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center" data-aos="fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
            Público-alvo
          </p>

          <h2
            id="audience-title"
            className="text-3xl font-extrabold md:text-5xl"
          >
            Atendemos empresas que{" "}
            <span className="gradient-text">não podem errar</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            A Green Washer atende operações que exigem alto padrão de higiene,
            padronização, agilidade e segurança no cuidado com enxovais,
            uniformes e tecidos profissionais.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2" aria-label="Segmentos atendidos pela Green Washer">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="group relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-3xl border border-white/5 p-8 shadow-2xl transition-all duration-500 hover:border-[#00CCFF]/30"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              style={{
                background:
                  "linear-gradient(135deg, #141C24 0%, rgba(20,28,36,0.92) 45%, rgba(20,28,36,0.78) 100%)",
              }}
            >
              {item.bgImage && (
                <div
                  className="absolute inset-0 z-0 opacity-20 grayscale transition-opacity duration-500 group-hover:opacity-30 group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay",
                  }}
                  aria-hidden="true"
                />
              )}

              <div
                className="absolute inset-0 bg-linear-to-br from-[#008F3C]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#008F3C]/20 bg-[#008F3C]/10"
                    aria-hidden="true"
                  >
                    <item.icon size={28} className="text-[#008F3C]" />
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#00CCFF] md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-[450px] text-sm leading-relaxed text-slate-400 md:text-base">
                  {item.description}
                </p>
              </div>

              <div
                className="absolute -bottom-6 -right-6 -rotate-[15deg] opacity-[0.04] transition-all duration-700 group-hover:-rotate-[8deg] group-hover:opacity-[0.08]"
                aria-hidden="true"
              >
                <item.icon size={160} className="text-[#008F3C]" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}