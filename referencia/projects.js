// ============================================================
// EDITA AQUÍ: tus proyectos y tecnologías.
// Los datos de abajo son EJEMPLOS, reemplázalos con los reales.
// - image: ruta a una captura (ej. "img/dentissa.png"). Déjalo vacío para usar un placeholder.
// - demo / repo: pon la URL o déjalo vacío ("") para ocultar el enlace.
// ============================================================

const projects = [
  {
    title: "Dentissa",
    description: "Aplicación web para gestionar citas en consultorios dentales: agenda, pacientes y recordatorios.",
    tags: ["TODO: stack"],
    image: "",
    demo: "",
    repo: "https://github.com/Jonathanb-a"
  },
  {
    title: "SystemInventario",
    description: "Sistema de gestión de inventarios con control de productos, entradas y salidas.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "",
    demo: "",
    repo: "https://github.com/Jonathanb-a"
  },
  {
    title: "Sistema de actividades recreativas",
    description: "Plataforma web para gestionar las actividades recreativas de un hotel. Proyecto real en producción.",
    tags: ["TODO: stack"],
    image: "",
    demo: "",
    repo: ""
  },
  {
    title: "Plataforma multitienda",
    description: "E-commerce multitienda para ropa y calzado deportivo, desarrollado para un cliente.",
    tags: ["TODO: stack"],
    image: "",
    demo: "",
    repo: ""
  }
];

const skills = ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Git y GitHub"];

// ---------- Render (no necesitas tocar esto) ----------
const grid = document.getElementById("grid");

function link(url, label) {
  return url ? `<a href="${url}" target="_blank" rel="noopener">${label}</a>` : "";
}

grid.innerHTML = projects.map(p => `
  <article class="card">
    ${p.image
      ? `<img class="thumb" src="${p.image}" alt="Captura de ${p.title}" loading="lazy">`
      : `<div class="thumb">Captura próximamente</div>`}
    <div class="body">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="links">${link(p.demo, "Demo en vivo ↗")}${link(p.repo, "Código ↗")}</div>
    </div>
  </article>
`).join("");

document.getElementById("skills").innerHTML = skills.map(s => `<li>${s}</li>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();
