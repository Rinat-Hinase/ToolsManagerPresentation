import React from "react";
import {
  CheckCircleIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

export default function Calidad() {
  return (
    <div className="relative w-full px-8 py-16 bg-gradient-to-br from-[#202a41] to-[#516988] text-white text-center">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md mb-2">
        Gestión de Calidad
      </h1>
      <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto mb-6" />

      {/* Subtítulo */}
      <p className="text-lg text-[#d3e1f1] italic mb-10">
        Garantizando excelencia técnica y satisfacción del cliente
      </p>

      {/* Contenido en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left text-gray-100">
        {/* Columna 1 - Estándares */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm space-y-4">
          <CheckCircleIcon className="w-8 h-8 text-[#d3e1f1]" />
          <h3 className="text-xl font-semibold text-white">
            Normativas Aplicadas
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>IEEE 830:</strong> Requisitos claros, verificables y
              trazables.
            </li>
            <li>
              <strong>BPMN 2.0:</strong> Optimización de procesos y flujos
              lógicos.
            </li>
            <li>Mejores prácticas de desarrollo y documentación.</li>
          </ul>
        </div>

        {/* Columna 2 - Cumplimiento del Proyecto */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm space-y-4">
          <ClipboardDocumentIcon className="w-8 h-8 text-[#d3e1f1]" />
          <h3 className="text-xl font-semibold text-white">
            Control de Calidad
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Seguimiento del cronograma de <strong>6 meses</strong>.
            </li>
            <li>Validación iterativa de funcionalidades entregadas.</li>
            <li>Pruebas funcionales y revisión cruzada del equipo.</li>
          </ul>
        </div>

        {/* Columna 3 - Indicadores y Satisfacción */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm space-y-4">
          <ChartBarIcon className="w-8 h-8 text-[#d3e1f1]" />
          <h3 className="text-xl font-semibold text-white">
            Satisfacción y Métricas
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Objetivo mínimo de <strong>4/5</strong> en satisfacción del
              cliente.
            </li>
            <li>Retroalimentación continua como eje de mejora.</li>
          </ul>
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="mt-12 text-xs text-[#d3e1f1] text-center">
        AspideCode · 2025
      </p>
    </div>
  );
}
