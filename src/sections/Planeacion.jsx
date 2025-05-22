import React, { useState } from "react";
import {
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  Squares2X2Icon,
  UsersIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const elementos = [
  {
    titulo: "Alcance & Cronograma",
    icono: ClipboardDocumentCheckIcon,
    detalle:
      "Se definió el alcance, entregables como el SRS y un cronograma iterativo guiado por SCRUM.",
  },
  {
    titulo: "Factibilidad",
    icono: CurrencyDollarIcon,
    detalle:
      "Estudio técnico, operativo y económico, incluyendo estimación de costos y beneficios.",
  },
  {
    titulo: "EDT & Diccionario",
    icono: Squares2X2Icon,
    detalle:
      "Desglose del trabajo y definiciones claras de cada componente para su seguimiento.",
  },
  {
    titulo: "Roles & Recursos",
    icono: UsersIcon,
    detalle:
      "Organigrama del proyecto y asignación de responsabilidades para el equipo de AspireCode.",
  },
  {
    titulo: "Gestión de Riesgos",
    icono: ShieldCheckIcon,
    detalle:
      "Planificación anticipada para identificar, mitigar y controlar los riesgos del proyecto.",
  },
  {
    titulo: "Reingeniería BPMN",
    icono: ArrowsRightLeftIcon,
    detalle:
      "Modelado de procesos actuales y rediseño optimizado antes de la implementación.",
  },
  {
    titulo: "Herramientas",
    icono: WrenchScrewdriverIcon,
    detalle:
      "Selección de software de gestión, control de versiones y otras utilidades clave.",
  },
];

export default function Planeacion() {
  const [activo, setActivo] = useState(null);

  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="mb-8 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Planeación del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Aspectos clave para organizar y asegurar la ejecución del sistema
          ToolsManager
        </p>
      </div>

      {/* Tarjetas interactivas */}
      <div className="relative z-0 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {elementos.map(({ titulo, icono: Icon, detalle }, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActivo(idx)}
            onMouseLeave={() => setActivo(null)}
            className="group relative bg-white/10 hover:bg-white/20 border border-white/20 p-6 rounded-xl backdrop-blur-sm shadow-md text-center cursor-pointer transition-all duration-300"
          >
            <Icon className="w-10 h-10 mx-auto text-teal-300 mb-2 transition-transform duration-200 group-hover:scale-110" />
            <h3 className="font-semibold text-white">{titulo}</h3>

            {/* Tooltip fijo arriba para todos */}
            {activo === idx && (
              <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 w-80 z-50 bg-[#1e293b] text-white text-base font-medium p-4 rounded-xl shadow-xl border border-teal-300/20 transition-all duration-300">
                {detalle}
              </div>
            )}
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
