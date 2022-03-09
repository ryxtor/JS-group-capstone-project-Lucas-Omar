import getShows from './tvshowAPI.js';
import { like } from './getLikes.js';
import { addLike } from './addLikes.js';

const container = document.getElementById('container');

const displayShows = () => {
  getShows().then((data) => {
    data.forEach((show) => {
    // Create card
      const card = document.createElement('div');
      card.classList = 'card';
      // Create title
      const title = document.createElement('h3');
      const textTitle = document.createTextNode(show.name);
      // Create image
      const image = document.createElement('img');
      image.setAttribute('src', show.image.medium);
      image.setAttribute('alt', show.name);
      image.setAttribute('width', '210');
      image.setAttribute('heigth', '295');
      // Create comment button
      const comment = document.createElement('input');
      comment.setAttribute('type', 'button');
      comment.setAttribute('value', 'Comments');
      comment.id = `${show.id}`;
      comment.classList.add('comment-button');
      // Create likes icon
      const likes = document.createElement('i');
      likes.classList.add('fa-solid', 'fa-heart', 'fa-xl');
      // Create numbers of likes
      const nOfLikes = document.createElement('p');
      nOfLikes.id = `likes-${show.id}`;
      nOfLikes.textContent = '0';
      like.forEach((item) => {
        if (show.id === item.item_id) {
          nOfLikes.textContent = item.likes;
        }
      });
      // Like button
      likes.addEventListener('click', async () => {          
        const likeId = {
          item_id: show.id,
        };
        await addLike(likeId);
        likes.classList.add('heart');
      });
      // Create a container for title and likes
      const titleContainer = document.createElement('div');
      // Append everything
      title.appendChild(textTitle);
      titleContainer.appendChild(title);
      titleContainer.appendChild(nOfLikes);
      titleContainer.appendChild(likes);
      card.appendChild(image);
      card.appendChild(titleContainer);
      card.appendChild(comment);
      container.appendChild(card);
    });
  });
};

export default displayShows;