import type { Producto } from "@/lib/tipos";

/**
 * PRODUCTOS DE EJEMPLO — reemplazar por los reales.
 *
 * Para agregar un juguete:
 *  1. Guarda la foto (PNG sin fondo, cuadrada, ~1000 px) en /public/productos/
 *  2. Agrega un bloque aquí con `imagen: "/productos/nombre-del-archivo.png"`
 *
 * El orden de esta lista es el orden en que aparecen en el catálogo.
 */
export const productos: Producto[] = [
  {
    id: "J001",
    nombre: "Carro a control remoto 4x4",
    categoria: "vehiculos",
    precio: 129900,
    precioAntes: 159900,
    edad: "6+ años",
    descripcion:
      "Todoterreno con tracción en las cuatro ruedas, batería recargable y control de largo alcance.",
    emoji: "🚙",
    etiqueta: "Oferta",
  },
  {
    id: "J002",
    nombre: "Oso de peluche gigante",
    categoria: "peluches",
    precio: 89900,
    edad: "Todas las edades",
    descripcion: "Peluche extra suave de 80 cm, ideal para regalar.",
    emoji: "🧸",
    etiqueta: "Más vendido",
  },
  {
    id: "J003",
    nombre: "Bloques de construcción 120 piezas",
    categoria: "didacticos",
    precio: 74900,
    edad: "3+ años",
    descripcion:
      "Piezas grandes de colores para armar y desarmar. Estimula la creatividad y la motricidad.",
    emoji: "🧱",
  },
  {
    id: "J004",
    nombre: "Muñeca con accesorios",
    categoria: "munecas",
    precio: 64900,
    edad: "3+ años",
    descripcion: "Incluye vestidos, peine y bolso para horas de juego.",
    emoji: "👧",
    etiqueta: "Nuevo",
  },
  {
    id: "J005",
    nombre: "Gimnasio para bebé",
    categoria: "bebes",
    precio: 149900,
    edad: "0+ meses",
    descripcion:
      "Tapete acolchado con arco de actividades, sonajeros y espejo.",
    emoji: "👶",
  },
  {
    id: "J006",
    nombre: "Rompecabezas mapa del mundo",
    categoria: "didacticos",
    precio: 39900,
    edad: "5+ años",
    descripcion: "100 piezas de cartón resistente con ilustraciones de animales.",
    emoji: "🧩",
  },
  {
    id: "J007",
    nombre: "Balón de fútbol N.º 4",
    categoria: "aire-libre",
    precio: 45900,
    edad: "5+ años",
    descripcion: "Cosido a máquina, ideal para cancha sintética y parque.",
    emoji: "⚽",
  },
  {
    id: "J008",
    nombre: "Tren eléctrico con pista",
    categoria: "vehiculos",
    precio: 119900,
    edad: "4+ años",
    descripcion: "Locomotora con luces y sonido, tres vagones y pista ovalada.",
    emoji: "🚂",
    etiqueta: "Nuevo",
  },
  {
    id: "J009",
    nombre: "Dinosaurio T-Rex con sonido",
    categoria: "didacticos",
    precio: 79900,
    precioAntes: 94900,
    edad: "4+ años",
    descripcion: "Ruge, mueve la mandíbula y se iluminan los ojos.",
    emoji: "🦖",
    etiqueta: "Oferta",
  },
  {
    id: "J010",
    nombre: "Juego de mesa familiar",
    categoria: "juegos",
    precio: 54900,
    edad: "8+ años",
    descripcion: "De 2 a 6 jugadores. Partidas de 30 minutos.",
    emoji: "🎲",
  },
  {
    id: "J011",
    nombre: "Patineta scooter plegable",
    categoria: "aire-libre",
    edad: "6+ años",
    descripcion: "Manubrio ajustable, ruedas con luces y freno trasero.",
    emoji: "🛴",
  },
  {
    id: "J012",
    nombre: "Unicornio de peluche",
    categoria: "peluches",
    precio: 49900,
    edad: "Todas las edades",
    descripcion: "Peluche de 40 cm con crin de colores.",
    emoji: "🦄",
    agotado: true,
  },
];
