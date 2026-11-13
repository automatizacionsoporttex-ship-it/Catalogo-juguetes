/**
 * Configuración general del catálogo.
 * Todo lo que cambia de un cliente a otro vive aquí: no hay que tocar componentes.
 */
export const tienda = {
  /** Nombre del negocio. Si se deja vacío, el encabezado muestra solo "Catálogo de juguetes". */
  nombre: "",
  tituloCatalogo: "Catálogo de juguetes",
  descripcion:
    "Mira nuestro catálogo de juguetes y haz tu pedido por WhatsApp en segundos.",

  /** WhatsApp con indicativo de país, sin + ni espacios. */
  whatsapp: "573142693617",
  whatsappVisible: "+57 314 269 3617",

  hero: {
    antetitulo: "Catálogo 2026",
    titulo: "Juguetes que hacen sonreír",
    subtitulo: "Elige tu favorito y pídelo por WhatsApp.",
  },

  mensajes: {
    /** Mensaje del botón general de WhatsApp. */
    general: "Hola! Vi el catálogo de juguetes y quiero más información",
    /** Mensaje al pedir un juguete. Se completa con el nombre y la referencia. */
    producto: (nombre: string, ref: string) =>
      `Hola! Me interesa este juguete del catálogo: ${nombre} (ref. ${ref})`,
  },

  notaLegal: "Precios y disponibilidad sujetos a cambio sin previo aviso.",
} as const;
