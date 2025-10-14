import { fetchPosts } from "./modules/api.js";
import { renderPosts } from "./modules/ui.js";
import { setupFormHandler } from "./modules/handlers.js";

let postsArray = [];

const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("post-form");

async function init() {
    postsArray = await fetchPosts();
    renderPosts(postsArray);
    setupFormHandler(form, titleInput, bodyInput, postsArray);
}

init();