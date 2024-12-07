import { getEverthing } from "./modules/getnews.js"
import { loadNews } from "./modules/loadnews.js"

let searchButton = document.querySelector("a#search-button")

searchButton.addEventListener("click", () => {
  if (document.querySelector("section.search")) {
    return
  }
  
  searchButton.style.color = "white"
  
  let search = document.createElement("section")
  search.classList.add("search")
  
  let form = document.createElement("form")
  form.addEventListener("submit", searchNews)
  
  let input = document.createElement("input")
  input.placeholder = "Search..."
  input.type = "search"
  
  let button = document.createElement("button")
  button.type = "submit"
  button.innerHTML = `<span class="material-symbols-outlined">search</span>`
  
  form.appendChild(input)
  form.appendChild(button)
  
  search.appendChild(form)
  
  document.body.insertBefore(search, document.querySelector("main.news"))
})

function searchNews(e) {
  e.preventDefault()

  let query = document.querySelector("section.search input")
  
  query.classList.remove("error")
  
  if (query.value == "") {
    query.classList.add("error")
    query.focus()
    return
  }
  
  let main = document.querySelector("main.news")
  
  main.classList.add("loading")
  main.innerHTML = `<div class="loading-circle"></div>`
  
  getEverthing(query.value).then(news => {
    if (news.totalResults == 0) {
      main.innerHTML = `<p>No Results Found</p>`
      return
    }
    loadNews(news.articles)
  })
}