import React from "react";
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  WrenchIcon,
  PresentationChartBarIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const pasos = [
  {
    icono: CheckBadgeIcon,
    titulo: "Entrega inicial",
    descripcion: "Constantes cambios desde su entrega inicial.",
  },
  {
    icono: ChatBubbleOvalLeftEllipsisIcon,
    titulo: "Nuevas solicitudes",
    descripcion: "El cliente pidió nuevas funciones tras ver el sistema.",
  },
  {
    icono: WrenchIcon,
    titulo: "Actualizaciones",
    descripcion:
      "Se realizan mejoras, parches y módulos nuevos constantemente.",
  },
  {
    icono: PresentationChartBarIcon,
    titulo: "Feedback continuo",
    descripcion: "Reuniones y validaciones frecuentes con el cliente.",
  },
  {
    icono: ArrowPathIcon,
    titulo: "Expansión activa",
    descripcion: "El proyecto sigue creciendo con nuevas mejoras.",
  },
];

export default function Cierre() {
  return (
    <div className="relative w-full px-6 py-20 bg-gradient-to-br from-[#202a41] to-[#516988] text-white overflow-hidden">
      {/* Cinta decorativa */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Título principal */}
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Transición y Evolución
        </h1>
        <div className="w-20 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          ToolsManager sigue creciendo junto a Ferretería LALOX
        </p>
      </div>

      {/* Timeline horizontal en zig-zag */}
      <div className="relative max-w-6xl mx-auto">
        {/* Línea */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 z-0" />

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 z-10 relative">
          {pasos.map(({ icono: Icon, titulo, descripcion }, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center z-10"
            >
              {/* Icono circular */}
              <div className="bg-teal-300 text-[#202a41] p-3 rounded-full shadow-lg z-10 transition transform group-hover:scale-110">
                <Icon className="w-6 h-6" />
              </div>

              {/* Línea vertical */}
              <div className="h-6 w-[2px] bg-white/30 my-2"></div>

              {/* Tooltip en hover */}
              <div className="relative">
                <div className="text-sm font-semibold">{titulo}</div>
                <div className="absolute top-full left-[65%] -translate-x-1/2 mt-2 w-55 text-xs bg-[#1f2937] text-gray-200 p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                  {descripcion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="mt-16 text-xs text-[#d3e1f1] text-center">
        AspideCode · Proyecto activo en mantenimiento y expansión
      </p>
    </div>
  );
}
