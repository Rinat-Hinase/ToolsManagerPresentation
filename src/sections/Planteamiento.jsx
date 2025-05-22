import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Planteamiento() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Contenido */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center">
          <ExclamationTriangleIcon className="w-12 h-12 text-yellow-300 drop-shadow" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Planteamiento del Problema
        </h1>

        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />

        <p className="text-lg text-gray-200 leading-relaxed">
          El propietario de la ferretería,{" "}
          <span className="text-teal-200 font-semibold">
            Carlos Eduardo Reséndiz Serrato
          </span>
          , enfrenta desafíos significativos en la gestión de su inventario,
          ventas, clientes y caja; debido a la dependencia de procesos
          manuales.
        </p>

        <p className="text-gray-300 text-base leading-relaxed">
          Estos métodos han dado lugar a:
        </p>

        <ul className="text-left text-gray-200 list-disc list-inside max-w-xl mx-auto space-y-2">
          <li>Errores frecuentes en el control del inventario</li>
          <li>Dificultades en el registro de ventas</li>
          <li>
            Falta de información precisa (reportes, resúmenes, estadísticas)
          </li>
        </ul>

        <p className="italic text-teal-200 text-sm">
          Estos problemas afectan directamente la eficiencia, rentabilidad y
          crecimiento del negocio.
        </p>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
