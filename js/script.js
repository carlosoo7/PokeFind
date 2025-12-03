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

//Funcion Buscar por nombre
async function buscarPorNombre() {
  const seachName= document.getElementById("searchName").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${seachName}`;
  const urlSpecie = `https://pokeapi.co/api/v2/pokemon-species/${seachName}`;
  const res = await fetch(url);
  const resEspecie = await fetch(urlSpecie);
  for (let index = 0 ; index < 4 ; index++) {
  document.getElementById(`ocult${index}`).style.display = "none";
  }
//Si no encuentra
  if (!res.ok) {
    document.getElementById('N_Productod').textContent="Pokemon No Encontrado";
    return;
  }
 
  const data = await res.json();
  const dataSpecies= await resEspecie.json();
  //Agregamos a la tarjeta los datos principales (Nombre/Imagen/id/descricpion)
  const imagen = data.sprites.other["official-artwork"].front_default;
  document.getElementById(`img`).src = imagen;
  let name = data.name;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById('N_Productod').textContent=name;
  document.getElementById(`id`).textContent="id: " + data.id;
  const descripciones = dataSpecies.flavor_text_entries.filter(
    (entry) => entry.language.name === "es"
  );
  const descripcionReciente = descripciones.pop().flavor_text.replace(/\n|\f/g, " ");
  document.getElementById(`descripcion`).textContent = descripcionReciente;  
  renderStats(data.stats, "stats");
  mostrarTipos(data);
  document.getElementById("Busqueda").style.display = "block";
}


//Funcion encargada de llenar la tarjeta con estadisticas del pokemon
function renderStats(stats, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // limpiar

    stats.forEach(stat => {
        const nombre = stat.stat.name.toUpperCase(); // HP, ATTACK, etc.
        const valor = stat.base_stat;
        const porcentaje = Math.min(valor, 100); // límite visual
        container.innerHTML += `
            <div class="stat-row">
                <div class="stat-label">${nombre}: ${valor}</div>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${porcentaje}%;"></div>
                </div>
            </div>
        `;
    });
}
//Funcion para mostrar los tipos de pokemon
function mostrarTipos(data) {
    const typesDiv = document.getElementById("types");
    typesDiv.innerHTML = ""; // limpiar

    data.types.forEach(t => {
        const tipo = t.type.name; // nombre del tipo

        const badge = document.createElement("span");
        badge.classList.add("type-badge", `type-${tipo}`);
        badge.textContent = tipo;

        typesDiv.appendChild(badge);
    });
}

//Funcion Modo CLaro/Oscuro
function toggleTheme() {
    const body = document.body;
    const toggle = document.getElementById("themeToggle");

    if (toggle.checked) {
      //Invertir colores y cambiar imagenes de fondo
      document.documentElement.style.setProperty("--color-primario", "rgb(0, 0, 0)");
      document.documentElement.style.setProperty("--color-secundario", "rgb(255, 255, 255)");
      document.getElementById("Banner").style.backgroundImage = 'url("/img/Pokmonclaro.jpg")';
      document.querySelector("main").style.backgroundImage = 'url("/img/Fondoclaro.jpg")';
    } else {
      document.documentElement.style.setProperty("--color-primario", "rgb(255, 255, 255)");
      document.documentElement.style.setProperty("--color-secundario", "rgb(0, 0, 0)");
      document.getElementById("Banner").style.backgroundImage = 'url("/img/Pokmon.jpg")';
      document.querySelector("main").style.backgroundImage = 'url("/img/Fondo3.jpg")';
    }
}

//Funcion para rellenar tarjetas al inicio
async function Random() {
  for (let index = 0 ; index < 4 ; index++) {
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
  //Nombre
  document.getElementById(`title${index}`).textContent=dataPokemon.name;
  //Imagen
  const imagen = dataPokemon.sprites.other["official-artwork"].front_default;
  document.getElementById(`img${index}`).src = imagen;
  // Filtrar descripciones en español
  const descripciones = dataSpecies.flavor_text_entries.filter(
    (entry) => entry.language.name === "es"
  );
   // Tomar descripcion más reciente
  const descripcionReciente = descripciones.pop().flavor_text.replace(/\n|\f/g, " ");   
  document.getElementById(`descripcion${index}`).textContent = descripcionReciente;
  } 

}