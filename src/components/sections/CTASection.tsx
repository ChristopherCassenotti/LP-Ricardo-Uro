"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function CTASection(){
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <section
      id="contato"
      className="p-10"
      aria-labelledby="cta-title"
    >
      <div className="flex flex-col items-center">
        <div
          data-aos="zoom-in"
          className="relative rounded-3xl overflow-hidden md:p-16 text-center"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 glass-card rounded-3xl "
            aria-hidden="true"
          />

          <div className="relative bg-[linear-gradient(75deg,#172525,#1A2126,#172933)]  rounded-3xl max-w-6xl px-10 py-10 z-10">
            <header>
              <h2
                id="cta-title"
                className="font-display text-3xl md:text-5xl font-bold mb-6"
              >
                Pronto para garantir{" "}
                <span className="gradient-text">higiene e eficiência</span>?
              </h2>
            </header>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Entre em contato com um de nossos consultores e descubra como a Green Washer
              pode transformar a gestão de lavanderia da sua empresa.
            </p>

            <nav
              aria-label="Ações de contato"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            <Link
              href="https://wa.me/seunumeroaqui"
              className="bg-[#008F3C] hover:bg-green-700/0 border-[#008F3C] border hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
            >
              <FaWhatsapp size={18} />
              Solicite Orçamento
            </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

