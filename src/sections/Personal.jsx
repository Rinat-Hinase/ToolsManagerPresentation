import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

export default function Personal() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="mb-10 space-y-3">
        <UserGroupIcon className="w-12 h-12 text-teal-300 mx-auto drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Nuestro Equipo
        </h1>
        <div className="w-20 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-md text-gray-200">
          Profesionales comprometidos con la excelencia en desarrollo
        </p>
      </div>

      {/* Fichas de miembros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Leonardo */}
        <div className="bg-white bg-opacity-10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-md flex flex-col items-center space-y-3">
          <img
            src="/leonardo.jpg" // 🖼️ Coloca tu imagen real en /public
            alt="Leonardo Espinoza"
            className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-md"
          />
          <h3 className="text-xl font-bold text-white">
            Leonardo Espinoza Mares
          </h3>
          <p className="text-teal-300 font-medium">Director de AspireCode</p>
        </div>

        {/* Juan Manuel */}
        <div className="bg-white bg-opacity-10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-md flex flex-col items-center space-y-3">
          <img
            src="/juan.jpg" // 🖼️ Coloca tu imagen real en /public
            alt="Juan Manuel Cruz"
            className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-md"
          />
          <h3 className="text-xl font-bold text-white">
            Juan Manuel Cruz Hernández
          </h3>
          <p className="text-teal-300 font-medium">
            Jefe de Desarrollo AspireCode
          </p>
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
