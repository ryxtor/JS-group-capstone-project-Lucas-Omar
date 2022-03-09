import { invAPI, getLikes, like } from './getLikes.js';

const addLike = async (likeId) => {
  await fetch(invAPI, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(likeId),
  });
  await getLikes();

  let likesCount = 0;
  like.forEach((item) => {
    if (likeId.item_id === item.item_id) {
      likesCount = item.likes;
    }
  });

  const heart = document.getElementById(`likes-${likeId.item_id}`);
  heart.textContent = `${likesCount}`;
};

export default addLike;