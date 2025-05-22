import React from "react";
import {
  CodeBracketIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export default function Ejecucion() {
  const actividades = [
    {
      icono: CodeBracketIcon,
      titulo: "Desarrollo Iterativo",
      descripcion:
        "Sprints de desarrollo para construir módulos como ventas, inventario, clientes y reportes.",
    },
    {
      icono: ArrowsRightLeftIcon,
      titulo: "Solicitudes de Cambio",
      descripcion:
        "Adaptación en tiempo real, como permitir el uso del sistema desde múltiples computadoras.",
    },
    {
      icono: ChartBarIcon,
      titulo: "Seguimiento del Progreso",
      descripcion:
        "Monitoreo constante del avance mediante herramientas de control de versiones y reportes.",
    },
    {
      icono: CheckCircleIcon,
      titulo: "Validación con Cliente",
      descripcion:
        "Revisiones frecuentes con Ferretería LALOX para validar funcionalidad y mejoras.",
    },
  ];

  return (
    <div className="relative h-full w-full px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado principal */}
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Ejecución del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Actividades clave durante el desarrollo de ToolsManager
        </p>
      </div>

      {/* Contenido organizado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {actividades.map(({ icono: Icon, titulo, descripcion }, idx) => (
          <div
            key={idx}
            className="bg-white/10 hover:bg-white/20 border border-white/20 p-6 rounded-xl backdrop-blur-sm shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-teal-300 text-[#202a41] rounded-full p-2 shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{titulo}</h3>
                <p className="text-sm text-gray-200">{descripcion}</p>
              </div>
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
