fetch("https://jsonplaceholder.typicode.com/comment")
  .then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      console.log("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err, "error Happened");
  });

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/post");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Kazkas negerai status: " + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();
