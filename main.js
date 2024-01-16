import './style.css'

async function fetchData() {
  const posts = await fetch('/api/fetchNotion')
    .then((res) => res.json())
    .then((data) => data.results)
    document.querySelector('.posts-wrapper').innerHTML = posts.map((post) => `
      <section class="post">
        <img src="${post.properties.Image.files[0].file.url}" />
        <h2>${post.properties.Name.title[0].plain_text}</h2>
        <p>${post.properties.Content.rich_text[0].text.content}</p>
        <a href="${post.properties.Link_url.url}">
            ${post.properties.Link_text.rich_text[0].text.content}
        </a>
      </section>
    `).join('')
}

fetchData()