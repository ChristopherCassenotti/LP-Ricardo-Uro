"use client";

import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full flex flex-row items-center justify-between px-10 sm:px-20 py-5 bg-background/40 backdrop-blur-md border-b border-white/5 z-50">
      <img src="/logoWasher.png" alt="Logo da Lavanderia Green Washer" className="w-40 md:w-50"/>

      <nav className="hidden lg:flex gap-10 text-[#D2D2D2] font-bold text-xl">
        <Link href="">Home</Link>
        <Link href="#sobre">Sobre</Link>
        <Link href="">Diferenciais</Link>
        <Link href="">Processo</Link>
        <Link href="">Unidade</Link>
        <Link href="">FAQ</Link>
      </nav>

      {/*Botão de Whats PC*/}
      <Link href="http://wa.me/+554999132974" className="hidden lg:flex border-2 py-3 rounded-2xl hover:bg-[#008F3C] hover:border-[#008F3C] transition-all duration-300 cursor-pointer">
        <button className="w-50 flex justify-center gap-2 text-xl items-center cursor-pointer">
          <FaWhatsapp />
          Fale Conosco
        </button>
      </Link>

      {/*Botão de Menu Mobile*/}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-green-700"
        aria-label="Abrir menu"
      >
        {isOpen ? <IoMdClose size={38} /> : <IoMenu size={45} />}
      </button>

      <div
        className={`
        fixed inset-0 bg-[#14181F] z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:hidden
      `}
      >
        <div className="flex flex-col bg-brand-dark p-10 gap-6 text-xl h-screen font-bold">
          <button onClick={toggleMenu} className="self-end text-green-700 p-2">
            <IoMdClose size={32} />
          </button>
          <Link href="#Home" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#sobre" onClick={toggleMenu}>
            Sobre
          </Link>
          <Link href="#servicos" onClick={toggleMenu}>
            Diferenciais
          </Link>
          <Link href="#unidades" onClick={toggleMenu}>
            Processo
          </Link>
          <Link href="#contato" onClick={toggleMenu}>
            Unidade
          </Link>
          <Link href="#contato" onClick={toggleMenu}>
            FAQ
          </Link>

          <Link href="#" className="">
            <button>
              <FaWhatsapp size={30} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
