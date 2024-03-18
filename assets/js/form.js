const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.querySelector('form');

const blogs = [];

function renderForm(){
  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
};

localStorage.setItem('blog', JSON.stringify(blog));
blogs.push(blog);
localStorage.setItem('blogs',JSON.stringify(blogs));
}

submitButton.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (usernameInput.value === '') {
    alert('Email cannot be blank');
  } else if (titleInput.value === '') {
    alert('Title cannot be blank');
  } else if (contentInput.value === '') {
    alert('Content cannot be blank');
  } else {
    //window.location.href ="blog.html";
    window.location.href ="https://travisjblack.github.io/Personal-Blog/blog.html";
   
  }
  
  renderForm();
});

