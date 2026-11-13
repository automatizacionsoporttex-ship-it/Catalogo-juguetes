"use client";

import { useCallback, useMemo, useState } from "react";
import { tienda } from "@/config/tienda";
import type { Categoria, Producto } from "@/lib/tipos";
import { enlaceWhatsApp, normalizar } from "@/lib/utilidades";
import { FichaProducto } from "./FichaProducto";
import { IconoBuscar, IconoCerrar, IconoWhatsApp } from "./Iconos";
import { TarjetaProducto } from "./TarjetaProducto";

type Props = { productos: Producto[]; categorias: Categoria[] };

const TODOS = "todos";

export function Catalogo({ productos, categorias }: Props) {
  const [categoria, setCategoria] = useState(TODOS);
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState<string | null>(null);
  const cerrar = useCallback(() => setAbierto(null), []);

  // Solo se muestran los filtros de categorías que tienen productos.
  const filtros = useMemo(
    () => categorias.filter((c) => productos.some((p) => p.categoria === c.id)),
    [categorias, productos],
  );

  const visibles = useMemo(() => {
    const texto = normalizar(busqueda.trim());
    return productos
      .map((producto, indice) => ({ producto, indice }))
      .filter(({ producto }) => {
        if (categoria !== TODOS && producto.categoria !== categoria) return false;
        if (!texto) return true;
        return normalizar(`${producto.nombre} ${producto.descripcion ?? ""} ${producto.id}`).includes(texto);
      });
  }, [productos, categoria, busqueda]);

  const seleccionado = productos.findIndex((p) => p.id === abierto);

  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden bg-marino text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-24 size-72 rounded-full bg-cian/25 blur-2xl" />
          <div className="absolute -left-20 bottom-0 size-64 rounded-full bg-cian/10 blur-2xl" />
          <div className="absolute right-[8%] top-10 hidden select-none text-7xl opacity-90 md:block">🧸</div>
          <div className="absolute right-[22%] top-28 hidden select-none text-5xl opacity-90 md:block">🚗</div>
          <div className="absolute right-[5%] top-40 hidden select-none text-5xl opacity-90 md:block">🧩</div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cian">
            {tienda.hero.antetitulo}
          </p>
          <h1 className="mt-2 max-w-xl font-display text-[2.4rem] font-semibold leading-[1.05] sm:text-6xl">
            {tienda.hero.titulo}
          </h1>
          <p className="mt-3 max-w-md text-base text-white/80 sm:text-lg">
            {tienda.hero.subtitulo}
          </p>
        </div>
      </section>

      {/* Buscador, montado sobre el borde de la portada */}
      <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
        <label className="flex h-16 items-center gap-3 rounded-full bg-white px-5 shadow-[0_12px_32px_-12px_rgb(23_63_95/0.35)] ring-1 ring-marino/5 focus-within:ring-2 focus-within:ring-cian sm:max-w-xl">
          <IconoBuscar className="size-5 shrink-0 text-cian-osc" />
          <span className="sr-only">Buscar juguete</span>
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="¿Qué juguete buscas?"
            enterKeyHint="search"
            className="h-full min-w-0 flex-1 bg-transparent text-base font-semibold text-tinta outline-none placeholder:font-medium placeholder:text-tenue/70 [&::-webkit-search-cancel-button]:hidden"
          />
          {busqueda && (
            <button
              type="button"
              onClick={() => setBusqueda("")}
              aria-label="Borrar búsqueda"
              className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-tenue"
            >
              <IconoCerrar className="size-4" />
            </button>
          )}
        </label>
      </div>

      {/* Filtros por categoría */}
      <div className="sticky top-16 z-20 mt-4 bg-fondo/90 backdrop-blur-md">
        <div
          role="tablist"
          aria-label="Categorías"
          className="sin-barra mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3"
        >
          {[{ id: TODOS, nombre: "Todos", emoji: "✨" }, ...filtros].map((c) => {
            const activo = categoria === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setCategoria(c.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-extrabold outline-none transition focus-visible:ring-4 focus-visible:ring-cian/50 ${
                  activo
                    ? "bg-marino text-white shadow-md"
                    : "bg-white text-tinta ring-1 ring-marino/10 hover:ring-cian"
                }`}
              >
                <span aria-hidden="true">{c.emoji}</span>
                {c.nombre}
              </button>
            );
          })}
        </div>
      </div>

      {/* Productos */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-2" aria-live="polite">
        <p className="mb-3 text-sm font-bold text-tenue">
          {visibles.length} {visibles.length === 1 ? "juguete" : "juguetes"}
        </p>

        {visibles.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {visibles.map(({ producto, indice }) => (
              <TarjetaProducto
                key={producto.id}
                producto={producto}
                indice={indice}
                alAbrir={() => setAbierto(producto.id)}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-sm rounded-3xl bg-white p-8 text-center shadow-tarjeta">
            <p className="text-5xl" aria-hidden="true">🔎</p>
            <h2 className="mt-3 font-display text-xl font-semibold text-marino">
              No encontramos ese juguete
            </h2>
            <p className="mt-1 text-sm text-tenue">
              Escríbenos y te ayudamos a conseguirlo.
            </p>
            <a
              href={enlaceWhatsApp(
                busqueda.trim()
                  ? `Hola! Estoy buscando este juguete: ${busqueda.trim()}`
                  : tienda.mensajes.general,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-extrabold text-marino-osc"
            >
              <IconoWhatsApp className="size-4" />
              Preguntar por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setBusqueda("");
                setCategoria(TODOS);
              }}
              className="mt-3 block w-full text-sm font-bold text-cian-osc underline-offset-4 hover:underline"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}
      </section>

      {seleccionado >= 0 && (
        <FichaProducto
          producto={productos[seleccionado]}
          indice={seleccionado}
          categoria={categorias.find((c) => c.id === productos[seleccionado].categoria)}
          alCerrar={cerrar}
        />
      )}
    </>
  );
}
