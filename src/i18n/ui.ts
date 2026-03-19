export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.about': 'Sobre mí',
    'hero.available': 'Disponible para proyectos',
    'hero.tagline': 'Desarrollador Fullstack',
    'hero.desc': 'especializado en el ecosistema <span class="text-sky-400">React & Node.js</span>. Enfocado en construir aplicaciones escalables que transforman datos complejos en experiencias de usuario fluidas.',
    'hero.contact': 'Contactar ahora',
    'hero.cv': 'Descargar CV',
    'projects.title': 'Proyectos Seleccionados',
    'projects.view_code': 'Código fuente',
    'projects.explore': 'Explorar Proyecto',
    'experience.title': 'Experiencia Laboral',
    'experience.present': 'Actualidad',
    'about.title': 'Sobre mí',
    'about.p1': 'Mi trayectoria une el <span class="text-white">desarrollo de software</span> con una sólida base en <span class="text-sky-400">Administración de Empresas</span>, lo que me permite aportar una visión estratégica y analítica a cada producto digital.',
    'about.p2': 'Me especializo en el ecosistema JavaScript, priorizando la <span class="text-white font-medium">eficiencia técnica</span> sin perder de vista los objetivos de negocio y la experiencia del usuario final. Mi enfoque está en construir soluciones escalables que no solo funcionen, sino que impulsen el crecimiento.',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con Astro y Tailwind CSS',
    'footer.email_subject': 'Contacto desde Portfolio',
    'footer.email_body': 'Hola Diego,%0D%0A%0D%0AMe interesa tu trabajo como desarrollador.%0D%0A%0D%0ASaludos,',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.about': 'About me',
    'hero.available': 'Available for projects',
    'hero.tagline': 'Fullstack Developer',
    'hero.desc': 'specialized in the <span class="text-sky-400">React & Node.js</span> ecosystem. Focused on building scalable applications that transform complex data into fluid user experiences.',
    'hero.contact': 'Contact now',
    'hero.cv': 'Download CV',
    'projects.title': 'Selected Projects',
    'projects.view_code': 'Source code',
    'projects.explore': 'Explore Project',
    'experience.title': 'Work Experience',
    'experience.present': 'Present',
    'about.title': 'About me',
    'about.p1': 'My career combines <span class="text-white">software development</span> with a solid background in <span class="text-sky-400">Business Administration</span>, allowing me to bring a strategic and analytical vision to every digital product.',
    'about.p2': 'I specialize in the JavaScript ecosystem, prioritizing <span class="text-white font-medium">technical efficiency</span> without losing sight of business goals and the end-user experience. My focus is on building scalable solutions that not only work but drive growth.',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro and Tailwind CSS',
    'footer.email_subject': 'Contact from Portfolio',
    'footer.email_body': 'Hi Diego,%0D%0A%0D%0AIm interested in your work as a developer.%0D%0A%0D%0ABest regards,',
  },
} as const;

export const projects = {
  es: [
    {
      title: "Drakon Insights",
      description: "Plataforma de análisis de datos que consume la API oficial de Riot Games. Gestiona asincronismo y procesamiento de grandes volúmenes de datos JSON para mostrar métricas de rendimiento real.",
      link: "https://lol-app-1.onrender.com/",
      image: "/photo/lol.png",
      stack: ["REACT.JS", "NODE.JS", "CSS"],
    },
    {
      title: "Squad Management System",
      description: "Aplicación Fullstack (FC Barcelona Edition) con arquitectura Cliente-Servidor. Implementa persistencia de datos local con SQLite y un backend robusto en Node.js para la gestión de la plantilla.",
      link: "https://primer-equipo-fc-barcelona-1.onrender.com/",
      image: "/photo/barcelona.png",
      stack: ["REACT.JS", "NODE.JS", "SQLITE", "CSS"],
      repo: "https://github.com/DiegoArends/Primer-Equipo-FC-Barcelona",
    },
    {
      title: "GastonNetworks Portal",
      description: "Proyecto real para creador de contenido. Desarrollo enfocado en Web Performance y SEO, con una interfaz optimizada para dispositivos móviles y alta tasa de conversión.",
      link: "https://gastonnetworks.com/",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgastonnetworks.com%2F?w=1200",
      stack: ["REACT.JS", "NODE.JS", "CSS"],
    },
  ],
  en: [
    {
      title: "Drakon Insights",
      description: "Data analysis platform that consumes the official Riot Games API. Manages asynchrony and processing of large volumes of JSON data to display real-time performance metrics.",
      link: "https://lol-app-1.onrender.com/",
      image: "/photo/lol.png",
      stack: ["REACT.JS", "NODE.JS", "CSS"],
    },
    {
      title: "Squad Manager",
      description: "Fullstack application (FC Barcelona Edition) with Client-Server architecture. Implements local data persistence with SQLite and a robust Node.js backend for team management.",
      link: "https://primer-equipo-fc-barcelona-1.onrender.com/",
      image: "/photo/barcelona.png",
      stack: ["REACT.JS", "NODE.JS", "SQLITE", "CSS"],
      repo: "https://github.com/DiegoArends/Primer-Equipo-FC-Barcelona",
    },
    {
      title: "GastonNetworks Portal",
      description: "Real-world project for a content creator. Development focused on Web Performance and SEO, with an interface optimized for mobile devices and a high conversion rate.",
      link: "https://gastonnetworks.com/",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgastonnetworks.com%2F?w=1200",
      stack: ["REACT.JS", "NODE.JS", "CSS"],
    },
  ]
};

export const experience = {
  es: [
    {
      role: "Frontend Web Developer",
      company: "COMMITTED Organization",
      period: "Ene 2026 — Actualidad",
      description: [
        "Liderazgo técnico en el rediseño responsivo con React, Tailwind y Figma.",
        "Optimización de la arquitectura frontend y creación de módulos estratégicos de reclutamiento."
      ]
    },
    {
      role: "Fullstack Developer",
      company: "Freelance",
      period: "Jul 2025 — Actualidad",
      description: "Desarrollo de soluciones personalizadas con alto impacto visual y técnico:"
    }
  ],
  en: [
    {
      role: "Frontend Web Developer",
      company: "COMMITTED Organization",
      period: "Jan 2026 — Present",
      description: [
        "Technical leadership in the responsive redesign with React, Tailwind, and Figma.",
        "Optimization of frontend architecture and creation of strategic recruitment modules."
      ]
    },
    {
      role: "Fullstack Developer",
      company: "Freelance",
      period: "Jul 2025 — Present",
      description: "Development of custom solutions with high visual and technical impact:"
    }
  ]
};
