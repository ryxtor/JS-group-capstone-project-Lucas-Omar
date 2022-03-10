const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi4g7NV2Fb946BDtrkSF/comments?item_id=';

const getComments = async (id) => {
  const response = await fetch(commentAPI + id);
  const responseJson = await response.json();
  return responseJson;
};

export { commentAPI, getComments };