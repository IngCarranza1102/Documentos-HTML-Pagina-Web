/*
 * proyectos-data.js
 * Fuente única de datos para el portafolio de Corporativo 1102.
 * Para agregar un proyecto nuevo: copia un objeto, cambia sus valores,
 * y sube las imágenes a images/proyectos/<id>/ (portada.ext + 01.ext, 02.ext, ...).
 * No hace falta tocar proyectos.html ni proyecto.html.
 */
const proyectosData = [
  {
    id: "ready-pizza",
    nombre: "Proyecto Ready Pizza",
    categoria: "Comercial",
    descripcion: "Diseño y proyecto arquitectónico del local de comida rápida Ready Pizza en Nogales, Sonora.",
    portada: "images/proyectos/Ready Pizza/Ready Pizza 1.png",
    galeria: [
      "images/proyectos/Ready Pizza/Ready Pizza 2.png",
      "images/proyectos/Ready Pizza/Ready Pizza 3.png",
      "images/proyectos/Ready Pizza/Ready Pizza 4.png",
      "images/proyectos/Ready Pizza/Ready Pizza 5.jpg",
      "images/proyectos/Ready Pizza/Ready Pizza 6.jpg",
      "images/proyectos/Ready Pizza/Ready Pizza 7.jpg",
      "images/proyectos/Ready Pizza/Ready Pizza 8.jpg"
    ]
  },
  {
    id: "trebol-colosio",
    nombre: "Proyecto Trébol Colosio",
    categoria: "Comercial",
    descripcion: "Diseño, proyecto arquitectónico, tramitología de permisos ante gobierno y construcción de Autoservicio El Trébol.",
    portada: "images/proyectos/Trebol Colosio/Trebol Colosio 1.png",
    galeria: [
      "images/proyectos/Trebol Colosio/Trebol Colosio 2.jpeg",
      "images/proyectos/Trebol Colosio/Trebol Colosio 3.jpeg",
      "images/proyectos/Trebol Colosio/Trebol Colosio 4.jpeg"
    ]
  },
  {
    id: "barberia-hernandez",
    nombre: "Diseño Barbería Hernández",
    categoria: "Comercial",
    descripcion: "Proyecto arquitectónico de Barbería Hernández.",
    portada: "images/proyectos/Barberia Hernandez/Barberia Hernandez 3.jpg",
    galeria: [
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 1.png",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 2.png",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 4.jpg",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 5.jpg",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 6.jpg",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 7.png",
      "images/proyectos/Barberia Hernandez/Barberia Hernandez 8.jpg"
    ]
  },
  {
    id: "puertas-chamberlain",
    nombre: "Puertas Automáticas — Maquiladora Chamberlain Group",
    categoria: "Industrial",
    descripcion: "Colocación de puertas automáticas en maquiladora Chamberlain Group, además de adecuaciones en el área de acceso.",
    portada: "images/proyectos/Chamberlain Puertas/Puertas Chamberlain 4.jpeg",
    galeria: [
      "images/proyectos/Chamberlain Puertas/Puertas Chamberlain 1.jpeg",
      "images/proyectos/Chamberlain Puertas/Puertas Chamberlain 2.jpeg",
      "images/proyectos/Chamberlain Puertas/Puertas Chamberlain 3.jpeg",
      "images/proyectos/Chamberlain Puertas/Puertas Chamberlain 5.jpeg"
    ]
  },
  {
    id: "raramuri",
    nombre: "Proyecto Rarámuri",
    categoria: "Comercial",
    descripcion: "Ubicado en Cíbuta, Sonora. Colocación de piedra laja en aproximadamente 850 m² en área de entrada y estacionamiento.",
    portada: "images/proyectos/Proyecto Raramuri/Proyecto Raramuri 4.jpeg",
    galeria: [
      "images/proyectos/Proyecto Raramuri/Proyecto Raramuri 1.jpeg",
      "images/proyectos/Proyecto Raramuri/Proyecto Raramuri 2.jpeg",
      "images/proyectos/Proyecto Raramuri/Proyecto Raramuri 3.jpeg"
    ]
  },
  {
    id: "rancho-la-campana",
    nombre: "Proyecto Rancho La Campana",
    categoria: "Residencial",
    descripcion: "Proyecto arquitectónico y construcción de área para fiestas y reuniones a base de adoquín de 3 colores distintos, incluyendo la construcción de una cisterna de 10,000 litros.",
    portada: "images/proyectos/Proyecto La Campana/Proyecto Campana 3.jpeg",
    galeria: [
      "images/proyectos/Proyecto La Campana/Proyecto Campana 1.jpeg",
      "images/proyectos/Proyecto La Campana/Proyecto Campana 2.jpeg",
      "images/proyectos/Proyecto La Campana/Proyecto Campana 4.jpeg"
    ]
  },
  {
    id: "remodelacion-cedros",
    nombre: "Remodelación Cedros",
    categoria: "Residencial",
    descripcion: "Diseño, construcción y ampliación por dentro y por fuera de casa habitación.",
    portada: "images/proyectos/Remodelacion Cedros/Remodelacion Cedros 5.jpeg",
    galeria: [
      "images/proyectos/Remodelacion Cedros/Remodelacion Cedros 1.jpeg",
      "images/proyectos/Remodelacion Cedros/Remodelacion Cedros 2.jpeg",
      "images/proyectos/Remodelacion Cedros/Remodelacion Cedros 3.jpeg",
      "images/proyectos/Remodelacion Cedros/Remodelacion Cedros 4.jpeg"
    ]
  },
  {
    id: "proyecto-kt",
    nombre: "Proyecto KT",
    categoria: "Residencial",
    descripcion: "Proyecto arquitectónico y construcción de fachada y sala comedor.",
    portada: "images/proyectos/Proyecto KT/Proyecto KT 5.png",
    galeria: [
      "images/proyectos/Proyecto KT/Proyecto KT 1.jpeg",
      "images/proyectos/Proyecto KT/Proyecto KT 2.jpeg",
      "images/proyectos/Proyecto KT/Proyecto KT 3.jpeg",
      "images/proyectos/Proyecto KT/Proyecto KT 4.png"
    ]
  },
  {
    id: "terraza-al",
    nombre: "Diseño de Terraza AL",
    categoria: "Residencial",
    descripcion: "Diseño y construcción de terraza en un tercer piso, con barandal de vidrio templado.",
    portada: "images/proyectos/Terraza AL/Terraza AL 2.jpg",
    galeria: [
      "images/proyectos/Terraza AL/Terraza AL 1.jpg",
      "images/proyectos/Terraza AL/Terraza AL 3.jpg"
    ]
  },
  {
    id: "oficina",
    nombre: "Diseño de Oficina",
    categoria: "Residencial",
    descripcion: "Diseño de oficina para trabajo y cuarto gamer.",
    portada: "images/proyectos/Diseño Oficina/Diseño Oficina 1.jpg",
    galeria: [
      "images/proyectos/Diseño Oficina/Diseño Oficina 2.jpg",
      "images/proyectos/Diseño Oficina/Diseño Oficina 3.jpg"
    ]
  },
  {
    id: "patio-trasero",
    nombre: "Diseño de Patio Trasero",
    categoria: "Residencial",
    descripcion: "Diseño de patio trasero enfocado en los niños, con canasta de basketball, aprovechando el desnivel del terreno para colocar un tobogán.",
    portada: "images/proyectos/Diseño Patio/Patio 1.jpg",
    galeria: [
      "images/proyectos/Diseño Patio/Patio 2.jpg",
      "images/proyectos/Diseño Patio/Patio 3.jpg"
    ]
  },
  {
    id: "tejaban-m",
    nombre: "Proyecto Tejabán M",
    categoria: "Residencial",
    descripcion: "Diseño y construcción de tejabán en departamento.",
    portada: "images/proyectos/Tejaban M/Tejaban M 2.jpeg",
    galeria: [
      "images/proyectos/Tejaban M/Tejaban M 1.jpeg",
      "images/proyectos/Tejaban M/Tejaban M 3.jpeg"
    ]
  }
];
