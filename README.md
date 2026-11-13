# Catálogo de juguetes

Catálogo de una sola vista, pensado para celular. Cada juguete tiene un botón que abre WhatsApp con el mensaje del pedido ya escrito. Hecho con Next.js, TypeScript y Tailwind CSS; se publica en Vercel sin configuración adicional.

## Uso local

```bash
npm install
npm run dev
```

## Dónde cambiar cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre del negocio, WhatsApp, textos de portada y mensajes | `src/config/tienda.ts` |
| Juguetes | `src/data/productos.ts` |
| Categorías (filtros) | `src/data/categorias.ts` |
| Colores y tipografías de marca | `src/app/globals.css` |
| Isotipo | `public/marca/isotipo.png` y `src/app/icon.png` |

## Agregar un juguete

1. Guarda la foto en `public/productos/`. Lo ideal: PNG sin fondo, cuadrada, de unos 1000 px, con nombre en minúsculas y sin espacios (`carro-rc.png`).
2. Agrega un bloque en `src/data/productos.ts`:

```ts
{
  id: "J013",                       // referencia única; se envía en el mensaje de WhatsApp
  nombre: "Carro a control remoto",
  categoria: "vehiculos",           // id de una categoría de categorias.ts
  precio: 129900,                   // opcional; sin precio muestra "Consultar precio"
  precioAntes: 159900,              // opcional; se muestra tachado
  edad: "6+ años",                  // opcional
  descripcion: "Texto corto.",      // opcional
  imagen: "/productos/carro-rc.png",
  etiqueta: "Nuevo",                // opcional: "Nuevo", "Oferta" o "Más vendido"
  agotado: false,                   // opcional
},
```

Los productos aparecen en el orden de la lista. Las categorías sin productos no se muestran como filtro.

Los productos que vienen en el archivo son **de ejemplo** y hay que reemplazarlos.
