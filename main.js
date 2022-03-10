document.getElementById("menu-btn").addEventListener("click", abrirMenu, false);
const menuMovil = document.getElementById("nav-menu");

function abrirMenu() {
  menuMovil.classList.toggle("menuVisible");
}

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
