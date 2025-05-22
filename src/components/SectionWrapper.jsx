// src/components/SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({ id, children, accentColor }) {
  return (
    <section
      id={id}
      style={{ backgroundColor: accentColor }}
      className="h-screen snap-start w-full flex items-center"
    >
      <div className="ml-48 flex-1 flex justify-center items-center px-8">
        <div className="max-w-4xl w-full">{children}</div>
      </div>
    </section>
  );
}
