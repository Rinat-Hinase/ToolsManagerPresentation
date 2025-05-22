// src/sections/Analisis.jsx
import React from "react";
import {
  ChartPieIcon,
  CpuChipIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function Analisis() {
  return (
    <div className="relative w-full px-6 py-16 bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-12 space-y-2">
        <ChartPieIcon className="w-12 h-12 text-teal-300 mx-auto drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Análisis Inicial
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Exploración estratégica y evaluación de factibilidad
        </p>
      </div>

      {/* Introducción narrativa */}
      <div className="max-w-4xl mx-auto mb-12 text-gray-200 text-lg leading-relaxed text-center px-4">
        En esta fase crucial,{" "}
        <span className="text-teal-300 font-semibold">AspideCode</span> se
        adentra en el contexto real de{" "}
        <span className="italic">Ferretería LALOX</span>, realizando un
        diagnóstico integral de su funcionamiento. Esto permite definir con
        precisión las oportunidades de mejora y construir la base para el
        desarrollo exitoso de <strong>ToolsManager</strong>.
      </div>

      {/* Evaluación de viabilidad - en bloques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left text-gray-100">
        {/* Técnica */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm shadow-md hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <CpuChipIcon className="w-6 h-6 text-teal-300" />
            <h3 className="text-xl font-semibold text-white">
              Viabilidad Técnica
            </h3>
          </div>
          <p className="text-sm">
            Se analiza si el sistema puede desarrollarse con las herramientas,
            infraestructura y experiencia tecnológica disponibles.
          </p>
        </div>

        {/* Operativa */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm shadow-md hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardDocumentListIcon className="w-6 h-6 text-teal-300" />
            <h3 className="text-xl font-semibold text-white">
              Viabilidad Operativa
            </h3>
          </div>
          <p className="text-sm">
            Evalúa la compatibilidad del sistema con los procesos y recursos
            humanos actuales de la ferretería.
          </p>
        </div>

        {/* Económica */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm shadow-md hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <BanknotesIcon className="w-6 h-6 text-teal-300" />
            <h3 className="text-xl font-semibold text-white">
              Viabilidad Económica
            </h3>
          </div>
          <p className="text-sm">
            Estudia el retorno de inversión, costos de implementación y
            sostenibilidad financiera del proyecto.
          </p>
        </div>
      </div>

      {/* Pie decorativo opcional */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
