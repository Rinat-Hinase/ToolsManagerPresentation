// src/sections/Diseno.jsx
import React from "react";
import {
  PuzzlePieceIcon,
  WindowIcon,
  RectangleGroupIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

const secciones = [
  {
    titulo: "Arquitectura Modular",
    icono: RectangleGroupIcon,
    texto: (
      <>
        Basado en el patrón{" "}
        <span className="text-teal-300 font-medium">MVVM</span>, el sistema se
        organiza en carpetas como <code>views</code>, <code>viewmodels</code> y{" "}
        <code>models</code>. Esto permite mantener funcionalidades como{" "}
        <code>ventas.py</code>, <code>deudores.py</code> o <code>caja.py</code>{" "}
        de forma separada, limpia y escalable.
      </>
    ),
  },
  {
    titulo: "Interfaz Gráfica",
    icono: WindowIcon,
    texto: (
      <>
        Construida con <strong>Tkinter</strong>, incluye pantallas como{" "}
        <code>login_view</code>, <code>ajustes_view</code> y{" "}
        <code>loading_view</code>, priorizando usabilidad y fluidez para el
        usuario.
      </>
    ),
  },
  {
    titulo: "Base de Datos",
    icono: CircleStackIcon,
    texto: (
      <>
        Implementa <code>SQLite</code> con un archivo <code>database.db</code>,
        manejando entidades clave como ventas, productos, clientes y
        movimientos. Está diseñada para lecturas rápidas y escritura local
        confiable.
      </>
    ),
  },
  {
    titulo: "Flujo y Conexión",
    icono: PuzzlePieceIcon,
    texto: (
      <>
        La comunicación se maneja con <code>api.py</code>, enlazando el cliente
        con FastAPI para manejar operaciones remotas y procesos centralizados.
      </>
    ),
  },
];

export default function Diseno() {
  return (
    <div className="relative w-full px-6 py-20 bg-gradient-to-br from-[#202a41] to-[#516988] text-white overflow-hidden">
      {/* Cinta superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-14 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Diseño del Sistema
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Distribución estructural y conectividad técnica
        </p>
      </div>

      {/* Línea visual horizontal */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-16">
        {/* Línea base */}
        <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-white/20 z-0 hidden md:block" />

        {secciones.map(({ titulo, icono: Icon, texto }, idx) => (
          <div
            key={idx}
            className="relative z-10 flex items-start md:items-center md:flex-row flex-col gap-6 md:gap-8"
          >
            {/* Ícono centralizado */}
            <div className="relative z-10 bg-teal-300 p-3 rounded-full border-4 border-[#202a41] shadow-md shrink-0">
              <Icon className="w-6 h-6 text-[#202a41]" />
            </div>

            {/* Contenido textual */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-0 rounded-xl text-left shadow-md w-full">
              <h3 className="text-lg font-semibold mb-1">{titulo}</h3>
              <p className="text-sm leading-relaxed text-gray-200">{texto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
