"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { tienda } from "@/config/tienda";
import type { Categoria, Producto } from "@/lib/tipos";
import { enlaceWhatsApp, formatoPrecio, normalizar } from "@/lib/utilidades";
import { FichaProducto } from "./FichaProducto";
import { IconoBuscar, IconoCerrar, IconoWhatsApp } from "./Iconos";
import { TarjetaProducto } from "./TarjetaProducto";

type Props = { productos: Producto[]; categorias: Categoria[] };

const TODOS = "todos";

/** Lugares del carrusel de la portada: al frente, a la derecha y a la izquierda. */
const LUGARES = [
  { x: 0, escala: 1, giro: 2, z: 30 },
  { x: 80, escala: 0.66, giro: 7, z: 10 },
  { x: -80, escala: 0.66, giro: -7, z: 10 },
];
/** Milisegundos que cada producto pasa al frente. */
const RITMO = 3200;

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
  const destacados = tienda.hero.destacados
    .map((id) => productos.find((p) => p.id === id))
    .filter((p): p is Producto => Boolean(p?.imagen))
    .slice(0, 3);

  // Carrusel automático: cada cierto tiempo pasa al frente el siguiente producto.
  const [frente, setFrente] = useState(0);
  const [pausa, setPausa] = useState(false);
  const cantidad = destacados.length;
  useEffect(() => {
    if (pausa || abierto || cantidad < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const reloj = setInterval(() => setFrente((f) => (f + 1) % cantidad), RITMO);
    return () => clearInterval(reloj);
  }, [pausa, abierto, cantidad]);

  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden bg-marino text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 size-80 rounded-full bg-cian/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-[28rem] rounded-full bg-cian/25 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 pb-16 pt-8 sm:pb-20 md:grid-cols-[1fr_1.05fr] md:gap-10 md:pt-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cian">
              {tienda.hero.antetitulo}
            </p>
            <h1 className="mt-2 max-w-xl font-display text-[2.2rem] font-semibold leading-[1.08] sm:text-5xl">
              {tienda.hero.titulo}{" "}
              <span className="text-cian">{tienda.hero.tituloResaltado}</span>
            </h1>
            <p className="mt-3 max-w-md text-base text-white/80 sm:text-lg">
              {tienda.hero.subtitulo}
            </p>
            <a
              href="#catalogo"
              onClick={() => setCategoria(tienda.hero.botonCategoria)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-cian px-6 py-3 font-extrabold text-marino-osc shadow-[0_10px_24px_-8px_rgb(24_182_210/0.8)] transition hover:brightness-110 active:scale-[0.98]"
            >
              {tienda.hero.boton}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {destacados.length > 0 && (
            <div
              className="relative mx-auto h-56 w-full max-w-md sm:h-72 md:h-80 md:max-w-none"
              onMouseEnter={() => setPausa(true)}
              onMouseLeave={() => setPausa(false)}
              onFocus={() => setPausa(true)}
              onBlur={() => setPausa(false)}
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 aspect-square h-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-cian/35" />
                <div className="absolute left-1/2 top-1/2 aspect-square h-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cian/20" />
                <span className="absolute left-[3%] top-0 text-3xl text-white/80">❄</span>
                <span className="absolute right-[3%] top-[4%] text-xl text-amber-300">✦</span>
                <span className="absolute bottom-0 left-[20%] text-2xl text-white/70">❄</span>
              </div>
              {destacados.map((producto, i) => {
                const lugar = LUGARES[(i - frente + destacados.length) % destacados.length];
                return (
                  <button
                    key={producto.id}
                    type="button"
                    onClick={() => setAbierto(producto.id)}
                    aria-label={`Ver detalles de ${producto.nombre}`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${lugar.x}%) scale(${lugar.escala}) rotate(${lugar.giro}deg)`,
                      zIndex: lugar.z,
                    }}
                    className="group absolute left-1/2 top-[46%] w-[44%] outline-none transition-transform duration-700 ease-[cubic-bezier(0.3,0.7,0.2,1)]"
                  >
                    <span
                      style={{ animationDelay: `${i * -1.7}s` }}
                      className="relative block animate-flotar rounded-[1.6rem] bg-white p-1.5 shadow-[0_24px_48px_-14px_rgb(0_0_0/0.55)] group-focus-visible:ring-4 group-focus-visible:ring-cian sm:p-2"
                    >
                      <span className="relative block aspect-square overflow-hidden rounded-[1.2rem]">
                        <Image
                          src={producto.imagen!}
                          alt=""
                          fill
                          priority
                          sizes="(min-width: 768px) 260px, 45vw"
                          className="object-contain"
                        />
                      </span>
                      {producto.precio !== undefined && (
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cian px-3 py-1 font-display text-sm font-semibold text-marino-osc shadow-lg sm:text-base">
                          {formatoPrecio(producto.precio)}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
              {/* Indicador del carrusel */}
              <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 gap-1.5">
                {destacados.map((producto, i) => (
                  <button
                    key={producto.id}
                    type="button"
                    onClick={() => setFrente(i)}
                    aria-label={`Mostrar ${producto.nombre}`}
                    aria-current={i === frente}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === frente ? "w-6 bg-cian" : "w-1.5 bg-white/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
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
      <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-32 px-4 pb-16 pt-2" aria-live="polite">
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
