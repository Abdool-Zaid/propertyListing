let listing = JSON.parse(localStorage.getItem("listing"));
let retrievedList = localStorage.getItem("listing");
let RetrievedArray = JSON.parse(localStorage.getItem("listing"));
display = () => {
  document.querySelector("#target").innerHTML = "";
  JSON.parse(retrievedList).forEach((Planet) => {
    document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='EditItem()'  >
        <img src="${Planet.image}"  alt="PLanet IMage">  
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        <h1>${Planet.name}</h1>
        <div class ="subinfo">
        <p  >atmospheric conditions: ${Planet.atmosphere}</p>
        <p >Moons: ${Planet.moons}</p>
        <p >Weather: ${Planet.tempRange}</p>
        <p > water: ${Planet.water}</p>
        <p > Size: ${Planet.size}</p>
        <p > population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        </div>
        <div class ="editor">
        <button onclick="EditItem()" id="${Planet.id}">edit</button>
        <button onclick="deleteItem()" id="${Planet.id}">delete</button>
        </div>
        </div>
        `;
  });
};
display();
EditItem = () => {};
deleteItem = () => {
  listing = listing.filter((Planet) => {
    console.log(Planet);
    Planet.id !== this.id;
    console.log("running");
  });
  // localStorage.listing = 0;
  localStorage.setItem("listing", JSON.stringify(listing));
  display();
};
runAdd=()=>{
  document.querySelector("#target").innerHTML = "";
  document.querySelector("#target").innerHTML = `
  <form action="post " onsubmit="event.preventDefault()" id="addForm">
  <input type="text" placeholder="planet name" id="NewName">
  <input type="text" placeholder="atmosphere" id="NewAtmosphere">
  <input type="text" placeholder="moons" id="NewMoons">
  <input type="text" placeholder="tempRange" id="NewTempRange">
  <input type="text" placeholder="water" id="NewWater">
  <input type="text" placeholder="size" id="NewSize">
  <input type="text" placeholder="population" id="NewPopulation">
  <input type="text" placeholder="populationURL" id="NewPopulationURL">
  <input type="text" placeholder="image" id="NewImageURL">
  <button onclick="AddToArray()" type="submit">submit</button>
  </form>  
  `;
  
}
AddToArray = () => {

  let Array = JSON.parse(localStorage.listing);
  let id = Array.length + 1;
  let name = document.querySelector('#NewName').value;
  let atmosphere = document.querySelector('#NewAtmosphere').value;
  let moons = document.querySelector('#NewMoons').value;
  let tempRange =document.querySelector('#NewTempRange').value;
  let water = document.querySelector('#NewWater').value;
  let size = document.querySelector('#NewSize').value;
  let population = document.querySelector('#NewPopulation').value;
  let populationURL = document.querySelector('#NewPopulationURL').value;
  let image = document.querySelector('#NewImageURL').value
  let price = (Math.random() * 40000).toFixed(2);
  newPlanet = {
    id: id,
    name: name,
    atmosphere: atmosphere,
    moons: moons,
    tempRange: tempRange,
    water: water,
    size: size,
    population: population,
    populationURL: populationURL,
    image: image,
    price: price,
  };
  localStorage.clear();
  listing.push(newPlanet);
  localStorage.setItem("listing", JSON.stringify(listing));
  window.location.reload();
};
