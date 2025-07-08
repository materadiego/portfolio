const KnowledgeEn = [
  {
    id: "frontend",
    description:
      "Diseño y desarrollo interfaces modernas, accesibles y optimizadas para todos los dispositivos. Uso tecnologías como React, Next.js y animaciones sutiles para crear experiencias intuitivas, dinámicas y visualmente atractivas. Me enfoco en la performance, la usabilidad y una estética minimalista que refleje la identidad de cada proyecto.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "backend",
    description:
      "Construyo APIs robustas y escalables con tecnologías como Node.js y NestJS, conectando sistemas, bases de datos y servicios externos de forma eficiente. Diseño arquitecturas limpias, seguras y mantenibles, priorizando la estructura lógica, la validación de datos y una comunicación fluida entre frontend y backend.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "automation",
    description:
      "Automatizo tareas repetitivas y flujos de trabajo para optimizar el tiempo y reducir errores operativos. Utilizo plataformas como n8n, Zapier o soluciones a medida que integran APIs, bases de datos y servicios externos. Desde agendamientos inteligentes hasta reportes automatizados, implemento sistemas que mejoran la eficiencia y la escalabilidad.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "ai",
    description:
      "Desarrollo soluciones que integran inteligencia artificial para potenciar productos digitales. Diseño agentes conversacionales, workflows inteligentes y sistemas RAG (retrieval-augmented generation) que conectan modelos de lenguaje con bases de datos para ofrecer respuestas más precisas y personalizadas. Uso herramientas como LangChain, OpenAI y APIs de IA.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "photovideo",
    description:
      "Capturo momentos con una mirada creativa y profesional, enfocándome en deportes, retratos y lifestyle. Combino técnica, composición y postproducción para transmitir emociones e identidad visual. También produzco contenido audiovisual para marcas, redes sociales o eventos, adaptado a cada canal y objetivo de comunicación.",
    technologies: [],
    certifications: [],
    projects: [],
  },
];

const KnowledgeEs = [
  {
    id: "frontend",
    description:
      "Diseño y desarrollo interfaces modernas, accesibles y optimizadas para todos los dispositivos. Uso tecnologías como React, Next.js y animaciones sutiles para crear experiencias intuitivas, dinámicas y visualmente atractivas. Me enfoco en la performance, la usabilidad y una estética minimalista que refleje la identidad de cada proyecto.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "backend",
    description:
      "Construyo APIs robustas y escalables con tecnologías como Node.js y NestJS, conectando sistemas, bases de datos y servicios externos de forma eficiente. Diseño arquitecturas limpias, seguras y mantenibles, priorizando la estructura lógica, la validación de datos y una comunicación fluida entre frontend y backend.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "automation",
    description:
      "Automatizo tareas repetitivas y flujos de trabajo para optimizar el tiempo y reducir errores operativos. Utilizo plataformas como n8n, Zapier o soluciones a medida que integran APIs, bases de datos y servicios externos. Desde agendamientos inteligentes hasta reportes automatizados, implemento sistemas que mejoran la eficiencia y la escalabilidad.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "ai",
    description:
      "Desarrollo soluciones que integran inteligencia artificial para potenciar productos digitales. Diseño agentes conversacionales, workflows inteligentes y sistemas RAG (retrieval-augmented generation) que conectan modelos de lenguaje con bases de datos para ofrecer respuestas más precisas y personalizadas. Uso herramientas como LangChain, OpenAI y APIs de IA.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "photovideo",
    description:
      "Capturo momentos con una mirada creativa y profesional, enfocándome en deportes, retratos y lifestyle. Combino técnica, composición y postproducción para transmitir emociones e identidad visual. También produzco contenido audiovisual para marcas, redes sociales o eventos, adaptado a cada canal y objetivo de comunicación.",
    technologies: [],
    certifications: [],
    projects: [],
  },
];

// export { KnowledgeEn, KnowledgeEs };

const getSectionById = (id, english) => {
  const knowledge = english === true ? KnowledgeEn : KnowledgeEs;
  return knowledge.find((section) => section.id === id);
};

export { getSectionById };
