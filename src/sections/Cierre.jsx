import React from "react";
import {
  ServerStackIcon,
  LifebuoyIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

const logros = [
  {
    titulo: "Entrega Final",
    icono: ServerStackIcon,
    descripcion: "Despliegue de ToolsManager en Ferretería LALOX.",
  },
  {
    titulo: "Soporte Inicial",
    icono: LifebuoyIcon,
    descripcion: "Acompañamiento técnico post-implementación.",
  },
  {
    titulo: "Capacitación",
    icono: PresentationChartBarIcon,
    descripcion: "Formación y retroalimentación al personal.",
  },
  {
    titulo: "Documentación",
    icono: DocumentTextIcon,
    descripcion: "Manuales técnicos y de usuario entregados.",
  },
  {
    titulo: "Lecciones",
    icono: BookOpenIcon,
    descripcion: "Aprendizajes registrados para futuros proyectos.",
  },
  {
    titulo: "Cierre Formal",
    icono: CheckBadgeIcon,
    descripcion: "Aceptación del cliente y evaluación de éxito.",
  },
];

export default function Cierre() {
  return (
    <div className="relative h-full w-full px-6 py-20 flex flex-col items-center justify-center bg-gradient-to-br from-[#202a41] to-[#516988] text-white">
      {/* Cinta decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d3e1f1]" />

      {/* Título principal */}
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Cierre del Proyecto
        </h1>
        <div className="w-20 h-1 bg-[#d3e1f1] rounded-full mx-auto" />
        <p className="text-sm text-gray-300">
          Consolidación de logros y formalización de la entrega
        </p>
      </div>

      {/* Rejilla de logros (medallas) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full text-center">
        {logros.map(({ titulo, icono: Icon, descripcion }, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-sm shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <div className="bg-teal-300 text-[#202a41] p-2 rounded-full mb-3 shadow-md">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{titulo}</h3>
            <p className="text-sm text-gray-300 mt-1">{descripcion}</p>
          </div>
        ))}
      </div>

      {/* Pie de página decorativo */}
      <p className="absolute bottom-6 text-xs text-[#d3e1f1]">
        AspideCode · 2025
      </p>
    </div>
  );
}
