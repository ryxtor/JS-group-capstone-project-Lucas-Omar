const showsAPI = "https://api.tvmaze.com/shows";

export const getShows = async () => {
  const response = await fetch(showsAPI);
  const showsData = await response.json();
  return showsData;
};