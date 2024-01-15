import './style.css'

async function fetchData() {
  const posts = await fetch('/api/fetchNotion')
    .then((res) => res.json())
    .then((data) => data.results)
    document.querySelector('main').innerHTML = posts.map((post) => `
      <article>
        <h3>${post.properties.Name.title[0].plain_text}</h3>
      </article>
    `).join('')
}

fetchData()