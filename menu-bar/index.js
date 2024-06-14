
const home = document.getElementById("home")
const news = document.getElementById("news")
const contact = document.getElementById("contact")
const about = document.getElementById("about")
const search = document.getElementById("search")

// home.addEventListener('click', () => {
//   home.classList.add("active")
//   news.classList.remove("active")
//   contact.classList.remove("active")
//   about.classList.remove("active")
//   search.classList.remove("active")
// })

// news.addEventListener('click', () => {
//   news.classList.add("active")
//   home.classList.remove("active")
//   contact.classList.remove("active")
//   about.classList.remove("active")
//   search.classList.remove("active")
// })

// contact.addEventListener('click', () => {
//   contact.classList.add("active")
//   news.classList.remove("active")
//   home.classList.remove("active")
//   about.classList.remove("active")
//   search.classList.remove("active")
// })

// search.addEventListener('click', () => {
//   search.classList.add("active")
//   news.classList.remove("active")
//   contact.classList.remove("active")
//   about.classList.remove("active")
//   home.classList.remove("active")
// })

// about.addEventListener('click', () => {
//   about.classList.add("active")

//   news.classList.remove("active")
//   contact.classList.remove("active")
//   home.classList.remove("active")
//   search.classList.remove("active")
// })



const menuListTags = document.querySelectorAll("#box a")

console.log(menuListTags)

menuListTags.forEach(elm => {

  elm.addEventListener("click", () => {

    menuListTags.forEach(itm => {
      itm.classList.remove("active")
    })

    elm.classList.add('active')
  })
})

