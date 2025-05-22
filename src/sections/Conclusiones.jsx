// src/sections/Conclusion.jsx
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Conclusion() {
  return (
    <div className="relative w-full px-6 py-20 bg-gradient-to-br from-[#202a41] to-[#516988] text-white overflow-hidden text-center">
      {/* Cinta superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Ícono */}
      <SparklesIcon className="w-12 h-12 text-teal-300 mx-auto drop-shadow mb-4" />

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
        Conclusión Final
      </h1>
      <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto mt-2 mb-6" />

      {/* Mensaje impactante */}
      <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
        ToolsManager no es solo una aplicación de gestión; es una declaración de
        lo que sucede cuando la planeación estratégica, el diseño estructurado,
        la programación eficiente y el enfoque al cliente se unen bajo una
        visión clara.
        <br />
        Desarrollado con estándares como <strong>IEEE 830</strong>, diagramado
        con <strong>BPMN 2.0</strong>, construido sobre <strong>Python</strong>{" "}
        y <strong>SQLite</strong>, versionado con <strong>GitHub</strong>, y
        diseñado con amor por
        <strong> AspireCode</strong> — este sistema demuestra que la ingeniería
        también puede tener estilo.
      </p>

      {/* GIF mona china bailando */}
      <div className="w-full flex justify-center">
        <img
          src="/bailando.gif" // ✅ Coloca tu GIF en public/bailando.gif
          alt="Mona china celebrando"
          className="w-56 md:w-72 rounded-lg drop-shadow-lg border-4 border-white/20"
        />
      </div>

      {/* Frase épica */}
      <p className="mt-10 text-xl italic text-teal-200 font-medium">
        Porque si vas a automatizar... que sea con estilo.
      </p>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
