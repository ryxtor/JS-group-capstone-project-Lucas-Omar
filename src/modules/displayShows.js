import { getShows } from "./tvshowAPI";

const container = document.getElementById('container');

export const displayShows = () => {

getShows().then((data) => {
  data.forEach(show => {
    const title = document.createElement('h3');
    const textTitle = document.createTextNode(show.name);
    
    const image = document.createElement('img');
    image.setAttribute('src', show.image.medium);
    
    const card = document.createElement('div');
    card.classList = 'card';
    
    const comment = document.createElement('input');
    comment.setAttribute('type', 'button');
    comment.setAttribute('value', 'Comments');
    comment.id = `comments-${show.id}`;


    title.appendChild(textTitle);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(comment);
    container.appendChild(card);
    
  });
});
}