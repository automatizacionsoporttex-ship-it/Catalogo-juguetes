import Image from "next/image";
import { tienda } from "@/config/tienda";
import { enlaceWhatsApp } from "@/lib/utilidades";
import { IconoWhatsApp } from "./Iconos";

export function Encabezado() {
  return (
    <header className="sticky top-0 z-30 bg-marino text-white shadow-[0_1px_0_rgb(255_255_255/0.08)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/marca/isotipo.png"
            alt=""
            width={44}
            height={44}
            priority
            className="size-11 shrink-0 rounded-full ring-2 ring-white/15"
          />
          <span className="min-w-0 truncate font-display text-lg font-semibold leading-tight">
            {tienda.tituloCatalogo}
          </span>
        </a>
        <a
          href={enlaceWhatsApp(tienda.mensajes.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="flex size-11 shrink-0 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-extrabold text-marino-osc transition hover:brightness-95 sm:w-auto sm:px-4"
        >
          <IconoWhatsApp className="size-5.5 sm:size-4.5" />
          <span className="hidden sm:inline">{tienda.whatsappVisible}</span>
        </a>
      </div>
    </header>
  );
}
