import { tienda } from "@/config/tienda";
import type { Producto } from "@/lib/tipos";
import { enlaceWhatsApp } from "@/lib/utilidades";
import { IconoWhatsApp } from "./Iconos";

export function BotonPedir({ producto, grande }: { producto: Producto; grande?: boolean }) {
  const base =
    "flex w-full items-center justify-center gap-2 rounded-full font-extrabold transition active:scale-[0.98]";
  const medida = grande ? "px-6 py-4 text-base" : "px-3 py-2.5 text-sm";

  if (producto.agotado) {
    return (
      <span className={`${base} ${medida} cursor-not-allowed bg-slate-200 text-slate-500`}>
        No disponible
      </span>
    );
  }
  return (
    <a
      href={enlaceWhatsApp(tienda.mensajes.producto(producto.nombre, producto.id))}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${medida} bg-whatsapp text-marino-osc hover:brightness-95`}
    >
      <IconoWhatsApp className={grande ? "size-5" : "size-4"} />
      {grande ? "Pedir por WhatsApp" : "Pedir"}
    </a>
  );
}
