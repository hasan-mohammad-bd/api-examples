const searchPlayer = () => {
  const inputField = document.getElementById("input-field");
  const inputFiledValue = inputField.value;
  const player = inputFiledValue;
  inputField.value = "";
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${player}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => getPlayer(data.player));
};

const getPlayer = (players) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  players.forEach((player) => {
    console.log(player);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${player.strThumb}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${player.strPlayer}</h5>
          <p class="card-text">${player.strDescriptionEN.slice(0, 200)}</p>
          <button onClick="getDetails('${
            player.idPlayer
          }')" class="btn btn-primary">Go somewhere</button>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

const getDetails = (playerId) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => playerDetails(data.players[0]));
};

const playerDetails = details =>{
    const detailsArea = document.getElementById("details-area")
    detailsArea.textContent = "";
    console.log(details);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${details.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${details.strDescriptionEN}</p>
    </div>
  </div>
    `
    detailsArea.appendChild(div);
}


