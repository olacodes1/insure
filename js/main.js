let menuOpen = document.querySelector(".menu");
let nav = document.querySelector(".navlinks");

menuOpen.addEventListener("click", () => {
  nav.classList.toggle("active");
  //   console.log("its working");
});
