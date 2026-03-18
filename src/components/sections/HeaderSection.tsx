"use client";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtHome, setIsAtHome] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtHome(window.scrollY <= 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(targetId);
    if (!element) return;

    const offset = targetId === "#home" ? 0 : 110;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex flex-row items-center justify-between px-10 py-3 sm:px-20 border-b z-50 transition-all duration-300 ${
        isAtHome
          ? "bg-transparent border-transparent"
          : "bg-background/40 backdrop-blur-md border-white/5"
      }`}
    >
      <img
        src="/logoWasher.webp"
        alt="Logo da Lavanderia Green Washer"
        className="w-40 md:w-50"
      />

      <nav className="hidden lg:flex gap-10 text-[#D2D2D2] font-bold text-xl px-5">
        <Link href="#home" onClick={(e) => handleScrollToSection(e, "#home")}>
          Home
        </Link>
        <Link href="#sobre" onClick={(e) => handleScrollToSection(e, "#sobre")}>
          Sobre
        </Link>
        <Link
          href="#diferenciais"
          onClick={(e) => handleScrollToSection(e, "#diferenciais")}
        >
          Diferenciais
        </Link>
        <Link
          href="#processo"
          onClick={(e) => handleScrollToSection(e, "#processo")}
        >
          Processo
        </Link>
        <Link
          href="#unidades"
          onClick={(e) => handleScrollToSection(e, "#unidades")}
        >
          Unidade
        </Link>
        <Link href="#faq" onClick={(e) => handleScrollToSection(e, "#faq")}>
          FAQ
        </Link>
      </nav>

      <Link
        href="http://wa.me/+554999132974"
        className="hidden lg:flex border-2 py-3 rounded-2xl hover:bg-[#008F3C] hover:border-[#008F3C] transition-all duration-300 cursor-pointer"
      >
        <button className="min-w-40 max-w-50 px-5  flex justify-center gap-2 md:text-md xl:text-xl font-semibold  items-center cursor-pointer">
          <FaWhatsapp />
          Fale Conosco
        </button>
      </Link>

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

          <Link href="#home" onClick={(e) => handleScrollToSection(e, "#home")}>
            Home
          </Link>
          <Link href="#sobre" onClick={(e) => handleScrollToSection(e, "#sobre")}>
            Sobre
          </Link>
          <Link
            href="#diferenciais"
            onClick={(e) => handleScrollToSection(e, "#diferenciais")}
          >
            Diferenciais
          </Link>
          <Link
            href="#processo"
            onClick={(e) => handleScrollToSection(e, "#processo")}
          >
            Processo
          </Link>
          <Link
            href="#unidades"
            onClick={(e) => handleScrollToSection(e, "#unidades")}
          >
            Unidade
          </Link>
          <Link href="#faq" onClick={(e) => handleScrollToSection(e, "#faq")}>
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
        </nav>
      </div>
    </header>
  );
}