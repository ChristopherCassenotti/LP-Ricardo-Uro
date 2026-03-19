"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtHome, setIsAtHome] = useState(true);

  const toggleMenu = () => setIsOpen((prev) => !prev);

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
      role="banner"
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b px-10 py-3 transition-all duration-300 sm:px-20 ${
        isAtHome
          ? "border-transparent bg-transparent"
          : "border-white/5 bg-background/40 backdrop-blur-md"
      }`}
    >
      <Link
        href="#home"
        onClick={(e) => handleScrollToSection(e, "#home")}
        aria-label="Ir para o início da página"
        className="shrink-0"
      >
        <Image
          src="/logoWasher.webp"
          alt="Logo da Green Washer"
          width={180}
          height={60}
          priority
          className="w-40 md:w-50"
        />
      </Link>

      <nav
        aria-label="Navegação principal"
        className="hidden gap-10 px-5 text-xl font-bold text-[#D2D2D2] lg:flex"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleScrollToSection(e, link.href)}
            className="transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="https://wa.me/554999132974"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Green Washer pelo WhatsApp"
        className="hidden cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 py-3 transition-all duration-300 hover:border-[#008F3C] hover:bg-[#008F3C] lg:flex"
      >
        <span className="flex min-w-40 max-w-50 items-center justify-center gap-2 px-5 text-md font-semibold xl:text-xl">
          <FaWhatsapp aria-hidden="true" />
          Fale conosco
        </span>
      </Link>

      <button
        type="button"
        onClick={toggleMenu}
        className="p-2 text-green-700 lg:hidden"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <IoMdClose size={38} /> : <IoMenu size={45} />}
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transform bg-[#14181F] transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          aria-label="Menu mobile"
          className="flex h-screen flex-col gap-6 bg-[#14181F] p-10 text-xl font-bold"
        >
          <button
            type="button"
            onClick={toggleMenu}
            className="self-end p-2 text-green-700"
            aria-label="Fechar menu mobile"
          >
            <IoMdClose size={32} />
          </button>

          <div className="text-sm text-gray-400">
            Menu
            <hr className="w-40" />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 text-sm text-gray-400">
            Contato
            <hr className="w-40" />
          </div>

          <Link
            href="https://wa.me/554999132974"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Green Washer pelo WhatsApp"
            className="flex w-fit rounded-4xl border-2 p-3"
          >
            <FaWhatsapp size={30} aria-hidden="true" />
          </Link>

          <div className="mt-2 text-sm text-gray-400">
            Redes sociais
            <hr className="w-40" />
          </div>

          <Link
            href="https://www.instagram.com/greenwashercacador/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Green Washer"
            className="flex w-fit rounded-4xl border-2 p-3"
          >
            <FaInstagram size={30} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}