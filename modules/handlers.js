import { createPost } from "./api.js";
import { renderPosts } from "./ui.js";

export function setupFormHandler(form, titleInput, bodyInput, postsArray) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const newPost = {
            title: titleInput.value,
            body: bodyInput.value
        };

        const createdPost = await createPost(newPost);
        postsArray.unshift(createdPost);
        renderPosts(postsArray);
        form.reset();
    });
}
