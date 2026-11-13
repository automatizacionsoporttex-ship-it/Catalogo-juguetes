import type { Producto } from "@/lib/tipos";

/**
 * Productos tomados de la hoja de cálculo del catálogo (código, nombre y precio público).
 *
 * Para agregar la foto de un juguete:
 *  1. Guarda la foto (cuadrada, ~1000 px, fondo blanco) en /public/productos/
 *     con el código como nombre, por ejemplo 101.jpg
 *  2. Agrega aquí `imagen: "/productos/101.jpg"` al producto
 *
 * Mientras no tenga foto se muestra el emoji.
 * El orden de esta lista es el orden en que aparecen en el catálogo.
 */
export const productos: Producto[] = [
  {
    id: "T02",
    nombre: "Tren navideño con luz LED",
    categoria: "navidad",
    precio: 90000,
    imagen: "/productos/T02.jpg",
    emoji: "🚂",
    descripcion:
      "Adorno navideño en forma de locomotora con escena de Papá Noel en su interior. Se ilumina con luz LED cálida y tiene efecto de brillos, ideal para decorar la sala, la mesa o la entrada. En la foto: modelos verde, dorado y rojo.",
  },
  {
    id: "F01",
    nombre: "Farol navideño con luz LED",
    categoria: "navidad",
    precio: 90000,
    imagen: "/productos/F01.jpg",
    emoji: "🏮",
    descripcion:
      "Farol decorativo de estilo antiguo con luz LED y efecto de brillos. Funciona con pilas, así que se puede poner en cualquier lugar sin cables. En la foto: modelo con árbol de Navidad y modelo con pesebre.",
  },
  {
    id: "C03",
    nombre: "Carro navideño con luz LED",
    categoria: "navidad",
    precio: 90000,
    imagen: "/productos/C03.jpg",
    emoji: "🛻",
    descripcion:
      "Camioneta clásica con Papá Noel en la cabina y un pino en el platón. Se ilumina con luz LED, incluidos los faros, y tiene efecto de brillos. Un adorno llamativo para la mesa o el árbol.",
  },

  { id: "101", nombre: "Carro acrobático con control de manilla", categoria: "carros", precio: 125000, imagen: "/productos/101.jpg", emoji: "🚙" },
  { id: "102", nombre: "Carro Buggy todoterreno", categoria: "carros", precio: 85000, imagen: "/productos/102.jpg", emoji: "🏎️" },
  { id: "105", nombre: "Carro loco con luces", categoria: "carros", precio: 42000, imagen: "/productos/105.jpg", emoji: "🚗" },
  { id: "106", nombre: "Jeep 4x4", categoria: "carros", precio: 190000, imagen: "/productos/106.jpg", emoji: "🚙" },

  { id: "107", nombre: "Moto armable grande (1920 piezas)", categoria: "armables", precio: 165000, imagen: "/productos/107.jpg", emoji: "🏍️" },
  { id: "110", nombre: "Carro Fórmula armable", categoria: "armables", precio: 210000, imagen: "/productos/110.jpg", emoji: "🏎️" },
  { id: "113", nombre: "Carro armable pequeño", categoria: "armables", precio: 130000, imagen: "/productos/113.jpg", emoji: "🧱" },

  { id: "104", nombre: "Set de maquillaje doble cajón", categoria: "maquillaje", precio: 85000, imagen: "/productos/104.jpg", emoji: "💄" },
  { id: "109", nombre: "Set de maquillaje cajón sencillo", categoria: "maquillaje", precio: 68000, imagen: "/productos/109.jpg", emoji: "💅" },
  { id: "111", nombre: "Maquillaje Kuromi", categoria: "maquillaje", precio: 29000, imagen: "/productos/111.jpg", emoji: "🎀" },

  { id: "115", nombre: "Casa de muñecas Villa (106 piezas)", categoria: "casas", precio: 128000, imagen: "/productos/115.jpg", emoji: "🏠" },
  { id: "116", nombre: "Casa de muñecas Villa grande", categoria: "casas", precio: 135000, imagen: "/productos/116.jpg", emoji: "🏡" },

  { id: "103", nombre: "Cangrejo musical", categoria: "mas", precio: 65000, imagen: "/productos/103.jpg", emoji: "🦀" },
  { id: "108", nombre: "Guitarra con micrófono", categoria: "mas", precio: 90000, imagen: "/productos/108.jpg", emoji: "🎸" },
  { id: "112", nombre: "Kit recreativo de manillas", categoria: "mas", precio: 28000, imagen: "/productos/112.jpg", emoji: "📿" },
  { id: "117", nombre: "Combo reloj y audífonos", categoria: "mas", precio: 65000, imagen: "/productos/117.jpg", emoji: "⌚" },
];
