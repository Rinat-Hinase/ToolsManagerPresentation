import React from "react";
import { FlagIcon } from "@heroicons/react/24/solid";

export default function EmpresaMision() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Contenido */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <FlagIcon className="w-12 h-12 text-teal-300 drop-shadow-md" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
          Misión
        </h1>

        <div className="w-20 h-1 bg-[#d3e1f1] rounded-full mx-auto" />

        <p className="text-lg text-gray-200 leading-relaxed">
          Crear soluciones de software innovadoras y personalizadas para que las
          empresas optimicen sus procesos y alcancen sus objetivos.
        </p>
      </div>

      {/* Pie de sección */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
