"use client";

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
    src: "/bo.png",
    alt: "Fachada da Green Washer Lavanderia Industrial e Hospitalar",
  },
  {
    src: "/bo.png",
    alt: "Vista lateral da unidade da Green Washer",
  },
  {
    src: "/bo.png",
    alt: "Entrada da Green Washer Lavanderia",
  },
  {
    src: "/bo.png",
    alt: "Estrutura externa da Green Washer Lavanderia Industrial",
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
      <div className="section-container p-10 md:p-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <article data-aos="fade-right">
            <header className="mb-6">
              <p className="mb-3 text-md text-[#008F3C] font-medium uppercase tracking-widest text-primary">
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

            <p className="mb-8 leading-relaxed text-[#D9D9D9] text-xl md:text-2xl text-muted-foreground">
              A Green Washer é uma lavanderia industrial e hospitalar
              especializada, com experiência sólida no mercado. Atendemos
              hospitais, clínicas, hotéis e empresas de grande porte com
              processos padronizados, equipe treinada e tecnologia apropriada
              para cada tipo de tecido ou nível de contaminação. Cuidamos de
              cada peça com higiene rigorosa, controle de qualidade e entregas
              realizadas no prazo.
            </p>

            <ul
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              aria-label="Diferenciais da Green Washer"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle
                    className="shrink-0 text-[20px] bg-green-700 border-2 border-green-700 text-[#14181F] rounded-2xl"
                    aria-hidden="true"
                  />
                  <span className="text-md font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <aside
            data-aos="fade-left"
            className="relative"
            aria-label="Galeria de imagens da Green Washer"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_110px] sm:items-center">
              <figure className="relative rounded-2xl p-2 shadow-2xl shadow-[#19313B]">
                {" "}
                {/* Adicionado relative aqui */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                  <img
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className="h-full w-full object-cover transition-all duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <figcaption className="sr-only ">
                  Imagem em destaque da estrutura da Green Washer.
                </figcaption>
                {/* Indicadores Responsivos */}
                <div
                  className="absolute bottom-6  left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md"
                  aria-label="Indicadores do carrossel"
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Mostrar imagem ${index + 1}`}
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
                className="flex gap-4 justify-center sm:flex-col"
                aria-label="Miniaturas da galeria"
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Selecionar imagem ${index + 1}`}
                    aria-pressed={currentImage === index}
                    className={`overflow-hidden shadow-2xl shadow-[#19313B] rounded-2xl border p-1.5 transition-all duration-300 ${
                      currentImage === index
                        ? "scale-[1.02] border-primary"
                        : "border-transparent hover:border-white/20"
                    }`}
                  >
                    <div className="h-24 w-full overflow-hidden rounded-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

        </div>
        <div className="h-0.5 w-full bg-line-gradient opacity-50 mt-10" />
      </div>
    </section>
  );
}
