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
  let test = prompt("aaaaa");
};
