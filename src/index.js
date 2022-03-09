import './style.css';
import displayShows from './modules/displayShows.js';
import { getLikes } from './modules/getLikes.js';

getLikes().then(() => {
  displayShows();
});
