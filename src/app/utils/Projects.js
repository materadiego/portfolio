const ProjectsEn = [
  {
    id: "kusta",
    name: "Kusta Barbertruck",
    description:
      "Landing page developed for Kusta, consolidating all their services into a single, intuitive, and modern website.",
    image: "projects-kusta.png",
    link: "https://barbertruck.com.ar/",
    profileLabel: ["frontend"],
  },
  {
    id: "srfin",
    name: "Sr.Fin Company",
    description:
      "Web app for viewing photo albums. Developed with ReactJS and Sass.",
    image: "projects-srfin.png",

    link: "https://srfin.com.ar/",
    profileLabel: ["frontend", "photovideo"],
  },
  {
    id: "sparkloom",
    name: "SparkLoom Studio",
    description: "Landing page developed for a digital solutions agency.",
    image: "projects-sparkloom.png",
    link: "https://sparkloomstudio.com/",
    profileLabel: ["frontend"],
  },

  {
    id: "vernal",
    name: "Vernal Studio",
    description:
      "Graphic design, marketing, UX/UI agency. Single-page application built using ReactJS & Sass.",
    image: "projects-vernal.png",
    link: "https://materadiego.github.io/vernal-studio/#/",
    profileLabel: ["frontend"],
  },
  {
    id: "tuespacio",
    name: "Tu Espacio",
    description:
      "Interior design company. Single-page application built using ReactJS & Sass.",
    image: "projects-tuespacio.png",
    link: "https://materadiego.github.io/tu-espacio-react/",
    profileLabel: ["frontend"],
  },
  {
    id: "mytasks",
    name: "My Task App",
    description:
      "App focused on recording pending tasks & setting priorities. Deveolped using ReactJS.",
    image: "projects-mytasks.png",
    link: "https://example.com/project1",
    profileLabel: ["frontend"],
  },

  {
    id: "aura",
    name: "Aura Films",
    description:
      "Movie search App developed using Axios, aplying loading skeletons & infinite scrolling",
    image: "projects-aura.png",
    link: "https://materadiego.github.io/aura-films/",
    profileLabel: ["frontend"],
  },
  {
    id: "cocinas",
    name: "Cocinas Ocultas",
    description:
      "A venture located in Uruguay dedicated to the gastronomic industry. Developed using HTML, CSS & Javascript.",
    image: "projects-cocinas.png",
    link: "https://materadiego.github.io/cocinas-ocultas/",
    profileLabel: ["frontend"],
  },
];

const ProjectsEs = [
  {
    id: "kusta",
    name: "Kusta Barbertruck",
    description:
      "Landing page desarrollada para Kusta, consolidando todos sus servicios en un solo sitio web intuitivo y moderno.",
    image: "projects-kusta.png",
    link: "https://barbertruck.com.ar/",
    profileLabel: ["frontend"],
  },
  {
    id: "srfin",
    name: "Sr.Fin Company",
    description:
      "App web para visualización de álbumes fotográficos. Desarrollada con RactJS y Sass.",
    image: "projects-srfin.png",
    link: "https://srfin.com.ar/",
    profileLabel: ["frontend"],
  },
  {
    id: "sparkloom",
    name: "SparkLoom Studio",
    description:
      "Landing page desarrollada para agencia de soluciones digitales.",
    image: "projects-sparkloom.png",
    link: "https://sparkloomstudio.com/",
    profileLabel: ["frontend"],
  },
  {
    id: "vernal",
    name: "Vernal Studio",
    description:
      "Agencia de diseño gráfico, marketing, UX/UI. Aplicación de una sola página construida con ReactJS y Sass.",
    image: "projects-vernal.png",
    link: "https://materadiego.github.io/vernal-studio/#/",
    profileLabel: ["frontend"],
  },
  {
    id: "tuespacio",
    name: "Tu Espacio",
    description:
      "Empresa de diseño de interiores. Aplicación de una sola página construida con ReactJS y Sass.",
    image: "projects-tuespacio.png",
    link: "https://materadiego.github.io/tu-espacio-react/",
    profileLabel: ["frontend"],
  },
  {
    id: "mytasks",
    name: "My Task App",
    description:
      "App enfocada en registrar tareas pendientes y establecer prioridades. Desarrollada con ReactJS.",
    image: "projects-mytasks.png",
    link: "https://example.com/project1",
    profileLabel: ["frontend"],
  },
  {
    id: "aura",
    name: "Aura Films",
    description:
      "Aplicación de búsqueda de películas desarrollada con Axios, aplicando esqueletos de carga y desplazamiento infinito.",
    image: "projects-aura.png",
    link: "https://materadiego.github.io/aura-films/",
    profileLabel: ["frontend"],
  },

  {
    id: "cocinas",
    name: "Cocinas Ocultas",
    description:
      "Un emprendimiento ubicado en Uruguay dedicado a la industria gastronómica. Desarrollado con HTML, CSS y Javascript.",
    image: "projects-cocinas.png",
    link: "https://materadiego.github.io/cocinas-ocultas/",
    profileLabel: ["frontend"],
  },
];

const getProjectsByProfileLabel = (profileLabel, english) => {
  const projects = english === true ? ProjectsEn : ProjectsEs;
  return projects.filter((project) =>
    project.profileLabel.includes(profileLabel)
  );
};

export { getProjectsByProfileLabel };
