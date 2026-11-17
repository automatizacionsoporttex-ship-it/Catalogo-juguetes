/**
 * Fondo navideño de la portada: guirnalda de luces, bokeh cálido y nieve suave.
 * Usa los colores de marca (marino, cian, plata) con un acento dorado.
 * Todo es decorativo y determinista (sin Math.random) para no romper la hidratación.
 */

const COLORES_LUZ = ["#18b6d2", "#ffd27a", "#f3fbff", "#18b6d2", "#ffd27a", "#cfe9f2"];

/** Generador pseudoaleatorio fijo: siempre da los mismos valores. */
function semilla(n: number) {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  // redondeado: servidor y navegador deben producir exactamente el mismo valor
  return Math.round((x - Math.floor(x)) * 1000) / 1000;
}

const TRAMOS = 5; // arcos de la guirnalda
const LUCES_POR_TRAMO = 4;
const CAIDA = 30; // px que cuelga cada arco
const ARRIBA = 4; // px desde el borde superior

const luces = Array.from({ length: TRAMOS * LUCES_POR_TRAMO }, (_, i) => {
  const tramo = Math.floor(i / LUCES_POR_TRAMO);
  const t = ((i % LUCES_POR_TRAMO) + 0.5) / LUCES_POR_TRAMO;
  return {
    izquierda: Math.round(((tramo + t) / TRAMOS) * 1000) / 10,
    arriba: Math.round(ARRIBA + CAIDA * 4 * t * (1 - t)),
    // inclinación según la pendiente del arco, para que cuelguen naturales
    giro: Math.round((1 - 2 * t) * -22),
    color: COLORES_LUZ[i % COLORES_LUZ.length],
    retraso: -Math.round(semilla(i) * 400) / 100,
  };
});

const cable = Array.from({ length: TRAMOS }, (_, k) => {
  const x0 = (k / TRAMOS) * 1000;
  const x1 = ((k + 1) / TRAMOS) * 1000;
  return `M${x0} ${ARRIBA} Q${(x0 + x1) / 2} ${ARRIBA + CAIDA * 2} ${x1} ${ARRIBA}`;
}).join(" ");

const copos = Array.from({ length: 34 }, (_, i) => ({
  izquierda: Math.round(semilla(i + 100) * 1000) / 10,
  tamano: Math.round((1.5 + semilla(i + 200) * 2.5) * 10) / 10,
  duracion: Math.round(10 + semilla(i + 300) * 10),
  retraso: -Math.round(semilla(i + 400) * 20),
  opacidad: Math.round((0.25 + semilla(i + 500) * 0.45) * 100) / 100,
  deriva: Math.round((semilla(i + 600) - 0.5) * 60),
}));

const bokeh = [
  { x: "8%", y: "62%", t: 22, c: "#ffd27a", o: 0.18 },
  { x: "18%", y: "18%", t: 14, c: "#18b6d2", o: 0.22 },
  { x: "38%", y: "80%", t: 30, c: "#18b6d2", o: 0.12 },
  { x: "47%", y: "30%", t: 10, c: "#ffd27a", o: 0.25 },
  { x: "58%", y: "70%", t: 18, c: "#ffd27a", o: 0.16 },
  { x: "88%", y: "22%", t: 26, c: "#ffd27a", o: 0.16 },
  { x: "94%", y: "66%", t: 16, c: "#18b6d2", o: 0.22 },
  { x: "72%", y: "12%", t: 12, c: "#f3fbff", o: 0.18 },
];

export function FondoNavidad() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Profundidad: luz cálida detrás de los productos y viñeta en los bordes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_75%_55%,#1f5a82_0%,transparent_65%),radial-gradient(ellipse_60%_70%_at_0%_0%,#1b4b70_0%,transparent_60%)]" />
      <div className="absolute right-[8%] top-1/2 size-[26rem] -translate-y-1/2 rounded-full bg-[#ffd27a]/10 blur-[90px]" />
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-cian/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_40%,transparent_55%,rgb(9_30_48/0.55)_100%)]" />

      {/* Bokeh: luces desenfocadas */}
      {bokeh.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-[3px]"
          style={{
            left: b.x,
            top: b.y,
            width: b.t,
            height: b.t,
            background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
            opacity: b.o,
          }}
        />
      ))}

      {/* Nieve suave */}
      {copos.map((c, i) => (
        <span
          key={i}
          className="absolute -top-2 animate-nevar rounded-full bg-white"
          style={
            {
              left: `${c.izquierda}%`,
              width: c.tamano,
              height: c.tamano,
              opacity: c.opacidad,
              animationDuration: `${c.duracion}s`,
              animationDelay: `${c.retraso}s`,
              "--deriva": `${c.deriva}px`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Guirnalda de luces colgando del borde superior */}
      <svg
        className="absolute inset-x-0 top-0 h-12 w-full"
        viewBox={`0 0 1000 48`}
        preserveAspectRatio="none"
      >
        <path
          d={cable}
          fill="none"
          stroke="#0a2236"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {luces.map((l, i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2"
          style={{ left: `${l.izquierda}%`, top: l.arriba, rotate: `${l.giro}deg`, transformOrigin: "top center" }}
        >
          <span className="mx-auto block h-1 w-1.5 rounded-[1px] bg-[#7d8c99]" />
          <span
            className="block h-3 w-2 animate-titilar rounded-b-full rounded-t-[40%]"
            style={{
              background: l.color,
              boxShadow: `0 0 6px 1px ${l.color}, 0 0 18px 4px ${l.color}55`,
              animationDelay: `${l.retraso}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
