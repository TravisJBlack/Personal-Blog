const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

document.getElementById("showpic").src="./assets/images/light mode.png";

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
