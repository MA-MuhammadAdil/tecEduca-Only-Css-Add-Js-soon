 const menuBtn = document.getElementById("menu-btn-js");
const navUl = document.querySelector("nav .navigation ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
});
