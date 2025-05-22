import React from "react";
import {
  MagnifyingGlassCircleIcon,
  BugAntIcon,
  ClipboardDocumentCheckIcon,
  ArrowsUpDownIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const eventos = [
  {
    titulo: "Seguimiento",
    descripcion: "Métricas para revisar avances frente al plan original.",
    icono: MagnifyingGlassCircleIcon,
  },
  {
    titulo: "Pruebas",
    descripcion:
      "Verificación funcional y técnica de módulos y sistema completo.",
    icono: BugAntIcon,
  },
  {
    titulo: "Gestión de Cambios",
    descripcion: "Control estructurado de solicitudes y trazabilidad.",
    icono: ArrowsUpDownIcon,
  },
  {
    titulo: "Lecciones Aprendidas",
    descripcion:
      "Registro de hallazgos y mejoras aplicables a futuros proyectos.",
    icono: DocumentTextIcon,
  },
];

export default function Control() {
  return (
    <div className="relative h-full w-full px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Control del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Seguimiento técnico, calidad y mejora continua
        </p>
      </div>

      {/* Timeline horizontal */}
      <div className="relative flex items-start justify-center gap-10 flex-wrap max-w-5xl w-full">
        {/* Línea base */}
        <div className="absolute top-12 left-0 right-0 h-[2px] bg-white/20 z-0" />

        {eventos.map(({ titulo, descripcion, icono: Icon }, idx) => (
          <div key={idx} className="relative z-10 text-center w-[120px] group">
            <div className="flex flex-col items-center">
              <div className="bg-teal-300 p-2 rounded-full shadow-lg border-4 border-[#202a41]">
                <Icon className="w-6 h-6 text-[#202a41]" />
              </div>
              <span className="mt-3 text-sm font-semibold">{titulo}</span>
            </div>

            <div className="mt-4 p-4 text-sm text-gray-200 bg-white/10 border border-white/20 rounded-xl shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[90px] left-1/2 -translate-x-1/2 w-64 z-30">
              {descripcion}
            </div>
          </div>
        ))}
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
