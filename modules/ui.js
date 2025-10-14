export function renderPosts(posts) {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = posts
        .map(post => `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button>Read more</button>
            </div>
        `)
        .join("");
}
