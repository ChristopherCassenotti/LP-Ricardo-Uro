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
    <header className="w-full flex flex-row items-center justify-around px-10">
      <img src="#" alt="Logo da Lavanderia Green Washer" />

      <nav className="hidden lg:flex">
        <Link href="">Home</Link>
        <Link href="">Diferenciais</Link>
        <Link href="">Processo</Link>
        <Link href="">Unidade</Link>
        <Link href="">FAQ</Link>
      </nav>

      {/*Botão de Whats PC*/}
      <Link href="#" className="hidden lg:flex">
        <button>
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
        {isOpen ? <IoMdClose size={38} /> : <IoMenu size={32} />}
      </button>

      <div
        className={`
        fixed inset-0 bg-[#14181F] z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:hidden
      `}
      >
        <div className="flex flex-col p-10 gap-6 text-xl font-bold">
          <button onClick={toggleMenu} className="self-end text-green-700 p-2">
            <IoMdClose size={32} />
          </button>
          <Link href="#sobre" onClick={toggleMenu}>
            Home
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
