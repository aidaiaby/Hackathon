const hamburger = document.querySelector(".hamburger")
const listMenu = document.querySelector(".navbar_list")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  listMenu.classList.toggle("active")
})


// Footer //

const footerBanner = document.querySelector(".footer_banner");
window.addEventListener("load", () => {
  footerCard()
})
function footerCard(base){
  const footerTemplate = base.map(item => {
    return `
    
    `
  })
}
