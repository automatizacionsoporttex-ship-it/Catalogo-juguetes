import type { Producto } from "@/lib/tipos";
import { BotonPedir } from "./BotonPedir";
import { Etiqueta } from "./Etiqueta";
import { ImagenProducto } from "./ImagenProducto";
import { Precio } from "./Precio";

type Props = {
  producto: Producto;
  indice: number;
  alAbrir: () => void;
};

export function TarjetaProducto({ producto, indice, alAbrir }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-tarjeta transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(23_63_95/0.4)]">
      <button
        type="button"
        onClick={alAbrir}
        className="flex flex-1 flex-col text-left outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-cian"
        aria-label={`Ver detalles de ${producto.nombre}`}
      >
        <ImagenProducto
          producto={producto}
          indice={indice}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
          prioridad={indice < 4}
        />
        <div className="flex flex-1 flex-col gap-1 px-3.5 pt-3">
          {producto.edad && (
            <span className="text-[0.7rem] font-bold uppercase tracking-wide text-cian-osc">
              {producto.edad}
            </span>
          )}
          <h3 className="line-clamp-2 text-[0.95rem] font-bold leading-snug text-tinta">
            {producto.nombre}
          </h3>
          <div className="mt-auto pt-1">
            <Precio producto={producto} />
          </div>
        </div>
      </button>
      <div className="absolute left-2.5 top-2.5">
        <Etiqueta producto={producto} />
      </div>
      <div className="p-3 pt-2.5">
        <BotonPedir producto={producto} />
      </div>
    </article>
  );
}
