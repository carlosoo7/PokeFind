const navbar = document.getElementById("vars");



// Posición inicial del navbar
const navbarOffsetTop = navbar.offsetTop;

// Función que fija el navbar cuando se hace scroll
function fixNavbarOnScroll() {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
// Evento de scroll
window.addEventListener("scroll", fixNavbarOnScroll);

async function buscarPorNombre() {
  const seachName= document.getElementById("searchName").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${seachName}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Pokémon no encontrado");
    return;
  }

  const data = await res.json();

  console.log("ID:", data.id);
  console.log("Nombre:", data.name);
}

async function buscarPorId() {
  const seachId= document.getElementById("searchId").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${seachId}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Pokémon no encontrado");
    return;
  }

  const data = await res.json();

  console.log("ID:", data.id);
  console.log("Nombre:", data.name);
}

