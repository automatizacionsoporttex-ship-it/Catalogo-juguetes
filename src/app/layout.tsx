import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { tienda } from "@/config/tienda";
import "./globals.css";

const titulo = Fredoka({ variable: "--font-titulo", subsets: ["latin"] });
const cuerpo = Nunito({ variable: "--font-cuerpo", subsets: ["latin"] });

const tituloPagina = tienda.nombre
  ? `${tienda.tituloCatalogo} | ${tienda.nombre}`
  : tienda.tituloCatalogo;

export const metadata: Metadata = {
  title: tituloPagina,
  description: tienda.descripcion,
  openGraph: {
    title: tituloPagina,
    description: tienda.descripcion,
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#173f5f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${titulo.variable} ${cuerpo.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
