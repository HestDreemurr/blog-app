let menuContainer = document.querySelector("section.menu-container")
let menu = document.querySelector(".menu")

menuContainer.addEventListener("click", (e) => {
  if (e.target === menuContainer) {
    hideMenu()
  }
})

function showMenu() {
  menuContainer.style.display = "block"
  
  menu.style.transform = "translateX(0px)"
  
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)
}

function hideMenu() {
  if (document.body.offsetWidth >= 992) {
    return
  }
  
  menu.style.transform = "translateX(-60vw)"
  
  setTimeout(() => {
    menuContainer.style.display = "none"
  }, 500)
  
  document.querySelector(".overlay").remove()
}

function showNewsNav() {
  let showNav = document.querySelector("#show-news-nav > span.material-symbols-outlined")
  let newsNav = document.querySelector("#news-nav")
  
  if (showNav.innerText.endsWith("down")) {
    newsNav.style.display = "block"
    showNav.innerText = "keyboard_arrow_up"
  } else {
    newsNav.style.display = "none"
    showNav.innerText = "keyboard_arrow_down"
  }
}