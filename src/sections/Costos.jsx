// src/sections/Costos.jsx
import React, { useState } from "react";
import CountUp from "react-countup";
import {
  Squares2X2Icon,
  PencilIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const fases = [
  {
    titulo: "Análisis y Viabilidad",
    descripcion:
      "Se define el alcance, se identifican los requisitos principales y se evalúa la viabilidad.",
    icono: Squares2X2Icon,
    costo: 2183,
  },
  {
    titulo: "Diseño del Sistema",
    descripcion:
      "Se diseña la arquitectura del sistema y se planifica el proyecto en detalle.",
    icono: PencilIcon,
    costo: 8731,
  },
  {
    titulo: "Desarrollo y Pruebas",
    descripcion:
      "Se implementa el código, se realizan las pruebas unitarias y de integración.",
    icono: Cog8ToothIcon,
    costo: 27649,
  },
  {
    titulo: "Entrega y Despliegue",
    descripcion:
      "El sistema se entrega al usuario final, se capacita y se resuelven los últimos problemas.",
    icono: RocketLaunchIcon,
    costo: 4366,
  },
];

export default function Costos() {
  const [hoverActivos, setHoverActivos] = useState(
    Array(fases.length).fill(false)
  );

  const activarHover = (index) => {
    const nuevosHovers = [...hoverActivos];
    nuevosHovers[index] = true;
    setHoverActivos(nuevosHovers);
  };

  const desactivarHover = (index) => {
    const nuevosHovers = [...hoverActivos];
    nuevosHovers[index] = false;
    setHoverActivos(nuevosHovers);
  };

  return (
    <div className="relative w-full px-6 py-16 bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Costos del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Distribución por fase en base al cronograma de trabajo
        </p>
      </div>

      {/* Tarjetas de fases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {fases.map(({ titulo, descripcion, icono: Icon, costo }, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-md transition-transform hover:scale-105 group"
            onMouseEnter={() => activarHover(idx)}
            onMouseLeave={() => desactivarHover(idx)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-300 p-2 rounded-full shadow border-4 border-[#202a41]">
                <Icon className="w-6 h-6 text-[#202a41]" />
              </div>
              <h3 className="text-xl font-semibold">{titulo}</h3>
            </div>

            <p className="text-sm text-gray-200 mb-4">{descripcion}</p>

            <p className="text-lg font-bold text-teal-300 group-hover:text-white transition-colors">
              Costo: $
              {hoverActivos[idx] ? (
                <CountUp end={costo} duration={2} separator="," />
              ) : (
                <>0</>
              )}{" "}
              MXN
            </p>
          </div>
        ))}
      </div>

      {/* Pie decorativo opcional */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
