export const countCards = () => {
  const container = document.getElementById('container');
  const cards = container.querySelectorAll('.card');
  return cards.length;
};

export const displayCardCounter = () => {
  const cards = countCards();
  const counter = document.getElementById('shows');
  counter.textContent = `Tv Shows (${cards})`;
};