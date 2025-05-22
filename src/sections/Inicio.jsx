import React from "react";
import {
  UsersIcon,
  DocumentTextIcon,
  IdentificationIcon,
  CpuChipIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const pasos = [
  {
    titulo: "Reunión con la Ferretería LALOX",
    descripcion:
      "Entrevista inicial para comprender sus necesidades reales en inventario y punto de venta.",
    icono: UsersIcon,
  },
  {
    titulo: "Acta de Constitución del Proyecto",
    descripcion:
      "Documento base de ToolsManager: propósito, objetivos generales y alcance preliminar.",
    icono: DocumentTextIcon,
  },
  {
    titulo: "Identificación de Stakeholders",
    descripcion:
      "Definición de interesados clave, incluyendo al propietario y personal operativo.",
    icono: IdentificationIcon,
  },
  {
    titulo: "Arquitectura General del Sistema",
    descripcion:
      "Diseño del flujo general del sistema: módulos, entradas y salidas.",
    icono: CpuChipIcon,
  },
  {
    titulo: "Selección de Metodología SCRUMstudy",
    descripcion:
      "Marco ágil elegido para lograr flexibilidad, adaptación y mejora continua.",
    icono: RocketLaunchIcon,
  },
];

export default function Inicio() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white text-center">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Inicio del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Fase de análisis, planificación y arranque de ToolsManager
        </p>
      </div>

      {/* Timeline visual compacto */}
      <div className="relative border-l-2 border-white/20 pl-6 space-y-6 max-w-3xl w-full text-left">
        {pasos.map(({ titulo, descripcion, icono: Icon }, i) => (
          <div key={i} className="relative flex gap-4 group">
            {/* Bubble icono */}
            <div className="absolute -left-[38px] top-1">
              <div className="bg-teal-300 text-[#202a41] rounded-full p-2 shadow-lg ring-2 ring-white/20">
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-white text-base md:text-lg font-semibold">
                {titulo}
              </h3>
              <p className="text-sm text-gray-300">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
