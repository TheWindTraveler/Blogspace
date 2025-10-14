const API_URL = "https://apis.scrimba.com/jsonplaceholder/posts";

export async function fetchPosts(limit = 5) {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.slice(0, limit);
}

export async function createPost(postData) {
    const options = {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(API_URL, options);
    return res.json();
}
