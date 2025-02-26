
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});

const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-link");
const menuBtnIcon = menuIcon.querySelector("i");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("open");
    const isOpen = navList.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when clicking a menu item (for mobile usability)
navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navList.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});

// const menuIcon =document.getElementById("menu-icon");
// const navList =document.getElementById("nav-link")
// const menuBtnIcon = menuBtn.querySelector("i");

// menuIcon.addEventListener("click", (e)=>{
//     navList.classList.toggle("open");

//     const isOpen =navList.classList.contains("open");
//     menuBtnIcon.setAttribute("class",isOpen? "ri-close-line" : "ri-menu-line");
// });

// navList.addEventListener("click",(e)=>{
//     navList.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-line");
// })

// let menu =document.querySelector("#menu-icon");
// let navlist =document.querySelector('.navlist');

// menu.onclick =()=>{
//     menu.onclick.toggle('bx bx-menu');
//     navlist.classList.toggle('active');
// }
// window.onscroll =()=>{
//     menu.remove.toggle('bx-x');
//     navlist.remove.toggle('active');
//  }