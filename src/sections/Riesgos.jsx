// src/sections/Riesgos.jsx
import React from "react";
import {
  ExclamationTriangleIcon,
  ServerStackIcon,
  ShieldExclamationIcon,
  PhotoIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

const riesgos = [
  {
    titulo: "Pérdida de conexión al servidor",
    motivo:
      "Fallo en la conexión entre cliente y servidor (FastAPI) debido a red local.",
    icono: ServerStackIcon,
  },
  {
    titulo: "Errores de integridad en la BD",
    motivo: "Pérdida de datos debido a daños en la base de datos SQLite.",
    icono: CircleStackIcon,
  },
  {
    titulo: "Acceso no autorizado",
    motivo: "Brechas de seguridad en contraseñas de usuarios.",
    icono: ShieldExclamationIcon,
  },
  {
    titulo: "Imágenes que no se visualizan",
    motivo: "Corrupción de imágenes de productos.",
    icono: PhotoIcon,
  },
  {
    titulo: "Saturación de la base de datos",
    motivo: "Base de datos lenta o errores por tamaño.",
    icono: ExclamationTriangleIcon,
  },
];

export default function Riesgos() {
  return (
    <div className="relative w-full px-6 py-16 bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-12 space-y-2">
        <ShieldExclamationIcon className="w-12 h-12 text-teal-300 mx-auto drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Riesgos del Proyecto
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Identificación anticipada para prevención y mitigación
        </p>
      </div>

      {/* Tarjetas de riesgo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {riesgos.map(({ titulo, motivo, icono: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm shadow-md hover:scale-[1.02] transition-transform space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="bg-teal-300 p-2 rounded-full border-4 border-[#202a41]">
                <Icon className="w-6 h-6 text-[#202a41]" />
              </div>
              <h3 className="text-lg font-semibold">{titulo}</h3>
            </div>
            <p className="text-sm text-gray-200">{motivo}</p>
          </div>
        ))}
      </div>

      {/* Pie decorativo opcional */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspireCode · 2025
      </p>
    </div>
  );
}
