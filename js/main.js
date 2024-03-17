const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n.
    addEventListener("click", () => {
        menu.classList.remove("active");
        navList.classList.remove("active");
    }))