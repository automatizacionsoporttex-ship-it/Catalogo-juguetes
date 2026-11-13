import Image from "next/image";
import type { Producto } from "@/lib/tipos";

/** Fondos suaves que se alternan entre tarjetas; lucen bien con fotos sin fondo. */
const FONDOS = [
  "from-sky-100 to-cyan-50",
  "from-amber-100 to-orange-50",
  "from-rose-100 to-pink-50",
  "from-emerald-100 to-teal-50",
  "from-violet-100 to-indigo-50",
  "from-yellow-100 to-lime-50",
];

type Props = {
  producto: Producto;
  /** Posición en la lista: define el color de fondo. */
  indice: number;
  /** Valor de `sizes` para que el navegador pida el tamaño justo. */
  sizes: string;
  grande?: boolean;
  prioridad?: boolean;
};

export function ImagenProducto({ producto, indice, sizes, grande, prioridad }: Props) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br ${FONDOS[indice % FONDOS.length]}`}
    >
      {producto.imagen ? (
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes={sizes}
          priority={prioridad}
          className="object-contain p-3 drop-shadow-[0_10px_12px_rgb(23_63_95/0.22)]"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`absolute inset-0 grid place-items-center drop-shadow-[0_8px_10px_rgb(23_63_95/0.2)] ${
            grande ? "text-[9rem]" : "text-[4.5rem] sm:text-[5.5rem]"
          }`}
        >
          {producto.emoji ?? "🎁"}
        </span>
      )}
      {producto.agotado && (
        <div className="absolute inset-0 grid place-items-center bg-white/60 backdrop-blur-[1px]">
          <span className="rounded-full bg-marino px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
            Agotado
          </span>
        </div>
      )}
    </div>
  );
}
