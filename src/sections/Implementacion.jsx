// src/sections/Implementacion.jsx
import React from "react";
import {
  WrenchIcon,
  ExclamationTriangleIcon,
  CloudArrowUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

const pasos = [
  {
    icono: WrenchIcon,
    titulo: "Mejoras en curso",
    texto:
      "Se están aplicando cambios internos en base a observaciones funcionales y feedback del cliente.",
  },
  {
    icono: ExclamationTriangleIcon,
    titulo: "Despliegue detenido",
    texto:
      "Para evitar errores, no se ha liberado aún la versión final mientras se afinan detalles.",
  },
  {
    icono: CloudArrowUpIcon,
    titulo: "Plan de instalación",
    texto:
      "El sistema se empaquetará como ejecutable para Windows, con su base de datos y dependencias.",
  },
  {
    icono: CheckBadgeIcon,
    titulo: "Implementación programada",
    texto:
      "Una vez verificada la estabilidad, se procederá a instalar ToolsManager en el entorno real.",
  },
];

export default function Implementacion() {
  return (
    <div className="relative w-full px-6 py-20 bg-gradient-to-br from-[#202a41] to-[#516988] text-white overflow-hidden">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Título */}
      <div className="text-center mb-16 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Implementación
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Ruta prevista hacia el despliegue final del sistema
        </p>
      </div>

      {/* Timeline horizontal */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Línea base */}
        <div className="absolute top-10 left-0 right-0 h-[2px] bg-white/20 z-0 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {pasos.map(({ icono: Icon, titulo, texto }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-teal-300 p-3 rounded-full shadow-md border-4 border-[#202a41] mb-3">
                <Icon className="w-6 h-6 text-[#202a41]" />
              </div>
              <h3 className="text-base font-semibold">{titulo}</h3>
              <p className="text-sm text-gray-200 mt-2 leading-snug">{texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
