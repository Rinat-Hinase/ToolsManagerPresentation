// src/App.jsx
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SectionWrapper from "./components/SectionWrapper";

// ✅ Importar todos los componentes reales
import Portada from "./sections/Portada";
import EmpresaQuienes from "./sections/empresa/Quienes";
import EmpresaMision from "./sections/empresa/Mision";
import EmpresaVision from "./sections/empresa/Vision";
import EmpresaValores from "./sections/empresa/Valores";
import Personal from "./sections/Personal";
import Planteamiento from "./sections/Planteamiento";
import Objetivos from "./sections/Objetivos";
import Justificacion from "./sections/Justificacion";
import Inicio from "./sections/Inicio";
import Planeacion from "./sections/Planeacion";
import Ejecucion from "./sections/Ejecucion";
import Control from "./sections/Control";
import Cierre from "./sections/Cierre";
import Calidad from "./sections/Calidad";
import PlaneacionDeEstimaciones from "./sections/PlaneacionDeEstimaciones";
import Costos from "./sections/Costos";
import Riesgos from "./sections/Riesgos";
import Analisis from "./sections/Analisis";
import Diseno from "./sections/Diseno";
import Programacion from "./sections/Programacion";
import Implementacion from "./sections/Implementacion";
import Resultados from "./sections/Resultados";
import Conclusiones from "./sections/Conclusiones";

// 🎨 Colores profesionales por sección
const sectionColors = {
  portada: "#0f766e",
  empresa: "#0ea5e9",
  personal: "#0284c7",

  planteamiento: "#4f46e5",
  objetivos: "#4338ca",
  justificacion: "#6d28d9",

  inicio: "#1e293b",
  planeacion: "#334155",
  ejecucion: "#0369a1",
  control: "#475569",
  cierre: "#0f172a",

  calidad: "#22c55e",
  planeaciondeestimaciones: "#3b82f6",
  costos: "#f97316",
  riesgos: "#ef4444",

  analisis: "#a855f7",
  diseno: "#e879f9",
  programacion: "#10b981",
  implementacion: "#14b8a6",

  resultados: "#7c3aed",
  conclusiones: "#475569",
};

// 🧩 Secciones con ID y componentes reales
const sections = [
  { id: "portada", title: "Portada", Component: Portada },
  {
    id: "empresa-quienes",
    title: "¿Quiénes Somos?",
    Component: EmpresaQuienes,
  },
  { id: "empresa-mision", title: "Misión", Component: EmpresaMision },
  { id: "empresa-vision", title: "Visión", Component: EmpresaVision },
  { id: "empresa-valores", title: "Valores", Component: EmpresaValores },
  { id: "personal", title: "Personal", Component: Personal },

  {
    id: "planteamiento",
    title: "Planteamiento del Problema",
    Component: Planteamiento,
  },
  { id: "objetivos", title: "Objetivos y Alcance", Component: Objetivos },
  { id: "justificacion", title: "Justificación", Component: Justificacion },

  { id: "inicio", title: "Inicio", Component: Inicio },
  { id: "planeacion", title: "Planeación", Component: Planeacion },
  { id: "ejecucion", title: "Ejecución", Component: Ejecucion },
  { id: "control", title: "Control", Component: Control },
  { id: "cierre", title: "Cierre", Component: Cierre },

  { id: "calidad", title: "Calidad", Component: Calidad },
  {
    id: "planeaciondeestimaciones",
    title: "Planeación de Estimaciones",
    Component: PlaneacionDeEstimaciones,
  },
  { id: "costos", title: "Costos", Component: Costos },
  { id: "riesgos", title: "Riesgos", Component: Riesgos },

  { id: "analisis", title: "Análisis", Component: Analisis },
  { id: "diseno", title: "Diseño", Component: Diseno },
  { id: "programacion", title: "Programación", Component: Programacion },
  { id: "implementacion", title: "Implementación", Component: Implementacion },

  { id: "resultados", title: "Resultados", Component: Resultados },
  { id: "conclusiones", title: "Conclusiones", Component: Conclusiones },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Nav
        sections={sections}
        activeSection={activeSection}
        accentColor={sectionColors[activeSection]}
      />

      {sections.map(({ id, Component }) => (
        <SectionWrapper
          key={id}
          id={id}
          accentColor={sectionColors[id] || "#1F2937"}
        >
          <Component />
        </SectionWrapper>
      ))}
    </div>
  );
}
