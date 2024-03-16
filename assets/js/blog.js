// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const backButton = document.querySelector('#backButton');
const list = document.querySelector('#blog-list');

let blogItems = localStorage.getItem('blog');
console.log(blogItems);
const data = JSON.parse(localStorage.getItem('blog'));
console.log(data);
let num = localStorage.length;
console.log(num);

const storedObject = localStorage.getItem('blog');
console.log(storedObject);
if(storedObject){
  const blog = JSON.parse(storedObject);

  const title = document.createElement('h4');
  title.innerHTML = (blog.title);
  const content = document.createElement('p');
  content.innerHTML = (blog.content);
  const user = document.createElement('p')
  user.innerHTML = (blog.username);

 list.appendChild(title);
 title.appendChild(content);
 content.appendChild(user);
}



// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('change', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

backButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href ="index.html";
});



