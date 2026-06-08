const libros = [
{
    id:1,
    titulo:"Clean Code",
    autor:"Robert C. Martin",
    categoria:"Programacion",
    anio:2008,
    portada:"img/libros/cleanCode.jpg",
    descripcion:"Guía fundamental sobre buenas prácticas de programación, código limpio y desarrollo de software mantenible."
},
{
    id:2,
    titulo:"Java: Como Programar",
    autor:"Deitel & Deitel",
    categoria:"Programacion",
    anio:2014,
    portada:"img/libros/comoProgramar.jpg",
    descripcion:"Libro completo para aprender programación en Java desde conceptos básicos hasta temas avanzados."
},
{
    id:3,
    titulo:"Eloquent JavaScript",
    autor:"Marijn Haverbeke",
    categoria:"Programacion",
    anio:2018,
    portada:"img/libros/eloquent.jpg",
    descripcion:"Introducción moderna al lenguaje JavaScript con ejemplos prácticos y ejercicios interactivos."
},
{
    id:4,
    titulo:"Head First Java",
    autor:"Kathy Sierra",
    categoria:"Programacion",
    anio:2005,
    portada:"img/libros/HeadFirstJava.jpg",
    descripcion:"Aprende Java de manera visual y dinámica mediante ejemplos fáciles de comprender."
},
{
    id:5,
    titulo:"The Pragmatic Programmer",
    autor:"Andrew Hunt",
    categoria:"Programacion",
    anio:1999,
    portada:"img/libros/ThePragmaticProgrammer.jpg",
    descripcion:"Consejos y estrategias para convertirse en un desarrollador profesional y eficiente."
},

{
    id:6,
    titulo:"Redes de Computadoras",
    autor:"Andrew S. Tanenbaum",
    categoria:"Tecnologia",
    anio:2011,
    portada:"img/libros/RedesComputadoras.jpg",
    descripcion:"Explica el funcionamiento de redes modernas, protocolos y comunicación entre dispositivos."
},
{
    id:7,
    titulo:"Sistemas Operativos Modernos",
    autor:"Andrew S. Tanenbaum",
    categoria:"Tecnologia",
    anio:2014,
    portada:"img/libros/sistemasOperativosModernos.jpg",
    descripcion:"Estudio detallado de los sistemas operativos, procesos, memoria y administración de recursos."
},
{
    id:8,
    titulo:"Computer Networking",
    autor:"James Kurose",
    categoria:"Tecnologia",
    anio:2017,
    portada:"img/libros/computerNetworking.jpg",
    descripcion:"Introducción práctica a redes informáticas con enfoque en arquitectura y protocolos."
},
{
    id:9,
    titulo:"Fundamentos de Redes",
    autor:"Cisco Networking Academy",
    categoria:"Tecnologia",
    anio:2020,
    portada:"img/libros/fundamentosRedes.jpg",
    descripcion:"Conceptos esenciales sobre redes, conectividad y transmisión de datos."
},
{
    id:10,
    titulo:"Introduccion a la Ciberseguridad",
    autor:"Cisco",
    categoria:"Tecnologia",
    anio:2021,
    portada:"img/libros/introduccionCiberseguridad.jpg",
    descripcion:"Panorama general de amenazas digitales y principios básicos de seguridad informática."
},

{
    id:11,
    titulo:"El Principito",
    autor:"Antoine de Saint-Exupery",
    categoria:"Literatura",
    anio:1943,
    portada:"img/libros/Elprincipito.jpg",
    descripcion:"Historia clásica que explora la amistad, el amor y el significado de la vida."
},
{
    id:12,
    titulo:"Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    categoria:"Literatura",
    anio:1605,
    portada:"img/libros/donQuijote.jpg",
    descripcion:"Obra maestra de la literatura española que narra las aventuras de un caballero soñador."
},
{
    id:13,
    titulo:"Cien Anos de Soledad",
    autor:"Gabriel Garcia Marquez",
    categoria:"Literatura",
    anio:1967,
    portada:"img/libros/cienAnosSoledad.jpg",
    descripcion:"Novela emblemática del realismo mágico que relata la historia de la familia Buendía."
},
{
    id:14,
    titulo:"Orgullo y Prejuicio",
    autor:"Jane Austen",
    categoria:"Literatura",
    anio:1813,
    portada:"img/libros/orgulloPrejuicio.jpg",
    descripcion:"Romance clásico que analiza las relaciones humanas y las diferencias sociales."
},
{
    id:15,
    titulo:"Cronica de una Muerte Anunciada",
    autor:"Gabriel Garcia Marquez",
    categoria:"Literatura",
    anio:1981,
    portada:"img/libros/cronicaMuerteAnunciada.jpg",
    descripcion:"Relato que reconstruye un crimen anunciado desde diferentes perspectivas."
},

{
    id:16,
    titulo:"Breve Historia del Tiempo",
    autor:"Stephen Hawking",
    categoria:"Ciencia",
    anio:1988,
    portada:"img/libros/historiaTiempo.jpg",
    descripcion:"Explicación accesible sobre el universo, el tiempo y los grandes misterios de la física."
},
{
    id:17,
    titulo:"Cosmos",
    autor:"Carl Sagan",
    categoria:"Ciencia",
    anio:1980,
    portada:"img/libros/Cosmos.jpg",
    descripcion:"Viaje fascinante por el universo y los descubrimientos científicos de la humanidad."
},
{
    id:18,
    titulo:"El Gen Egoista",
    autor:"Richard Dawkins",
    categoria:"Ciencia",
    anio:1976,
    portada:"img/libros/ElGenEgoísta.jpg",
    descripcion:"Análisis de la evolución biológica desde la perspectiva de los genes."
},
{
    id:19,
    titulo:"El Universo en una Cascara de Nuez",
    autor:"Stephen Hawking",
    categoria:"Ciencia",
    anio:2001,
    portada:"img/libros/CascaraNuez.jpg",
    descripcion:"Exploración de conceptos avanzados de física moderna explicados de forma sencilla.",
},
{
    id:20,
    titulo:"El Origen de las Especies",
    autor:"Charles Darwin",
    categoria:"Ciencia",
    anio:1859,
    portada:"img/libros/origenEspecies.jpg",
    descripcion:"Obra revolucionaria donde se presenta la teoría de la evolución por selección natural."
},

{
    id:21,
    titulo:"Habitos Atomicos",
    autor:"James Clear",
    categoria:"Desarrollo Personal",
    anio:2018,
    portada:"img/libros/habitosAtomicos.jpg",
    descripcion:"Método práctico para construir buenos hábitos y eliminar conductas negativas."
},
{
    id:22,
    titulo:"Los 7 Habitos de la Gente Altamente Efectiva",
    autor:"Stephen Covey",
    categoria:"Desarrollo Personal",
    anio:1989,
    portada:"img/libros/7habitos.jpg",
    descripcion:"Principios para mejorar la productividad, liderazgo y desarrollo personal."
},
{
    id:23,
    titulo:"Padre Rico Padre Pobre",
    autor:"Robert Kiyosaki",
    categoria:"Desarrollo Personal",
    anio:1997,
    portada:"img/libros/PadreRicoPadrePobre.jpg",
    descripcion:"Introducción a conceptos de educación financiera y generación de riqueza."
},
{
    id:24,
    titulo:"Como Ganar Amigos e Influir sobre las Personas",
    autor:"Dale Carnegie",
    categoria:"Desarrollo Personal",
    anio:1936,
    portada:"img/libros/comoGanarAmigos.jpg",
    descripcion:"Técnicas para mejorar la comunicación y fortalecer las relaciones interpersonales."
},
{
    id:25,
    titulo:"El Poder del Ahora",
    autor:"Eckhart Tolle",
    categoria:"Desarrollo Personal",
    anio:1997,
    portada:"img/libros/elPoderAhora.jpg",
    descripcion:"Reflexión sobre la importancia de vivir plenamente en el presente."
}
];