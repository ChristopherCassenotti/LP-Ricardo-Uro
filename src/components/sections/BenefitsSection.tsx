"use client";

import { useEffect } from "react";
import { Star, ShieldCheck, Package, Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    icon: Star,
    label: "Higiene e segurança comprovadas",
    color: "text-green-600",
    bg: "bg-[#152826]",
  },
  {
    icon: ShieldCheck,
    label: "Menor risco de contaminação",
    color: "text-[#02C2F2]",
    bg: "bg-[#033139]",
  },
  {
    icon: Package,
    label: "Fluxo contínuo de enxoval limpo",
    color: "text-green-600",
    bg: "bg-[#152826]",
  },
  {
    icon: Lightbulb,
    label: "Economia de tempo para focar no seu negócio",
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
    <section className="p-10">
      <div className="flex flex-col items-center">
        <span className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
          Benefícios oferecidos
        </span>
        <div
          className="bg-linear-to-r from-[#172226] to-[#17242B] p-8 md:p-12 rounded-2xl relative overflow-hidden max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <div className="absolute inset-0" />
          <div className="relative z-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Por que um serviço profissional{" "}
                <span className="gradient-text">faz a diferença</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={item.label}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#14181f]"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon size={22} className={item.color} />
                  </div>
                  <p className="font-medium text-foreground/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
