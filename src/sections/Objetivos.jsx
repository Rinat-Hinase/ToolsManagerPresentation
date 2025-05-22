import React from "react";
import {
  CursorArrowRaysIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export default function Objetivos() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado principal */}
      <div className="mb-10 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Objetivos y Alcance
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
      </div>

      {/* Contenido en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full text-left">
        {/* Objetivo */}
        <div className="bg-white bg-opacity-10 border border-white/20 rounded-xl p-6 shadow-md backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-3">
            <CursorArrowRaysIcon className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-bold text-white">Objetivo</h2>
          </div>
          <p className="text-gray-200 leading-relaxed">
            El objetivo principal del diseño del sistema{" "}
            <span className="text-teal-300 font-medium">ToolsManager</span> es
            digitalizar y optimizar los procesos de ventas, inventario y compras
            en la ferretería para hacerlos más eficientes, reducir errores y
            facilitar la gestión diaria.
          </p>
        </div>

        {/* Alcance */}
        <div className="bg-white bg-opacity-10 border border-white/20 rounded-xl p-6 shadow-md backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-3">
            <RocketLaunchIcon className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-bold text-white">Alcance</h2>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>
              Eliminar los métodos manuales que resultan ineficaces y lentos.
            </li>
            <li>Reducir la carga administrativa para el propietario.</li>
            <li>
              Optimizar la administración de ventas, compras, inventarios y
              proveedores.
            </li>
          </ul>
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
