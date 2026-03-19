"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const partners = [
  { src: "/logoWasher.webp", alt: "Logo da Green Washer" },
  { src: "/logoWasher.webp", alt: "Logo da Green Washer" },
  { src: "/logoWasher.webp", alt: "Logo da Green Washer" },
  { src: "/logoWasher.webp", alt: "Logo da Green Washer" },
  { src: "/logoWasher.webp", alt: "Logo da Green Washer" },
];

export default function PartnersSection() {
  return (
    <section
      className="flex w-full flex-col items-center overflow-hidden bg-background py-20"
      aria-labelledby="partners-title"
    >
      <header className="mb-14 px-6 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
          Confiança comprovada
        </p>

        <h2
          id="partners-title"
          className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          Empresas que confiam na{" "}
          <span className="gradient-text">Green Washer</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Nossa lavanderia industrial e hospitalar atende empresas que buscam
          padronização, higiene rigorosa, eficiência operacional e confiança em
          cada processo.
        </p>
      </header>

      <div
        className="relative w-full px-10 md:px-20"
        aria-label="Carrossel de empresas e marcas atendidas pela Green Washer"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          className="linear-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={`${partner.alt}-${index}`}
              className="flex items-center justify-center"
            >
              <div className="py-5 opacity-70 grayscale transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={300}
                  height={140}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#14181f] to-transparent md:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#14181f] to-transparent md:w-32"
          aria-hidden="true"
        />
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}