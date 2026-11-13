import type { Categoria } from "@/lib/tipos";

/** El orden de esta lista es el orden de los filtros en pantalla. */
export const categorias: Categoria[] = [
  { id: "navidad", nombre: "Navidad", emoji: "🎄" },
  { id: "carros", nombre: "Carros", emoji: "🚗" },
  { id: "armables", nombre: "Armables", emoji: "🧱" },
  { id: "maquillaje", nombre: "Maquillaje", emoji: "💄" },
  { id: "casas", nombre: "Casas de muñecas", emoji: "🏠" },
  { id: "mas", nombre: "Más juguetes", emoji: "🎁" },
];
