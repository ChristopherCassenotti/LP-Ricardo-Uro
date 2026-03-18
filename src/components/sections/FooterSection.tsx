import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/greenwashercacador/" },
    { Icon: FaWhatsapp, href: "http://wa.me/+554999132974" },
    { Icon: Facebook, href: "https://facebook.com/seu-perfil" },
  ];
  return (
    <footer className="glow-top-black">
      <div className="px-20 py-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logoWasher.png"
                alt="Logo da Lavanderia Green Washer"
                className="w-40 md:w-50"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Lavanderia industrial e hospitalar especializada. Higiene,
              qualidade e pontualidade em cada ciclo de lavagem.
            </p>
            <div className="flex gap-3 justify-between sm:justify-start">
              {socialLinks.map(({Icon, href}, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/40 transition-colors duration-300"
                >
                  <Icon size={24} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+554999132974"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} />
                (49) 9913-2974
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} />
                contato@greenwasher.com.br
              </span>
              <span className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Rua Florianópolis, 431, Caçador - 89500-000
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <div className="space-y-3">
              {[
                "Home",
                "Sobre",
                "Diferenciais",
                "Processo",
                "Unidades",
                "FAQ",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full bg-line-gradient opacity-30 my-10" />

        <p className=" text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Green Washer. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
