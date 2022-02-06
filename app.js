const btnOpen = document.querySelector(".btn-open");
const nav = document.querySelector(".nav");
const btnClose = document.querySelector(".btn-close");
const btnProject = document.querySelector("#projet");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".btn-project");

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("showModal");
});

btnProject.addEventListener("click", () => {
  modal.classList.add("showModal");
});

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
  });
});
