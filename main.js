document.getElementById("menu-btn").addEventListener("click", abrirMenu, false);
const menuMovil = document.getElementById("nav-menu");

function abrirMenu() {
  menuMovil.classList.toggle("menuVisible");
}

menuMovil.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className.includes("")) {
    menuMovil.classList.remove("menuVisible");
  }
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 200 });
ScrollReveal().reveal(".cards-banner-one", { delay: 200 });
ScrollReveal().reveal(".cards-banner-two", { delay: 200 });
