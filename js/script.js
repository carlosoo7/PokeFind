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



