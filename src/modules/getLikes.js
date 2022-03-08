const invAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nGXJb8jNMlAqNOxXKCnW/likes'

let likes = [];

const getLikes = async () => {
  const response = await fetch(invAPI);
  const data = await response.json();
  data.forEach(item => {
    likes.push(
      {
        item_id: item.item_id,
        likes: item.likes,
      },
    );
  });
  return likes;
};

export default getLikes;