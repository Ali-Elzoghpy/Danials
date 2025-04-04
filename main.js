let openBtn = document.getElementById("colllpsBtn");
let closeBtn = document.getElementById("closBtn");
let navbar = document.getElementById("navbarNav");
let navLinks = document.querySelectorAll(".nav-link");

openBtn.addEventListener("click", () => {
    navbar.classList.remove("d-none");
    closeBtn.classList.remove("d-none");
    openBtn.classList.add("d-none");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.add("d-none");
    closeBtn.classList.add("d-none");
    openBtn.classList.remove("d-none");
});

// navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       navbar.classList.add("d-none");
//       closeBtn.classList.add("d-none");
//       openBtn.classList.remove("d-none");
//     });
//   });;