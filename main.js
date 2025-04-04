let collaps = document.getElementById("colllpsBtn")
let closBtn = document.getElementById("closBtn")
let collapsnav = document.querySelector(".collapse")

closBtn.addEventListener("click", () => {
    closBtn.style.animation = "collaps  0.4s"

    collaps.classList.remove("d-none")
    closBtn.classList.add("d-none")
})
let navLink = document.querySelectorAll(".nav-link")
console.log(navLink)

collaps.addEventListener("click", function (e) {
    collaps.style.animation = "collaps  0.4s"

    collaps.classList.add("d-none")

    closBtn.classList.remove("d-none")
    collapsnav.classList.toggle("d-none")




})
navLink.forEach(navLink => {
    navLink.addEventListener("click", () => {
        collapsnav.classList.toggle("d-none")
        collaps.classList.replace("d-none", "d-block")
        closBtn.classList.add("d-none")



    })

});


