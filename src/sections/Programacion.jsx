// src/sections/Programacion.jsx
import React from "react";
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  ArrowPathIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

export default function Programacion() {
  return (
    <div className="relative w-full px-6 py-20 bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Encabezado */}
      <div className="text-center mb-14 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Programación del Sistema
        </h1>
        <div className="w-24 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Codificación modular, herramientas clave y metodología ágil
        </p>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto space-y-12 text-gray-100 text-lg leading-relaxed">
        {/* 1. Construcción del sistema */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <WrenchScrewdriverIcon className="w-10 h-10 text-teal-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">
              Fase de construcción activa
            </h2>
            <p className="text-sm text-gray-200">
              Basado en el documento de diseño, el equipo de{" "}
              <strong>AspideCode</strong> procede a la implementación funcional
              del sistema <strong>ToolsManager</strong>. Cada módulo es
              codificado con enfoque en claridad, mantenimiento y reutilización.
            </p>
          </div>
        </section>

        {/* 2. Tecnologías usadas */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <CodeBracketIcon className="w-10 h-10 text-teal-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">
              Herramientas y librerías
            </h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>
                <strong>Python</strong> — núcleo del sistema, usado junto a{" "}
                <strong>Tkinter</strong> para la interfaz gráfica.
              </li>
              <li>
                <strong>SQLite</strong> — motor de base de datos ligero para
                almacenamiento local.
              </li>
              <li>
                <strong>PIL, tkcalendar, ReportLab</strong> — para gestión de
                imágenes, fechas y generación de reportes PDF.
              </li>
              <li>
                <strong>Threading y datetime</strong> — para manejo de
                concurrencia y control de eventos por tiempo.
              </li>
              <li>
                <strong>Webbrowser, sys, os, locale</strong> — para
                interacciones externas del sistema operativo y apertura de
                recursos.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Metodología de desarrollo */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <ArrowPathIcon className="w-10 h-10 text-teal-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">
              Metodología SCRUM
            </h2>
            <p className="text-sm text-gray-200">
              La programación se realizó en ciclos iterativos llamados{" "}
              <strong>sprints</strong>, permitiendo validar avances en cada
              entrega. Se aplicó una estrategia incremental, construyendo
              funcionalidades en orden de prioridad para el cliente.
            </p>
          </div>
        </section>

        {/* 4. Control de versiones */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <CloudIcon className="w-10 h-10 text-teal-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">
              Control de versiones con GitHub
            </h2>
            <p className="text-sm text-gray-200">
              Todo el código fuente fue manejado mediante GitHub, permitiendo
              colaboración, seguimiento de cambios y recuperación ante errores.
            </p>
          </div>
        </section>
      </div>

      {/* Pie decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
