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
    <div class="pop-up-text">
    <span class="close">&times;</span>
        <div class="img-details">
        <img src="${show.image.medium}"/>
        <div class="details">
        <h1>${show.name}</h1>
        <p class="genre">Genre: ${show.genres.join(', ')}</p>
        <p>Language: ${show.language}</p>
        <p>Date of release: ${show.premiered}</p>
        <p>Rating: ${show.rating.average}</p>
        </div>
        </div>
        <h3 data-item-id="${show.id}">Comments (0)</h3>
        <div class="comment">
          <ul data-id="${show.id}"></ul>
          <form id="${show.id}">
            <input type="text" class='username' placeholder="Username">
            <br>
            <textarea name="comment" id="" cols="30" rows="10" class='commentBody' placeholder="Add your comment"></textarea>
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

export {
  bgModal, preparePopUp, loadShow, displayComments,
};
