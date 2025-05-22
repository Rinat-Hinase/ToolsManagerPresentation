// src/sections/Resultados.jsx
import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Resultados() {
  return (
    <div className="relative w-full px-6 py-24 bg-gradient-to-br from-[#202a41] to-[#516988] text-white text-center">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Ícono */}
      <PlayCircleIcon className="w-14 h-14 mx-auto text-teal-300 mb-4 drop-shadow" />

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
        Resultados Finales
      </h1>
      <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto mt-3 mb-6" />

      {/* Mensaje simple */}
      <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
        A continuación, pasamos a mostrar el funcionamiento de la aplicación.
      </p>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
