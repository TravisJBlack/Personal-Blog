const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.querySelector('form');

function createAndRenderBlog() {


   
}

submitButton.addEventListener('submit', function(event) {
  event.preventDefault();

  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
};

localStorage.setItem('blog', JSON.stringify(blog));

  
  if (usernameInput.value === '') {
    alert('Email cannot be blank');
  } else if (titleInput.value === '') {
    alert('Title cannot be blank');
  } else if (contentInput.value === '') {
    alert('Content cannot be blank');
  } else {
    window.location.href ="blog.html";
  }
});

