import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/greenwashercacador/",
      label: "Instagram da Green Washer",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/554999132974",
      label: "WhatsApp da Green Washer",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="glow-top-black" aria-label="Rodapé da Green Washer">
      <div className="px-10 py-10 md:px-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2"
              aria-label="Voltar para o início"
            >
              <Image
                src="/logoWasher.webp"
                alt="Logo da Green Washer"
                width={200}
                height={80}
                className="w-40 md:w-50"
                priority={false}
              />
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Lavanderia industrial e hospitalar especializada em Caçador, com
              foco em higiene, padronização, qualidade e pontualidade para
              hospitais, clínicas, hotéis e empresas.
            </p>

            <nav
              aria-label="Redes sociais da Green Washer"
              className="flex justify-between gap-3 sm:justify-start"
            >
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-card flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 hover:border-primary/40"
                >
                  <Icon size={24} className="text-muted-foreground" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-4 font-display font-semibold">Contato</h2>

            <address className="space-y-3 not-italic">
              <a
                href="tel:+554999132974"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone size={14} aria-hidden="true" />
                (49) 9913-2974
              </a>

              <a
                href="mailto:contato@greenwasher.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={14} aria-hidden="true" />
                contato@greenwasher.com.br
              </a>

              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                Rua Florianópolis, 431, Caçador - SC, 89500-000
              </p>
            </address>
          </div>

          <div>
            <h2 className="mb-4 font-display font-semibold">Links</h2>

            <nav aria-label="Links internos do site" className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="my-10 h-0.5 w-full bg-line-gradient opacity-30" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Green Washer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}