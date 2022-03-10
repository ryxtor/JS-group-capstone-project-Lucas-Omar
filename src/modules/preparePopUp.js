import { getComments } from './getComments.js';

const bgModal = document.querySelector('.bg-modal');

const displayComments = (id, callApi = true, username = '', comment = '') => {
  const ul = document.querySelector(`[data-id="${id}"]`);
  const h3 = document.querySelector(`[data-item-id="${id}"]`);
  if (callApi) {
    getComments(id).then((data) => {
      data.forEach((comment) => {
        ul.innerHTML += `<li>${comment.username}: ${comment.comment}</li>`;
        h3.innerText = `Comments (${ul.childElementCount})`;
      });
    });
  } else {
    ul.innerHTML += `<li>${username}: ${comment}</li>`;
    h3.innerText = `Comments (${ul.childElementCount})`;
  }
};

const preparePopUp = (show) => {
  bgModal.innerHTML = `
    <div class="pop-up">
        <span class="close">x</span>
        <div class="pop-up-text">
        <img src="${show.image.medium}"/>
        <h1>${show.name}</h1>
        <p>genre: ${show.genres[0]}</p>
        <p>length: lorem ipsum</p>
        <h3 data-item-id="${show.id}">Comments (0)</h3>
        <div class="comment">
          <ul data-id="${show.id}"></ul>
          <form id="${show.id}">
            <input type="text" class='username'>
            <br>
            <textarea name="comment" id="" cols="30" rows="10" class='commentBody'></textarea>
            <br>
            <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
      `;
  displayComments(show.id);
};

const loadShow = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const showsData = await response.json();
  return showsData;
};

export { bgModal, preparePopUp, loadShow, displayComments };
