"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Vocês trabalham com coleta e entrega?",
    answer:
      "Sim, oferecemos logística personalizada com coleta e entrega conforme a necessidade do cliente, garantindo pontualidade e segurança no transporte dos tecidos.",
  },
  {
    question: "Quais tecidos vocês atendem?",
    answer:
      "Atendemos uniformes, lençóis, toalhas, tecidos técnicos hospitalares e industriais, com tratamento específico para cada tipo de material.",
  },
  {
    question: "Como garantem a higiene hospitalar?",
    answer:
      "Através de processos padronizados com monitoramento de temperatura, produtos profissionais certificados e controle de qualidade em cada etapa do processo.",
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "Trabalhamos com prazos personalizados conforme a demanda de cada cliente, com compromisso de pontualidade e comunicação transparente.",
  },
  {
    question: "Atendem empresas de pequeno porte?",
    answer:
      "Nosso foco é em hospitais, clínicas, hotéis e indústrias de médio a grande porte, garantindo escala e qualidade profissional em cada processo.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq">
      <div className="max-w-3xl mx-auto p-10">
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={index}
                className="px-8 bg-[#181D23] shadow-xl rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center cursor-pointer justify-between text-left font-display font-semibold text-base hover:text-primary transition-colors py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowDown size={22}/>
                  </span>
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
