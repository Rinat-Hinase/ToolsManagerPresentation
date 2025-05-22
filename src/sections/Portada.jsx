import React from "react";

export default function Portada() {
  return (
    <div className="relative h-full w-full px-8 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado institucional */}
      <h2 className="text-sm md:text-base tracking-wider uppercase font-light mb-4 text-[#d3e1f1]">
        Instituto Tecnológico de Estudios Superiores de Zamora
      </h2>

      {/* Título del proyecto */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
        Gestión de Proyecto de Software
      </h1>

      {/* Subtítulo */}
      <p className="mt-2 text-xl md:text-2xl font-medium text-[#90abce] italic">
        “ToolsManager”
      </p>

      {/* División decorativa */}
      <div className="w-32 h-1 bg-[#d3e1f1] rounded-full my-6" />

      {/* Datos del curso */}
      <p className="text-lg mb-2">8B — Mayo 2025</p>

      {/* Docente y alumnos */}
      <div className="space-y-3 text-sm md:text-base text-[#f5f4f3]">
        <div>
          <span className="font-bold text-white">Docente:</span>
          <br />
          Francisco Rodríguez Díaz
        </div>
        <div>
          <span className="font-bold text-white">Presentan:</span>
          <br />
          Juan Manuel Cruz Hernández
          <br />
          Leonardo Espinoza Mares
        </div>
      </div>

      {/* Pie de página */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        Zamora, Michoacán — 21 de mayo de 2025
      </p>
    </div>
  );
}
