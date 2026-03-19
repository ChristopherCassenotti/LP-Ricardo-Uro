"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function StructureSection() {
  return (
    <section
      id="estrutura"
      aria-labelledby="structure-title"
      className="flex w-full flex-col items-center overflow-hidden bg-[#14181F] px-10 py-10"
    >
      <header className="mb-12 px-6 text-center" data-aos="fade-up">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
          Nossa estrutura
        </p>

        <h2
          id="structure-title"
          className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          Conheça nossa <span className="text-[#02C2F2]">estrutura</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Veja mais da estrutura da Green Washer, preparada para atender com
          eficiência operações de lavanderia industrial e hospitalar com alto
          padrão de higiene e organização.
        </p>
      </header>

      <div
        data-aos="zoom-in"
        className="glow-center relative aspect-video w-[92%] max-w-4xl overflow-hidden rounded-[28px] bg-[#181D23]"
        aria-labelledby="structure-video-title"
      >
        <Image
          src="/greenWasher.webp"
          alt="Estrutura física da Green Washer, lavanderia industrial e hospitalar"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover opacity-25 blur-xs"
        />

        <div
          className="absolute inset-0 bg-[#14181F]/40"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 opacity-30 backdrop-blur-md md:h-24 md:w-24"
            aria-hidden="true"
          >
            <FaPlay className="ml-1 text-2xl text-[#008F3C] md:text-3xl" />
          </div>

          <h3
            id="structure-video-title"
            className="text-xl font-bold tracking-tight text-[#008F3C] drop-shadow-sm md:text-4xl"
          >
            Vídeo disponível em breve
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
            Em breve, você poderá conhecer melhor nossa operação, estrutura e
            processos de higienização profissional.
          </p>
        </div>
      </div>

      <div className="mt-20 h-0.5 w-full bg-line-gradient opacity-30" />
    </section>
  );
}