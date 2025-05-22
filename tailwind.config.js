/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#1F2937",
        "accent-portada": "#10B981", // emerald-500
        "accent-planteamiento": "#6366F1", // indigo-500
        // añade aquí para cada sección:
        // 'accent-objetivos': '#F59E0B',
        // 'accent-justificacion': '#8B5CF6',
        // etc.
      },
    },
  },
  plugins: [],
};
