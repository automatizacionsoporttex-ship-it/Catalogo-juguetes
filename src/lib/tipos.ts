export type Etiqueta = "Nuevo" | "Oferta" | "Más vendido";

export interface Categoria {
  id: string;
  nombre: string;
  emoji: string;
}

export interface Producto {
  /** Referencia única. Se envía en el mensaje de WhatsApp. */
  id: string;
  nombre: string;
  /** Debe coincidir con el `id` de una categoría en src/data/categorias.ts */
  categoria: string;
  /** Precio en pesos, sin puntos. Si se omite se muestra "Consultar precio". */
  precio?: number;
  /** Precio anterior (tachado), para ofertas. */
  precioAntes?: number;
  /** Edad recomendada, por ejemplo "3+ años". */
  edad?: string;
  descripcion?: string;
  /** Ruta de la foto dentro de /public, por ejemplo "/productos/carro-rc.png". */
  imagen?: string;
  /** Se muestra mientras el producto no tenga foto. */
  emoji?: string;
  etiqueta?: Etiqueta;
  agotado?: boolean;
}
