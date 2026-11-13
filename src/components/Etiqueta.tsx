import type { Producto } from "@/lib/tipos";
import { descuento } from "@/lib/utilidades";

const ESTILOS = {
  Nuevo: "bg-cian text-marino-osc",
  Oferta: "bg-oferta text-white",
  "Más vendido": "bg-marino text-white",
} as const;

export function Etiqueta({ producto }: { producto: Producto }) {
  if (!producto.etiqueta) return null;
  const esOferta =
    producto.etiqueta === "Oferta" && producto.precio && producto.precioAntes;
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide shadow-sm ${ESTILOS[producto.etiqueta]}`}
    >
      {esOferta
        ? `-${descuento(producto.precio!, producto.precioAntes!)}%`
        : producto.etiqueta}
    </span>
  );
}
