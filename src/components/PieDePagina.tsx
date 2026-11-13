import Image from "next/image";
import { tienda } from "@/config/tienda";
import { enlaceWhatsApp } from "@/lib/utilidades";
import { IconoWhatsApp } from "./Iconos";

const PASOS = [
  { emoji: "👀", titulo: "Elige", texto: "Mira el catálogo y toca el juguete que te guste." },
  { emoji: "💬", titulo: "Pide", texto: "Toca Pedir y se abre WhatsApp con tu mensaje listo." },
  { emoji: "🎁", titulo: "Recibe", texto: "Coordinamos contigo el pago y la entrega." },
];

export function PieDePagina() {
  return (
    <footer className="bg-marino text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-semibold">¿Cómo pedir?</h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-3">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="flex items-start gap-3 rounded-3xl bg-white/[0.07] p-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-2xl" aria-hidden="true">
                {paso.emoji}
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">
                  <span className="text-cian">{i + 1}.</span> {paso.titulo}
                </span>
                <span className="block text-sm text-white/75">{paso.texto}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image src="/marca/isotipo.png" alt="" width={48} height={48} className="size-12 rounded-full ring-2 ring-white/15" />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold">
                {tienda.nombre || tienda.tituloCatalogo}
              </p>
              <p className="text-xs text-white/60">{tienda.notaLegal}</p>
            </div>
          </div>
          <a
            href={enlaceWhatsApp(tienda.mensajes.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-extrabold text-marino-osc"
          >
            <IconoWhatsApp className="size-5" />
            {tienda.whatsappVisible}
          </a>
        </div>
      </div>
    </footer>
  );
}
