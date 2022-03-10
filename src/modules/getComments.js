const getCommentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi4g7NV2Fb946BDtrkSF/comments?item_id=';
const postCommentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi4g7NV2Fb946BDtrkSF/comments';

const getComments = async (id) => {
  const response = await fetch(getCommentsAPI + id);
  const responseJson = await response.json();
  return responseJson;
};

const postComment = async (id, username, comment) => {
  await fetch(postCommentApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

export { getComments, postComment };