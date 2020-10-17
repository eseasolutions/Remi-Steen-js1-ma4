//Question 3

//Id
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

//API url
const url =
  `https://api.rawg.io/api/games/${id}`;

const gamesContainer = document.querySelector(".games-container");

//Function to get data from API
const getData = async () => {
  try {
    const response = await fetch(url);
    const results = await response.json();

    gamesContainer.innerHTML = "";
    gamesContainer.innerHTML = createItem(results);
  } catch (error) {
    gamesContainer.innerHTML = createError(error);
  }
};

//Call function to get data from API
getData();

//Reusable function to create Game Item (This reusable function could be separated into its own file)
const createItem = (gameInfo) => {
  return `<div class="game-details"><img src="${gameInfo.background_image}"></img><h3>${gameInfo.name}</h3><p>Rating: ${gameInfo.rating}</p><p>Tags: ${gameInfo.tags.length}</p><p>Description: ${gameInfo.description}</p></div>`;
};

//Reusable function to create error message (This reusable function could be separated into its own file)

const createError = (err) => {
  return `<div class="danger">An error occured when calling the API. Error: ${err}</div>`;
};
