const bgModal = document.querySelector('.bg-modal');

const preparePopUp = (show) => {
  bgModal.innerHTML = `
    <div class="pop-up">
        <span class="close">x</span>
        <div class="pop-up-text">
        <img src="${show.image.medium}"/>
        <h1>${show.name}</h1>
        <p>genre: ${show.genres[0]}</p>
        <p>length: lorem ipsum</p>
        <h3>Comments</h3>
        <div class="comment">
          <ul>
            <li>That's cool</li>
            <li>I would like to buy it</li>
          </ul>
          <form>
            <input type="text">
            <br>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
            <br>
            <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
      `;
};

const loadShows = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const showsData = await response.json();
  return showsData;
};

export { bgModal, preparePopUp, loadShows };
