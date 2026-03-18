"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BiMap, BiCheckCircle, BiTime } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UnitsSection() {
  const images = [
    { src: "/maquina.jpg", alt: "Fachada da Green Washer" },
    { src: "/maquina.jpg", alt: "Vista lateral" },
    { src: "/maquina.jpg", alt: "Entrada" },
    { src: "/maquina.jpg", alt: "Estrutura externa" },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const AUTOPLAY_TIME = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_TIME);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="unidades"
      className="py-20 bg-background text-white overflow-hidden px-10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header da Seção */}
        <header className="text-center mb-12" data-aos="fade-up">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C] block">
            Nossas Unidades
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            Onde <span className="gradient-text">estamos</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LADO ESQUERDO: INFO E MAPA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <article
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-2xl"
              data-aos="fade-right"
            >
              {/* Borda Lateral Gradiente */}
              <div className="absolute top-0 right-0 w-1.5 h-full rounded-r-3xl">
                <div className="w-full h-full bg-linear-to-b from-green-500 via-green-400 to-cyan-400 opacity-90"></div>
              </div>

              <div className="flex items-center gap-2 text-green-400 mb-4">
                <BiCheckCircle className="animate-pulse" size={16} />
                <span className="text-xs font-bold uppercase tracking-tighter">
                  Ativa
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                Unidade Central
              </h3>

              <div className="flex items-start gap-2 text-slate-300 text-sm mb-4">
                <BiMap size={20} className="text-green-500 shrink-0" />
                <p>
                  Rua Florianópolis, 431, Caçador
                  <br />
                  89500-000
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Operação completa com capacidade total de processamento.
              </p>
            </article>

            {/* Mapa */}
            <div
              className="rounded-3xl overflow-hidden border border-white/10 h-115 relative shadow-2xl bg-slate-900"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <iframe
                title="Localização Green Washer"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.444!2d-51.012!3d-26.774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ2JzI2LjQiUyA1McKwMDAnNDMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "grayscale(0.5) contrast(1.2) invert(0.9) hue-rotate(180deg)",
                }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* LADO DIREITO: GALERIA COMPLETA */}
          <aside
            className="lg:col-span-7 flex flex-col gap-4"
            data-aos="fade-left"
          >
            {/* Imagem Principal */}
            <figure className="relative rounded-3xl p-2 shadow-2xl shadow-[#19313B] bg-white/5 border border-white/10 w-full">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl max-h-140 bg-[#0B0F14]">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Indicadores Pills */}
              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-md border border-white/10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-6 bg-[#ffffff]"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </figure>

            {/* Grid de Miniaturas Embaixo da Imagem */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-24 overflow-hidden shadow-xl rounded-2xl border p-1 transition-all duration-300 ${
                    currentImage === index
                      ? "scale-105 border-[#00CCFF] bg-[#00CCFF]/10"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="h-full w-full overflow-hidden rounded-xl relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
