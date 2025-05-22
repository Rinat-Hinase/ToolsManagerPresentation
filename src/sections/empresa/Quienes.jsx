import React from "react";

export default function EmpresaQuienes() {
  return (
    <div className="relative h-full w-full px-6 py-12 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#202a41] to-[#516988]">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Contenido central */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
          ¿Quiénes Somos?
        </h1>

        <div className="w-20 h-1 bg-[#d3e1f1] rounded-full mx-auto" />

        <p className="text-lg text-gray-200 leading-relaxed">
          En <span className="text-teal-300 font-semibold">AspideCode</span>,
          somos un equipo dedicado a crear soluciones de software que buscan
          satisfacer las necesidades de las empresas. Nuestra meta es
          transformar la forma en que operan, ofreciendo herramientas efectivas
          y accesibles que optimizan sus procesos y les permiten alcanzar sus
          objetivos.
        </p>

        <p className="italic text-teal-200 text-lg">
          “Inspiración en cada línea.”
        </p>
      </div>

      {/* Pie de página decorativo (opcional) */}
      <div className="absolute bottom-6 w-full text-xs text-[#d3e1f1]">
        AspideCode © 2025
      </div>
    </div>
  );
}
