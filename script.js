const body = document.querySelector("body");
const navbarToggle = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".close-btn");
const navbarNav = document.querySelector(".navbar-nav");
const backToTopBtn = document.querySelector(".back-to-top");

navbarToggle.addEventListener("click", () => {
  body.classList.toggle("active");
  navbarNav.classList.toggle("active");
  closeBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", (e) => {
  body.classList.toggle("active");
  navbarNav.classList.toggle("active");
  e.currentTarget.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  // if window is scrolled 500px from the top
  if (scrollY > 400) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});
