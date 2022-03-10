const showsAPI = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(showsAPI);
  const showsData = await response.json();
  return showsData;
};

export default getShows;