import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seudominio.com.br"),
  title: {
    default: "Green Washer | Lavanderia Industrial e Higienização Profissional",
    template: "%s | Green Washer",
  },
  description:
    "A Green Washer oferece soluções profissionais em lavanderia industrial, higienização e cuidados especializados com qualidade, eficiência e confiança.",
  keywords: [
    "Green Washer",
    "lavanderia industrial",
    "higienização profissional",
    "lavagem industrial",
    "lavanderia empresarial",
    "serviços de higienização",
    "limpeza profissional",
  ],
  applicationName: "Green Washer",
  authors: [{ name: "Green Washer" }],
  creator: "Green Washer",
  publisher: "Green Washer",
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Green Washer | Lavanderia Industrial e Higienização Profissional",
    description:
      "Soluções profissionais em lavanderia industrial, higienização e cuidados especializados com eficiência, qualidade e confiança.",
    url: "https://www.seudominio.com.br",
    siteName: "Green Washer",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/greenWasher.webp",
        width: 1200,
        height: 630,
        alt: "Green Washer - Lavanderia Industrial e Higienização Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Washer | Lavanderia Industrial e Higienização Profissional",
    description:
      "Serviços profissionais de lavanderia industrial e higienização com qualidade e confiança.",
    images: ["/greenWhaser.webp"],
  },
  icons: {
    icon: "/logoIcon.ico",
    shortcut: "/logoIcon.ico",
    apple: "/logoWasher.webp",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-white`}
      >
        {children}
      </body>
    </html>
  );
}