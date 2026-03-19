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
    <section id="faq" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl p-10">
        <header data-aos="fade-up" className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
            Dúvidas frequentes
          </p>

          <h2 id="faq-title" className="font-display text-3xl font-bold md:text-4xl">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Tire dúvidas sobre coleta, entrega, tipos de tecidos atendidos,
            higiene hospitalar e funcionamento da lavanderia industrial da Green Washer.
          </p>
        </header>

        <ul
          data-aos="fade-up"
          data-aos-delay="200"
          className="space-y-5"
          aria-label="Lista de perguntas frequentes"
        >
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            const questionId = `faq-question-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <li
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#181D23] px-8 shadow-xl"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full cursor-pointer items-center justify-between py-6 text-left font-display text-base font-semibold transition-colors hover:text-primary"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    id={questionId}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <IoIosArrowDown size={22} />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}