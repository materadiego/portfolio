const CertificationsEn = [
  {
    name: "HTML5 & CSS3",
    tags: ["frontend"],
  },
  {
    name: "Introduction to Backend Development",
    tags: ["backend"],
  },
  {
    name: "CSS Grid Layout",
    tags: ["frontend"],
  },
  {
    name: "Responsive Web Design",
    tags: ["frontend"],
  },
  {
    name: "Web Animations",
    tags: ["frontend"],
  },
  {
    name: "Style Preprocessors",
    tags: ["frontend"],
  },
  {
    name: "JavaScript: Basic",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Practical",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Asynchronous",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Closures & Scope",
    tags: ["frontend", "backend"],
  },

  {
    name: "JavaScript: Frameworks",
    tags: ["frontend"],
  },
  {
    name: "JavaScript: DOM Manipulation",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Array Manipulation",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: REST API Consumption",
    tags: ["frontend", "backend"],
  },
  {
    name: "Javascript: Data Structures",
    tags: ["backend"],
  },
  {
    name: "Frontend Development",
    tags: ["frontend"],
  },
  {
    name: "React: Basic",
    tags: ["frontend"],
  },
  {
    name: "React: Vite & Tailwind",
    tags: ["frontend"],
  },
  {
    name: "React: Render Patterns",
    tags: ["frontend"],
  },
  {
    name: "Next: Next.js 14",
    tags: ["frontend"],
  },
  {
    name: "Next: Next.js with GraphQL",
    tags: ["frontend"],
  },

  {
    name: "JavaScript: Node.js Fundamentals",
    tags: ["backend"],
  },
  {
    name: "Prompt Engineering",
    tags: ["ai", "automation"],
  },
  {
    name: "N8N",
    tags: ["automation", "backend"],
  },
  {
    name: "Python",
    tags: ["ai", "backend"],
  },

  {
    name: "Python: Design Patterns and SOLID Principles",
    tags: ["ai", "backend"],
  },
  {
    name: "Advanced Algorithms: Graphs and Trees",
    tags: ["ai"],
  },
  {
    name: "Photoshop for Professional Photography",
    tags: ["photovideo"],
  },

  {
    name: "Adobe Premiere Pro Video Editing",
    tags: ["photovideo"],
  },
];

const CertificationsEs = [
  {
    name: "HTML5 & CSS3",
    tags: ["frontend"],
  },
  {
    name: "CSS Grid Layout",
    tags: ["frontend"],
  },
  {
    name: "Responsive Web Design",
    tags: ["frontend"],
  },
  {
    name: "Animaciones Web",
    tags: ["frontend"],
  },
  {
    name: "Preprpocesadores de Estilos",
    tags: ["frontend"],
  },
  {
    name: "JavaScript: Básico",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Práctico",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Asincronismo",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Closures & Scope",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Frameworks",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Manipulación del DOM ",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Manipulación de Arrays",
    tags: ["frontend", "backend"],
  },
  {
    name: "JavaScript: Consumo API REST",
    tags: ["frontend", "backend"],
  },
  {
    name: "Desarrollo Frontend",
    tags: ["frontend"],
  },
  {
    name: "React: Básico",
    tags: ["frontend"],
  },
  {
    name: "React: Vite & Tailwind",
    tags: ["frontend"],
  },
  {
    name: "React: Patrons de Renderizado",
    tags: ["frontend"],
  },
  {
    name: "Next: Next.js 14",
    tags: ["frontend"],
  },
  {
    name: "Next: Next.js con GraphQL",
    tags: ["frontend"],
  },
  {
    name: "Introducción al Desarrollo Backend",
    tags: ["backend"],
  },
  {
    name: "JavaScript: Fundamentos de Node.js ",
    tags: ["frontend", "backend"],
  },
  {
    name: "Ingeniería de Prompts",
    tags: ["ai"],
  },
  {
    name: "N8N",
    tags: ["ai", "backend"],
  },
  {
    name: "Python",
    tags: ["ai", "backend"],
  },
  {
    name: "Javascript: Estructuras de Datos",
    tags: ["backend"],
  },
  {
    name: "Patrones de Diseño y Principios SOLID en Python",
    tags: ["ai", "backend"],
  },
  {
    name: "Algoritmos Avanzados: Grafos y Árboles",
    tags: ["ai"],
  },
  ,
  {
    name: "Photoshop para fotografía profesional",
    tags: ["photovideo"],
  },

  {
    name: "Edición de video con Adobe Premiere Pro",
    tags: ["photovideo"],
  },
];

const getCertificationsById = (id, english) => {
  const certifications = english === true ? CertificationsEn : CertificationsEs;
  return certifications.filter((certification) =>
    certification.tags.includes(id)
  );
};

export { getCertificationsById };
