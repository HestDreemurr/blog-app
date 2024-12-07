let main = document.querySelector("main.news")

export function loadNews(news) {
  news.forEach(n => {
    if (!n.author) {
      return
    }
    
    let section = document.createElement("section")
    section.classList.add("new")
    section.addEventListener("click", () => {
      window.location.href = n.url
    })
    
    let source = document.createElement("h4")
    source.classList.add("source")
    source.innerText = n.source.name
    
    let title = document.createElement("h2")
    title.classList.add("title")
    title.innerText = n.title
    
    let description = document.createElement("h3")
    description.classList.add("description")
    description.innerText = n.description
    
    let image = document.createElement("img")
    image.classList.add("image")
    image.src = n.urlToImage
    image.alt = n.description
    
    let content = document.createElement("p")
    content.classList.add("content")
    content.innerText = n.content
    
    let published = document.createElement("p")
    published.classList.add("published")
    published.innerText = n.publishedAt
    
    let load = document.querySelector(".loading-circle")
    if (load) {
      load.remove()
      main.classList.remove("loading")
    }
    
    section.appendChild(source)
    section.appendChild(title)
    section.appendChild(description)
    if (n.urlToImage) {
      section.appendChild(image)
    }
    section.appendChild(content)
    section.appendChild(published)
    
    main.appendChild(section)
  })
}

export function loadSources(sources) {
  sources.forEach(source => {
    let section = document.createElement("section")
    section.classList.add("source")
    
    section.addEventListener("click", () => {
      window.location.href = source.url
    })
    
    section.innerHTML += `
    <div class="infos">
      <span>${source.country.toUpperCase()}</span>
      <span>${source.language.toUpperCase()}</span>
    </div>
    `
    
    let title = document.createElement("h2")
    title.innerText = source.name
    
    let description = document.createElement("p")
    description.innerText = source.description
    
    let category = document.createElement("span")
    category.innerText = source.category.capitalize()
    
    section.appendChild(title)
    section.appendChild(description)
    section.appendChild(category)
    
    let load = document.querySelector(".loading-circle")
    if (load) {
      load.remove()
      main.classList.remove("loading")
    }
    
    main.appendChild(section)
  })
}