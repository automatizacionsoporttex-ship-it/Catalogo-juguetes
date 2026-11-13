import { tienda } from "@/config/tienda";

/** 129900 -> "$129.900" */
export function formatoPrecio(valor: number): string {
  return "$" + String(Math.round(valor)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** Porcentaje de descuento entre el precio anterior y el actual. */
export function descuento(precio: number, precioAntes: number): number {
  return Math.round((1 - precio / precioAntes) * 100);
}

/** Enlace de WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${tienda.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Texto sin tildes ni mayúsculas, para que la búsqueda sea tolerante. */
export function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}
