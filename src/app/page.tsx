import { Catalogo } from "@/components/Catalogo";
import { Encabezado } from "@/components/Encabezado";
import { PieDePagina } from "@/components/PieDePagina";
import { categorias } from "@/data/categorias";
import { productos } from "@/data/productos";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main>
        <Catalogo productos={productos} categorias={categorias} />
      </main>
      <PieDePagina />
    </>
  );
}
