import {
  bgModal, preparePopUp, loadShow, displayComments,
} from './preparePopUp.js';
import { postComment } from './getComments.js';

export default function showPopUP(e) {
  loadShow(e.target.id)
    .then((data) => {
      preparePopUp(data);
      bgModal.style.display = 'block';
      document.querySelector('html').style.overflow = 'hidden';
      document.querySelectorAll('form').forEach((commentForm) => {
        commentForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const username = commentForm.querySelector('.username').value;
          const comment = commentForm.querySelector('.commentBody').value;
          const itemId = commentForm.id;
          postComment(itemId, username, comment);
          commentForm.querySelector('.username').value = '';
          commentForm.querySelector('.commentBody').value = '';
          displayComments(itemId, false, username, comment);
        });
      });
    })
    .then(() => {
      const bgModal = document.querySelector('.bg-modal');
      const close = document.querySelector('.close');
      close.addEventListener('click', () => {
        bgModal.style.display = 'none';
        document.querySelector('html').style.overflow = 'auto';
      });
    });
}
