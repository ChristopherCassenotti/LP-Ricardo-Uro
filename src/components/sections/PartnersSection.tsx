"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function PartnersSection() {
  const partners = [
    { src: "/bo.png", alt: "Parceiro 1" },
    { src: "/bo.png", alt: "Parceiro 2" },
    { src: "/bo.png", alt: "Parceiro 3" },
    { src: "/bo.png", alt: "Parceiro 4" },
    { src: "/bo.png", alt: "Parceiro 5" },
  ];

  return (
    <section className="w-full bg-background py-20 flex flex-col items-center overflow-hidden">
      {/* Títulos */}
      <header className="mb-14 text-center px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#008F3C]">
          Confiança Comprovada
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
          Empresas que confiam na{" "}
          <span className="gradient-text">Green Washer</span>
        </h2>
      </header>

      {/* Carrossel */}
      <div className="w-full max-w-7xl px-10">
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
              key={index}
              className="flex justify-center items-center"
            >
              <div className="transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={300}
                  height={300}
                  className="w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Linha inferior degradê */}
      <div className=" h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}
