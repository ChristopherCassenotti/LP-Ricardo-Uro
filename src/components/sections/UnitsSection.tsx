"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BiMap, BiCheckCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "/units/1.webp",
    alt: "Fachada da unidade da Green Washer em Caçador",
  },
  {
    src: "/units/2.webp",
    alt: "Vista lateral da estrutura da Green Washer",
  },
  {
    src: "/units/3.webp",
    alt: "Entrada da unidade da Green Washer",
  },
  {
    src: "/units/4.webp",
    alt: "Estrutura externa da Green Washer em Caçador",
  },
];

const AUTOPLAY_TIME = 4000;

export default function UnitsSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_TIME);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="unidades"
      className="overflow-hidden bg-background px-10 py-20 text-white"
      aria-labelledby="units-title"
    >
      <div className="container mx-auto max-w-7xl">
        <header className="mb-12 text-center" data-aos="fade-up">
          <p className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
            Nossas unidades
          </p>

          <h2 id="units-title" className="mt-2 text-4xl font-extrabold md:text-5xl">
            Onde <span className="gradient-text">estamos</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            A Green Washer está preparada para atender empresas de Caçador e
            região com estrutura profissional, logística organizada e alto padrão
            de higiene em lavanderia industrial e hospitalar.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md"
              data-aos="fade-right"
            >
              <div
                className="absolute right-0 top-0 h-full w-1.5 rounded-r-3xl"
                aria-hidden="true"
              >
                <div className="h-full w-full bg-linear-to-b from-green-500 via-green-400 to-cyan-400 opacity-90" />
              </div>

              <div className="mb-4 flex items-center gap-2 text-green-400">
                <BiCheckCircle className="animate-pulse" size={16} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-tighter">
                  Unidade ativa
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                Unidade Central
              </h3>

              <address className="mb-4 not-italic">
                <div className="flex items-start gap-2 text-sm text-slate-300">
                  <BiMap size={20} className="shrink-0 text-green-500" aria-hidden="true" />
                  <p>
                    Rua Florianópolis, 431
                    <br />
                    Caçador - SC, 89500-000
                  </p>
                </div>
              </address>

              <p className="text-sm leading-relaxed text-slate-300">
                Operação completa com estrutura preparada para processamento,
                higienização e logística de enxovais, uniformes e peças
                profissionais.
              </p>
            </div>

            <div
              className="relative h-115 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <iframe
                title="Mapa com a localização da Green Washer em Caçador"
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
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7" data-aos="fade-left">
            <figure className="relative w-full rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-[#19313B]">
              <div className="relative aspect-square w-full max-h-140 overflow-hidden rounded-2xl bg-[#0B0F14]">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <figcaption className="sr-only">
                Galeria de imagens da unidade da Green Washer em Caçador.
              </figcaption>

              <div
                className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md"
                aria-label="Indicadores da galeria de imagens"
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Mostrar imagem ${index + 1} da unidade`}
                    aria-pressed={currentImage === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-6 bg-[#ffffff]"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </figure>

            <div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              aria-label="Miniaturas da galeria da unidade"
            >
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Selecionar imagem ${index + 1} da galeria`}
                  aria-pressed={currentImage === index}
                  className={`relative h-24 overflow-hidden rounded-2xl border p-1 shadow-xl transition-all duration-300 ${
                    currentImage === index
                      ? "scale-105 border-[#00CCFF] bg-[#00CCFF]/10"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}