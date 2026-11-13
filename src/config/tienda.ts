/**
 * Configuración general del catálogo.
 * Todo lo que cambia de un cliente a otro vive aquí: no hay que tocar componentes.
 */
export const tienda = {
  /** Nombre del negocio. Si se deja vacío, el encabezado muestra solo "Catálogo de juguetes". */
  nombre: "Soporttex",
  tituloCatalogo: "Catálogo de juguetes",
  descripcion:
    "Mira nuestro catálogo de juguetes y haz tu pedido por WhatsApp en segundos.",

  /** WhatsApp con indicativo de país, sin + ni espacios. */
  whatsapp: "573142693617",
  whatsappVisible: "+57 314 269 3617",

  hero: {
    antetitulo: "Especial de Navidad",
    titulo: "En Soporttex tenemos los mejores",
    /** Parte final del título, resaltada en color. */
    tituloResaltado: "adornos navideños",
    subtitulo: "Faroles, trenes y carros con luz LED para llenar tu casa de Navidad. Toca uno para conocerlo.",
    boton: "Ver adornos",
    /** Categoría que se abre al tocar el botón de la portada ("todos" para ver todo). */
    botonCategoria: "navidad",
    /** Códigos de los 3 productos que se muestran en la portada (deben tener foto). */
    destacados: ["T02", "F01", "C03"],
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
