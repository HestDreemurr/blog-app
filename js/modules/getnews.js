let apiKey = "cef63f757bc3423081c6a14dcb7becf0"

async function getNews(url) {
  let response = await fetch(url)
  let news = await response.json()
  return news
}

async function getTopHeadlines(category = null) {
  let c = category ? `&category=${category}` : ""
  let news =
  getNews(`https://newsapi.org/v2/top-headlines?country=us${c}&apiKey=${apiKey}`)
  return news
}

async function getEverthing(query) {
  let news =
  getNews(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
  return news
}

async function getSources() {
  let sources =
  getNews(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
  return sources
}

export { getTopHeadlines, getEverthing, getSources }