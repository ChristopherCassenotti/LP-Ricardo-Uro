"use client";

import { useEffect } from "react";
import { Hotel, Factory, Hospital } from "lucide-react"; 
import { BiSpa } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const audiences = [
  {
    title: "Hospitais e Clínicas",
    description: "Higienização com rigor bacteriológico e barreira sanitária, garantindo a eliminação de patógenos e a segurança total de pacientes e profissionais de saúde.",
    icon: Hospital,
    delay: 100,
    bgImage: "/bo.png", // Deixe vazio "" se não quiser imagem
  },
  {
    title: "Hotéis e Pousadas",
    description: "Enxovais impecáveis, macios e com brancura renovada. Logística ágil para garantir que sua operação nunca pare e seus hóspedes tenham o máximo conforto.",
    icon: Hotel,
    delay: 200,
    bgImage: "/hotel-bg.jpg",
  },
  {
    title: "Indústrias",
    description: "Lavagem técnica de uniformes e tecidos industriais com remoção de sujidades pesadas, preservando a durabilidade das peças e a imagem da sua empresa.",
    icon: Factory,
    delay: 300,
    bgImage: "", // Exemplo sem imagem (usa apenas o gradiente)
  },
  {
    title: "Clínicas Estéticas e Spas",
    description: "Cuidado delicado com toalhas e roupões, utilizando produtos dermatologicamente testados que transmitem acolhimento e higiene absoluta aos seus clientes.",
    icon: BiSpa,
    delay: 400,
    bgImage: "/spa-bg.jpg",
  },
];

export default function TargetAudienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="publico-alvo"
      className="py-10 bg-background text-white overflow-hidden"
      aria-labelledby="audience-title"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C] mb-4">
            Público-Alvo
          </p>
          <h2 id="audience-title" className="text-3xl md:text-5xl font-extrabold">
            Atendemos empresas que <span className="gradient-text">não podem errar</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((item, index) => (
            <article
              key={index}
              className="relative group overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-[#00CCFF]/30 shadow-2xl min-h-[320px] flex flex-col justify-center"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              style={{
                // Gradiente que deixa o centro mais claro/transparente e as pontas na cor #141C24
                background: `bg-linear- from-[#141C24] via-[#141C24]/0 to-[#141C24])`,
              }}
            >
              {/* CAMADA DE IMAGEM DE FUNDO (OPCIONAL) */}
              {item.bgImage && (
                <div 
                  className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'overlay'
                  }}
                />
              )}

              {/* Overlay de Brilho sutil ao hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#008F3C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#008F3C]/10 border border-[#008F3C]/20">
                    <item.icon
                      size={28}
                      className="text-[#008F3C]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00CCFF] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-112.5">
                  {item.description}
                </p>
              </div>

              {/* Marca d'água decorativa */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.4] group-hover:opacity-[0.08] transition-all duration-700 -rotate-15 group-hover:-rotate-8">
                <item.icon size={160} className="text-[#008F3C]" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}