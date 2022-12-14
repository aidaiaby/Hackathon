const hamburger = document.querySelector(".hamburger")
const listMenu = document.querySelector(".navbar_list")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  listMenu.classList.toggle("active")
})
