// src/components/Nav.jsx
import React, { useEffect, useRef } from "react";

export default function Nav({ sections, activeSection, accentColor }) {
  const refs = useRef({}); // para guardar refs por id

  useEffect(() => {
    const current = refs.current[activeSection];
    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeSection]);

  return (
    <nav
      className="
        fixed top-0 left-0 h-full w-48 bg-fondo z-30
        overflow-y-auto
        scrollbar-none
      "
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
      <div className="p-4 space-y-2">
        {sections.map(({ id, title }) => {
          const isSubItem = id.startsWith("empresa-");
          const isActive = id === activeSection;
          return (
            <a
              key={id}
              ref={(el) => (refs.current[id] = el)}
              href={`#${id}`}
              className={`block transition-all duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-200 hover:text-white"
              } ${isSubItem ? "ml-3 text-sm italic" : ""}`}
              style={
                isActive
                  ? {
                      backgroundColor: accentColor,
                      width: "calc(100% + 16px)",
                      marginRight: "-16px",
                      padding: "12px 16px",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                      boxShadow: `4px 0 0 0 ${accentColor}`,
                    }
                  : { padding: "12px 16px" }
              }
            >
              {title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
