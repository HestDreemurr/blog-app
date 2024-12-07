import { getTopHeadlines } from "./modules/getnews.js"
import { loadNews } from "./modules/loadnews.js"

let main = document.querySelector("main")

main.classList.add("loading")
main.innerHTML = `<div class="loading-circle"></div>`
getTopHeadlines().then(news => {
  loadNews(news.articles)
})