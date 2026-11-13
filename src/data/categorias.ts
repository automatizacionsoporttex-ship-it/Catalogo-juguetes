import type { Categoria } from "@/lib/tipos";

/** El orden de esta lista es el orden de los filtros en pantalla. */
export const categorias: Categoria[] = [
  { id: "bebes", nombre: "Bebés", emoji: "🍼" },
  { id: "munecas", nombre: "Muñecas", emoji: "🪆" },
  { id: "vehiculos", nombre: "Carros", emoji: "🚗" },
  { id: "didacticos", nombre: "Didácticos", emoji: "🧩" },
  { id: "peluches", nombre: "Peluches", emoji: "🧸" },
  { id: "aire-libre", nombre: "Aire libre", emoji: "⚽" },
  { id: "juegos", nombre: "Juegos de mesa", emoji: "🎲" },
];
