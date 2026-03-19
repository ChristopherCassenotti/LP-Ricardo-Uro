"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
  "Processos padronizados e certificados",
  "Equipe treinada e especializada",
  "Tecnologia para cada tipo de tecido",
  "Controle de qualidade rigoroso",
];

const images = [
  {
    src: "/greenWasher.webp",
    alt: "Fachada da Green Washer, lavanderia industrial e hospitalar especializada",
  },
  {
    src: "/about/2.webp",
    alt: "Enxoval hospitalar limpo, dobrado e embalado na operação da Green Washer",
  },
  {
    src: "/about/3.webp",
    alt: "Profissional da Green Washer operando painel de controle de equipamento de lavanderia industrial",
  },
  {
    src: "/about/4.webp",
    alt: "Processo de passagem e acabamento de peças em equipamento industrial da Green Washer",
  },
  {
    src: "/about/5.webp",
    alt: "Máquinas industriais de lavagem e secagem utilizadas na estrutura da Green Washer",
  },
];

const AUTOPLAY_TIME = 4000;

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="sobre"
      className="section-padding"
      aria-labelledby="sobre-titulo"
    >
      <div className="section-container px-10 py-10 md:px-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <header className="mb-2">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
                Quem somos
              </p>

              <h2
                id="sobre-titulo"
                className="font-display text-3xl font-bold md:text-5xl"
              >
                Experiência sólida em{" "}
                <span className="gradient-text">lavanderia profissional</span>
              </h2>
            </header>

            <p className="text-xl leading-relaxed text-[#D9D9D9] md:text-2xl">
              A Green Washer é uma lavanderia industrial e hospitalar
              especializada, com experiência sólida no atendimento a hospitais,
              clínicas, hotéis e empresas de grande porte. Trabalhamos com
              processos padronizados, equipe treinada, equipamentos
              profissionais e tecnologia adequada para cada tipo de tecido,
              garantindo higiene, segurança, acabamento de qualidade e entregas
              dentro do prazo.
            </p>

            <ul
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              aria-label="Principais diferenciais da Green Washer"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle
                    className="shrink-0 rounded-2xl border-2 border-green-700 bg-green-700 text-[20px] text-[#14181F]"
                    aria-hidden="true"
                  />
                  <span className="text-md font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            className="relative"
            aria-labelledby="galeria-green-washer"
          >
            <h3 id="galeria-green-washer" className="sr-only">
              Estrutura, equipamentos e operação da lavanderia industrial Green
              Washer
            </h3>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_110px] sm:items-center">
              <figure className="relative rounded-2xl p-2 shadow-2xl shadow-[#19313B]">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <figcaption className="sr-only">
                  Galeria com imagens da operação, dos equipamentos e da
                  estrutura da Green Washer.
                </figcaption>

                <div
                  className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md"
                  aria-label="Navegação da galeria principal"
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Mostrar imagem ${index + 1} da galeria`}
                      aria-pressed={currentImage === index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "w-6 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </figure>

              <div
                className="flex justify-center gap-4 sm:flex-col"
                aria-label="Miniaturas da galeria da Green Washer"
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Selecionar imagem ${index + 1} da galeria`}
                    aria-pressed={currentImage === index}
                    className={`overflow-hidden rounded-2xl border p-1.5 shadow-2xl shadow-[#19313B] transition-all duration-300 ${
                      currentImage === index
                        ? "scale-[1.02] border-primary"
                        : "border-transparent hover:border-white/20"
                    }`}
                  >
                    <div className="relative h-24 w-full overflow-hidden rounded-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="110px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-0.5 w-full bg-line-gradient opacity-50" />
      </div>
    </section>
  );
}
