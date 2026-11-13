import type { Producto } from "@/lib/tipos";
import { formatoPrecio } from "@/lib/utilidades";

export function Precio({ producto, grande }: { producto: Producto; grande?: boolean }) {
  if (producto.precio === undefined) {
    return (
      <p className={`font-bold text-cian-osc ${grande ? "text-lg" : "text-sm"}`}>
        Consultar precio
      </p>
    );
  }
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className={`font-display font-semibold text-marino ${grande ? "text-3xl" : "text-xl"}`}>
        {formatoPrecio(producto.precio)}
      </span>
      {producto.precioAntes && (
        <s className={`text-tenue ${grande ? "text-base" : "text-xs"}`}>
          {formatoPrecio(producto.precioAntes)}
        </s>
      )}
    </p>
  );
}
