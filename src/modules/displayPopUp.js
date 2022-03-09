import { bgModal, preparePopUp, loadShows } from './preparePopUp.js';

export default function showPopUP(e) {
  loadShows(e.target.id).then((data) => {
    preparePopUp(data);
  });
  bgModal.style.display = 'block';
  setTimeout(() => {
    const bgModal = document.querySelector('.bg-modal');
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      bgModal.style.display = 'none';
    });
  }, 1000);
}
