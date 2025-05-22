import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

export default function Justificacion() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white text-center">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado + icono */}
      <div className="space-y-3 mb-10">
        <DocumentCheckIcon className="w-12 h-12 text-teal-300 mx-auto drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Justificación
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
      </div>

      {/* Contenido narrativo con imagen */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full px-4 md:px-8">
        {/* Imagen decorativa */}
        <img
          src="/automatizacion.png" // 🔁 Asegúrate de poner esta imagen en la carpeta /public
          alt="Automatización"
          className="w-full md:w-1/2 max-h-[280px] object-contain drop-shadow-xl rounded-lg border border-white/10"
        />

        {/* Texto narrativo */}
        <div className="text-left space-y-6 md:w-1/2">
          <p className="text-lg text-gray-200 leading-relaxed">
            <span className="text-teal-300 font-semibold">ToolsManager</span>{" "}
            surge como respuesta a la necesidad de modernizar la gestión de una
            ferretería, reemplazando procesos manuales que consumen tiempo y
            generan errores.
          </p>
          <p className="text-gray-300">
            La automatización de ventas, inventarios y compras mejora la
            eficiencia, reduce la carga administrativa y permite un mayor
            control del negocio, impulsando su competitividad y capacidad de
            crecimiento.
          </p>
        </div>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
