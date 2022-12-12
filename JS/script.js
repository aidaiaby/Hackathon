const hamburger = document.querySelector(".hamburger")
const listMenu = document.querySelector(".navbar_list")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  listMenu.classList.toggle("active")
})

// const imageData = [
//   {
//     id:1,
//   }
// ]

// window.addEventListener("load", () => {
//   ellipseCard(imageData)
// })


// const symbols = document.querySelector(".navbar_symbols");
// function ellipseCard(base){
//   const template = base.map((image) => {
//     return `

//       <img src=${image} />
    
//     `
//   }).join(" ")

//   symbols.innerHTML = template
// }
