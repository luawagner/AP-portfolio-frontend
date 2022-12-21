window.addEventListener("scroll",() =>{
    const header = document.getElementById("header");
    header.classList.toggle("abajo", window.scrollY>0)
})

/* const burger = document.getElementById("burger")
burger.addEventListener("click",() =>{
const menu = document.querySelector('menu-mobile');
const header = document.getElementById("header");
menu.classList.toggle('show');
header.classList.toggle("abajo")

}) */