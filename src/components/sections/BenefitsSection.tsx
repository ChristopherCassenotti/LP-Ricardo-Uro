"use client";

import { useEffect } from "react";
import { Star, ShieldCheck, Package, Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    icon: Star,
    title: "Higiene e segurança comprovadas",
    color: "text-green-600",
    bg: "bg-[#152826]",
  },
  {
    icon: ShieldCheck,
    title: "Menor risco de contaminação",
    color: "text-[#02C2F2]",
    bg: "bg-[#033139]",
  },
  {
    icon: Package,
    title: "Fluxo contínuo de enxoval limpo",
    color: "text-green-600",
    bg: "bg-[#152826]",
  },
  {
    icon: Lightbulb,
    title: "Economia de tempo para focar no seu negócio",
    color: "text-[#02C2F2]",
    bg: "bg-[#033139]",
  },
];

export default function BenefitsSection() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <section
      id="beneficios"
      className="p-10"
      aria-labelledby="beneficios-titulo"
    >
      <div className="flex flex-col items-center">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-linear-to-r from-[#172226] to-[#17242B] p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="absolute inset-0" />

          <div className="relative z-10">
            <header className="mb-10 text-center" data-aos="fade-up">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
                Benefícios oferecidos
              </p>

              <h2
                id="beneficios-titulo"
                className="font-display text-3xl font-bold md:text-4xl"
              >
                Por que um serviço profissional{" "}
                <span className="gradient-text">faz a diferença</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
                Com uma lavanderia industrial especializada, sua empresa ganha
                mais segurança, padronização, agilidade operacional e um fluxo
                contínuo de enxoval limpo para o dia a dia.
              </p>
            </header>

            <ul className="grid gap-6 sm:grid-cols-2" aria-label="Benefícios da Green Washer">
              {benefits.map((item, index) => (
                <li
                  key={item.title}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="flex items-center gap-4 rounded-xl bg-[#14181f] p-4"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                    aria-hidden="true"
                  >
                    <item.icon size={22} className={item.color} />
                  </div>

                  <p className="font-medium text-foreground/90">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}