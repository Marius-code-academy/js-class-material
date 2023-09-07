import { doStuff } from "../utils/index.js";

const postEndpoint = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  function sayGoodbye() {
    console.log("bye");
  }

  doStuff(sayGoodbye);
  try {
    const response = await fetch(postEndpoint);
    if (response.ok) {
      const posts = await response.json();
      return posts;
    } else {
      console.log("kazkas negerai");
    }
  } catch (error) {
    console.log("kazkas negerai");
  }
}
