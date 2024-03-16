const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

function createAndRenderBlog() {
    if (usernameInput.value === '') {
        displayMessage('error', 'Email cannot be blank');
      } else if (titleInput.value === '') {
        displayMessage('error', 'Password cannot be blank');
      } else if (contentInput.value === '') {
        displayMessage('error', 'Content cannot be blank');
      } else {
        displayMessage('success', 'blog submitted');
      }
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    //const blogs = JSON.parse(localStorage.getItem('blogs'));
    //blogs.push(blog);
    localStorage.setItem('blog',JSON.stringify(blog));
    console.log(blog);
}

createAndRenderBlog();

