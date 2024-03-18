// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const backButton = document.querySelector('#backButton');
const list = document.querySelector('#blog-list');
document.getElementById("showpic").src="./assets/images/light mode.png";

const title = document.createElement('h4');
const content = document.createElement('p');
const user = document.createElement('p');




const storedObject = localStorage.getItem('blog');
console.log(storedObject);
if(storedObject){
  const blogNew = JSON.parse(storedObject);

  
  title.innerHTML = (blogNew.title);
  
  content.innerHTML = (blogNew.content);
 
  user.innerHTML = (blogNew.username);

 list.append(title);
 title.append(content);
 content.append(user);
 
}
title.setAttribute('style', 'color: red; border-bottom-style: solid;');
content.setAttribute('style', '');
user.setAttribute('style', '');



// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    document.getElementById("showpic").src="./assets/images/dark mode.png";
    container.setAttribute('class', 'light');
    
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    document.getElementById("showpic").src="./assets/images/light mode.png";
  }
});

backButton.addEventListener('click', function(event) {
  event.preventDefault();
  //window.location.href ="index.html";
  window.location.href = "https://travisjblack.github.io/Personal-Blog/index.html";
});
