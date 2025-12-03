const navbar = document.getElementById("vars");

document.addEventListener("DOMContentLoaded", () => {
  Random();
});


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

async function Random() {
  for (let index = 0 ; index < 6 ; index++) {
  const numeroRandom = Math.floor(Math.random() * 1000) + 1;
  //setear id
  document.getElementById(`id${index}`).textContent="id: " + numeroRandom;
  //Consultas
  const urlRandom = `https://pokeapi.co/api/v2/pokemon/${numeroRandom}`;
  const urlSpeciesRandom = `https://pokeapi.co/api/v2/pokemon-species/${numeroRandom}`;
  //Resultados consultas
  const resPokemon = await fetch(urlRandom);
  const dataPokemon = await resPokemon.json(); //Json
  const resSpecies = await fetch(urlSpeciesRandom);
  const dataSpecies = await resSpecies.json(); //Json
  //Imagen
  const imagen = dataPokemon.sprites.other["official-artwork"].front_default;
  document.getElementById(`img${index}`).src = imagen;
  //Nombre y descripcion
  document.getElementById(`title${index}`).textContent=dataPokemon.name;

  // Filtrar descripciones en español
  const descripciones = dataSpecies.flavor_text_entries.filter(
    (entry) => entry.language.name === "es"
  );
   // Tomar descripcion más reciente
  const descripcionReciente = descripciones.pop().flavor_text.replace(/\n|\f/g, " ");   
  document.getElementById(`descripcion${index}`).textContent = descripcionReciente;
  } 

}