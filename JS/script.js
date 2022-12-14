const hamburger = document.querySelector(".hamburger")
const listMenu = document.querySelector(".navbar_list")
const aboutUsButton = document.querySelector(".aboutUsButton");
const aboutUsButton2 = document.querySelector(".aboutUsButton2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  listMenu.classList.toggle("active")
})

aboutUsButton.addEventListener("click", (event) =>{
  event.preventDefault();
  window.open
})

aboutUsButton2.addEventListener("click", (event) =>{
  event.preventDefault();
  window.open
})
