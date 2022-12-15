import _ from 'lodash';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contant.js';
import '../src/style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

const mainContent = document.getElementById('content');

mainContent.appendChild(menuPage());

const appendPage = (e) => {
  const id = e.target.id;
  if (id == 'home') {
    mainContent.innerHTML = '';
    mainContent.appendChild(homePage());
  } else if (id == 'menu') {
    mainContent.innerHTML = '';
    mainContent.appendChild(menuPage());
  } else if (id == 'contact') {
    mainContent.innerHTML = '';
    mainContent.appendChild(contactPage());
  }
};

homeButton.addEventListener('click', appendPage);
menuButton.addEventListener('click', appendPage);
contactButton.addEventListener('click', appendPage);
