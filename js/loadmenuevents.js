import { getSources, getTopHeadlines } from "./modules/getnews.js"
import { loadSources, loadNews } from "./modules/loadnews.js"

let main = document.querySelector("main.news")

function loadEvents() {
  // HOME EVENT
  let homeLink = document.querySelector(".menu a#home-link")
  
  homeLink.addEventListener("click", (e) => {
    linkClick(e)
    
    getTopHeadlines().then(news => {
      loadNews(news.articles)
    })
    
    hideMenu()
  })
  
  // SOURCES EVENT
  let sourcesLink = document.querySelector(".menu a#sources-link")
  
  sourcesLink.addEventListener("click", (e) => {
    linkClick(e)
    
    getSources().then(sources => {
      loadSources(sources.sources)
    })
    
    hideMenu()
  })
  
  // NEWS NAV EVENTS
  let links = document.querySelectorAll("#news-nav > a")
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      linkClick(e)
      
      getTopHeadlines(link.innerText.toLowerCase()).then(news => {
        loadNews(news.articles)
      })
      
      hideMenu()
    })
  })
}

function linkClick(event) {
  event.preventDefault()
  
  main.classList.add("loading")
  main.innerHTML = `<div class="loading-circle"></div>`
  
  document.querySelector("a#search-button").style.color = "black"
  
  let search = document.querySelector("section.search")
  if (search) search.remove()
}

loadEvents()