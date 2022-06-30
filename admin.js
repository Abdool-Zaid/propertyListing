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
AddToArray = () => {
  // id: 14,
  // name: "Ajian",
  // atmosphere: "ample",
  // moons: "5",
  // tempRange: "habitable",
  // water: "liquid",
  // size: "large",
  // population: "colonial",
  // populationURL:
  //   "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(28).png",
  // image:
  //   "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(14).png",
  // price: (Math.rando
  let Array = localStorage.listing;
  let id = Array.length + 1;
  let name = prompt("enter planets name");
  let atmosphere = prompt("enter atmospheric condition");
  let moons = prompt("enter amount of moons");
  let tempRange = prompt("enter tempRange");
  let water = prompt("enter water state");
  let size = prompt("enter size");
  let population = prompt("enter population");
  let populationURL = prompt("species image url");
  let image = prompt("planet image url");
  let price = (Math.random() * 40000).toFixed(2);
  newPlanet ={

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
    } ;
      listing.push(newPlanet);
  localStorage.setItem("listing", JSON.stringify(listing));
  window.location.reload();
};
