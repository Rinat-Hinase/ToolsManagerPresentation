import React, { useState, useEffect } from "react";
import {
  RectangleStackIcon,
  BoltIcon,
  UserIcon,
  BanknotesIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";
import CountUp from "react-countup";

// Hook para efecto de máquina de escribir
function useTypewriter(text, delay = 10, trigger = false) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!trigger) return setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, trigger]);

  return displayed;
}

const bloques = [
  {
    titulo: "Modelo de Estimación",
    valor: "COCOMO Básico",
    icono: RectangleStackIcon,
    texto: "Proyección basada en esfuerzo, tiempo y experiencia técnica.",
  },
  {
    titulo: "Tipo de Proyecto",
    valor: "Orgánico",
    icono: BoltIcon,
    texto: "Por baja complejidad y familiaridad del equipo.",
  },
  {
    titulo: "Equipo Estimado",
    valor: "2 Desarrolladores",
    icono: UserIcon,
    texto: "Asignados durante 6 meses continuos.",
  },
  {
    titulo: "Volumen Técnico",
    valor: "≈ 5,550 LOC",
    icono: ScaleIcon,
    texto: `function main() {\n  console.log("Calculando estimación...");\n  for (let i = 0; i < 5550; i++) {\n    console.log("Línea de código #" + i);\n  }\n}`,
  },
  {
    titulo: "Costo Estimado",
    valor: 36380,
    icono: BanknotesIcon,
    texto: "Cálculo basado en $2,500 mensuales por persona.",
    especial: true,
  },
];

export default function PlaneacionDeEstimaciones() {
  const [hoverCosto, setHoverCosto] = useState(false);
  const [hoverCodigo, setHoverCodigo] = useState(false);

  return (
    <div className="relative w-full px-6 py-16 bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      <div className="text-center mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Planeación de Estimaciones
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Evaluación técnica y económica de ToolsManager
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {bloques.map(({ titulo, valor, icono: Icon, texto, especial }, idx) => {
          const isCosto = especial;
          const isCodigo = titulo === "Volumen Técnico";
          const codigoAnimado = useTypewriter(texto, 10, hoverCodigo);

          return (
            <div
              key={idx}
              className={`relative p-5 rounded-xl border border-white/20 shadow-md transition-all duration-300 backdrop-blur-sm ${
                isCosto
                  ? "bg-teal-500 text-[#202a41]"
                  : "bg-white/10 text-white"
              }`}
              onMouseEnter={() => {
                if (isCosto) setHoverCosto(true);
                if (isCodigo) setHoverCodigo(true);
              }}
              onMouseLeave={() => {
                if (isCosto) setHoverCosto(false);
                if (isCodigo) setHoverCodigo(false);
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon
                  className={`w-7 h-7 ${
                    isCosto ? "text-[#202a41]" : "text-teal-300"
                  }`}
                />
                <h3 className="font-bold text-lg">{titulo}</h3>
              </div>

              <p
                className={`text-xl font-semibold ${
                  isCosto ? "text-[#202a41]" : "text-teal-100"
                }`}
              >
                {isCosto ? (
                  <>
                    $
                    {hoverCosto ? (
                      <CountUp
                        start={0}
                        end={valor}
                        duration={6}
                        separator=","
                        suffix=" MXN"
                      />
                    ) : (
                      <>0 MXN</>
                    )}
                  </>
                ) : (
                  valor
                )}
              </p>

              {isCodigo ? (
                <pre className="text-sm mt-2 font-mono whitespace-pre-wrap bg-black/20 text-green-300 p-3 rounded-md max-h-64 overflow-auto transition-all duration-300">
                  {codigoAnimado || "Pasa el mouse para ver el código..."}
                </pre>
              ) : (
                <p
                  className={`text-sm mt-1 ${
                    isCosto ? "text-[#1e293b]" : "text-gray-300"
                  }`}
                >
                  {texto}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-xs text-[#d3e1f1] text-center">
        AspireCode · Estimación realizada bajo estándar COCOMO
      </p>
    </div>
  );
}
