// Access toggle switch HTML element
const backButton = document.querySelector('#backButton');
const list = document.querySelector('#blog-list');

//pulls blos from the storage 
let allBlogs = JSON.parse(localStorage.getItem('blogs'));

//runs through the array one index at a time and sets up new html elments for each item and styles them 
for(let i = 0; i < allBlogs.length; i++){

  const title = document.createElement('h4');
  const content = document.createElement('p');
  const user = document.createElement('p');
  

  title.innerHTML = (allBlogs[i].title);
  content.innerHTML = (allBlogs[i].content);
  user.innerHTML = (allBlogs[i].username);
  

  list.append(title);
  list.append(content);
  list.append(user);

  title.setAttribute('style', 'margin: 0px 10px 0px 10px;  border-bottom-style: solid;');
  content.setAttribute('style','margin: 0px;margin-left: 20px; ');
  user.setAttribute('style', ' margin-left: 10px;');
  list.setAttribute('style', 'border-style: solid;')
  

}

//add functonallity to the back button to redirect to other html
backButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href ="index.html";
});
