"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa"; // Importando ícone de biblioteca

export default function StructureSection() {
  return (
    <section 
      aria-labelledby="structure-title" 
      className="w-full bg-[#14181F] py-24 flex flex-col items-center overflow-hidden px-10"
    >
      {/* Cabeçalho Semântico */}
      <header className="mb-12 text-center px-6" data-aos="fade-up">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#008F3C]">
          Nossa Estrutura
        </p>
        <h2 
          id="structure-title"
          className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Conheça nossa <span className="text-[#02C2F2]">estrutura</span>
        </h2>
      </header>

      {/* Container com Sombra Centralizada e Borda Verde */}
      <article 
        data-aos="zoom-in"
        className="relative w-[92%] max-w-4xl aspect-video rounded-[28px] overflow-hidden glow-center bg-[#181D23]"
      >
        {/* Imagem de Fundo (Placeholder) */}
        <Image
          src="/bo.png" 
          alt="Visão geral da estrutura física da lavanderia Green Washer"
          fill
          priority
          className="object-cover opacity-25"
          sizes="(max-w-768px) 100vw, 80vw"
        />

        {/* Camada de Cor / Overlay */}
        <div className="absolute inset-0 bg-[#14181F]/40" />

        {/* Conteúdo Centralizado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          
          {/* Círculo do Play com Ícone da Biblioteca */}
          <div className="w-16 h-16 md:w-24 md:h-24 mb-6 rounded-full bg-white/5 backdrop-blur-md border opacity-30 border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 group cursor-pointer">
             <FaPlay className="text-[#008F3C] text-2xl md:text-3xl ml-1 transition-transform group-hover:scale-105" />
          </div>
          
          <h3 className="absolute text-[#008F3C] text-xl md:text-4xl font-bold tracking-tight text-center drop-shadow-sm">
            Vídeo disponível em breve!
          </h3>
        </div>
      </article>

      {/* Linha de rodapé com o degradê de referência */}
      <div className="h-0.5 w-full bg-line-gradient opacity-30 mt-20" />
    </section>
  );
}