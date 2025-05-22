import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  HandRaisedIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const valores = [
  {
    titulo: "Dedicación y Perseverancia",
    descripcion:
      "Compromiso total en cada proyecto y resiliencia ante los desafíos.",
    icono: HandRaisedIcon,
  },
  {
    titulo: "Atención y Enfoque en el Cliente",
    descripcion:
      "Escuchar y adaptar soluciones a las necesidades específicas de nuestros clientes.",
    icono: UsersIcon,
  },
  {
    titulo: "Actitud Positiva e Innovación Continua",
    descripcion:
      "Enfrentar cada desafío con entusiasmo y buscar siempre la mejora y evolución.",
    icono: LightBulbIcon,
  },
  {
    titulo: "Aprendizaje Constante y Crecimiento Conjunto",
    descripcion:
      "Adaptarnos al cambio tecnológico y prosperar junto a nuestros clientes y equipo.",
    icono: AcademicCapIcon,
  },
];

export default function EmpresaValores() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#202a41] to-[#516988] text-center">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Título principal */}
      <div className="mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Nuestros Valores
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
      </div>

      {/* Tarjetas de valores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {valores.map(({ titulo, descripcion, icono: Icon }, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-10 border border-white/20 rounded-xl p-6 text-left backdrop-blur-md shadow-md flex gap-4 items-start"
          >
            <Icon className="w-8 h-8 text-teal-200 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">{titulo}</h3>
              <p className="text-gray-200">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie decorativo opcional */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
