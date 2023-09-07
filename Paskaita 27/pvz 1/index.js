import { getPosts } from "./fetchers/posts.js";
import { generatePosts as generatePostsHtml } from "./generators/posts.js";
import { addToHtml, doStuff } from "./utils/index.js";
const body = document.body;

function sayHello() {
  console.log("hello");
}

async function generatePosts() {
  const posts = await getPosts();
  const postsHtml = generatePostsHtml(posts);

  addToHtml(body, postsHtml);
}

doStuff(sayHello);

generatePosts();
