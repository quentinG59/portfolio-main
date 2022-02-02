const btnOpen = document.querySelector(".btn-open");
const nav = document.querySelector(".nav");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

btnClose.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("hideLoader");
  }, 12000);
});
