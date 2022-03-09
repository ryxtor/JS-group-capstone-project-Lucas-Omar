import './style.css';
import displayShows from './modules/displayShows.js';
import showPopUP from './modules/displayPopUp.js';
import { getLikes } from './modules/getLikes.js';

getLikes().then(() => {
  displayShows();
});

setTimeout(() => {
  const btns = document.querySelectorAll('.comment-button');
  btns.forEach((btn) => {
    btn.addEventListener('click', showPopUP);
  });
}, 1000);