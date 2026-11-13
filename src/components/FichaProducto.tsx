"use client";

import { useEffect, useRef } from "react";
import type { Categoria, Producto } from "@/lib/tipos";
import { BotonPedir } from "./BotonPedir";
import { Etiqueta } from "./Etiqueta";
import { IconoCerrar } from "./Iconos";
import { ImagenProducto } from "./ImagenProducto";
import { Precio } from "./Precio";

type Props = {
  producto: Producto;
  indice: number;
  categoria?: Categoria;
  alCerrar: () => void;
};

/** Ficha de detalle: hoja inferior en celular, ventana centrada en pantallas grandes. */
export function FichaProducto({ producto, indice, categoria, alCerrar }: Props) {
  const botonCerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const conTecla = (e: KeyboardEvent) => e.key === "Escape" && alCerrar();
    document.addEventListener("keydown", conTecla);
    const desbordeAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    botonCerrar.current?.focus();
    return () => {
      document.removeEventListener("keydown", conTecla);
      document.body.style.overflow = desbordeAnterior;
    };
  }, [alCerrar]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-marino-osc/60 backdrop-blur-sm animate-aparecer sm:items-center sm:p-6"
      onClick={alCerrar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={producto.nombre}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl animate-subir sm:max-w-3xl sm:flex-row sm:rounded-[2rem]"
      >
        <button
          ref={botonCerrar}
          type="button"
          onClick={alCerrar}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-marino shadow-md outline-none transition hover:bg-white focus-visible:ring-4 focus-visible:ring-cian"
        >
          <IconoCerrar className="size-5" />
        </button>

        <div className="relative shrink-0 sm:w-1/2">
          <ImagenProducto producto={producto} indice={indice} sizes="(min-width: 640px) 384px, 100vw" grande />
          <div className="absolute left-4 top-4">
            <Etiqueta producto={producto} />
          </div>
        </div>

        <div className="flex flex-col gap-3 overflow-y-auto p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:w-1/2 sm:justify-center sm:p-8">
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            {categoria && (
              <span className="rounded-full bg-cian-suave px-3 py-1 text-cian-osc">
                {categoria.emoji} {categoria.nombre}
              </span>
            )}
            {producto.edad && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-tenue">
                {producto.edad}
              </span>
            )}
          </div>
          <h2 className="font-display text-2xl font-semibold leading-tight text-marino">
            {producto.nombre}
          </h2>
          <Precio producto={producto} grande />
          {producto.descripcion && (
            <p className="leading-relaxed text-tenue">{producto.descripcion}</p>
          )}
          <p className="text-xs font-semibold text-tenue">Ref. {producto.id}</p>
          <div className="mt-1">
            <BotonPedir producto={producto} grande />
          </div>
        </div>
      </div>
    </div>
  );
}
