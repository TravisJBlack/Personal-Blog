//gets html elements to be used
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.querySelector('form');

//
function renderForm(){
  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
};

const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

localStorage.setItem('blog', JSON.stringify(blog));
blogs.push(blog);
localStorage.setItem('blogs',JSON.stringify(blogs));
}

//set up submit button for a click and checks for input in every field then redirects to new html
submitButton.addEventListener('submit', function(event) {
  event.preventDefault();

  if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
    alert('Please complete form.');
  }  else {
    renderForm();
    window.location.href ="blog.html";
  }
  
});

