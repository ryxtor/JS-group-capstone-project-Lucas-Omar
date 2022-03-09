import './style.css';
import displayShows from './modules/displayShows.js';
import showPopUP from './modules/displayPopUp.js';

displayShows();

setTimeout(() => {
  const btns = document.querySelectorAll('.comment-button');
  btns.forEach((btn) => {
    btn.addEventListener('click', showPopUP);
  });
}, 1000);