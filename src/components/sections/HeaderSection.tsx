"use client";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full flex flex-row items-center justify-between px-10 sm:px-20 bg-background/40 backdrop-blur-md border-b border-white/5 z-50">
      <img
        src="/logoWasher.png"
        alt="Logo da Lavanderia Green Washer"
        className="w-40 md:w-50"
      />

      <nav className="hidden lg:flex gap-10 text-[#D2D2D2] font-bold text-xl">
        <Link href="#home">Home</Link>
        <Link href="#sobre">Sobre</Link>
        <Link href="#diferenciais">Diferenciais</Link>
        <Link href="#processo">Processo</Link>
        <Link href="#unidades">Unidade</Link>
        <Link href="#faq">FAQ</Link>
      </nav>

      {/*Botão de Whats PC*/}
      <Link
        href="http://wa.me/+554999132974"
        className="hidden lg:flex border-2 py-3 rounded-2xl hover:bg-[#008F3C] hover:border-[#008F3C] transition-all duration-300 cursor-pointer"
      >
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
        <nav className="flex flex-col bg-[#14181F] p-10 gap-6 text-xl h-screen font-bold">

          <button onClick={toggleMenu} className="self-end text-green-700 p-2">
            <IoMdClose size={32} />
          </button>

          <span className="text-sm text-gray-400">
            Menu <hr className="w-40" />
          </span>
          <Link href="#home" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#sobre" onClick={toggleMenu}>
            Sobre
          </Link>
          <Link href="#diferenciais" onClick={toggleMenu}>
            Diferenciais
          </Link>
          <Link href="#processo" onClick={toggleMenu}>
            Processo
          </Link>
          <Link href="#unidades" onClick={toggleMenu}>
            Unidade
          </Link>
          <Link href="#faq" onClick={toggleMenu}>
            FAQ
          </Link>

          <span className="text-sm text-gray-400 mt-2">
            Contato <hr className="w-40" />
          </span>
          <Link href="#" className="border-2 w-fit rounded-4xl flex p-3">
            <button>
              <FaWhatsapp size={30} />
            </button>
          </Link>

          <span className="text-sm text-gray-400 mt-2">
            Redes Sociais <hr className="w-40" />
          </span>
          <Link href="#" className="border-2 w-fit rounded-4xl flex p-3">
            <button>
              <FaInstagram size={30} />
            </button>
          </Link>
          <Link href="#" className="border-2 w-fit rounded-4xl flex p-3">
            <button>
              <FaFacebook size={30} />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
