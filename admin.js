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
    <button class="deleteItem" id="${Planet.id}">delete</button>
    </div>
    </div>
    `;
  });
};
    display();
    EditItem = () => {};
    
    document.querySelectorAll(".deleteItem").forEach((event) => {
      event.onclick = (event) => {
        let targetID = event.currentTarget.id;
        console.log(targetID);
        console.log(listing);
        let leanArray= listing.splice(targetID-1,1)
        console.log(leanArray)
        console.log(listing);
        localStorage.clear()
        localStorage.setItem("listing", JSON.stringify(listing));
        document.querySelector("#target").innerHTML = "";
        document.querySelector("#target").innerHTML +=`
        <div class="deletedItem"  >
        <h1>${leanArray[0].name} has been deleted</h1>
        <h2>ID: ${leanArray[0].id}</h2>
        <img src="${leanArray[0].image}"  alt="PLanet IMage">  
      
        `;
        
        
      };
    });

runAdd = () => {
  document.querySelector("#target").innerHTML = "";
  document.querySelector("#target").innerHTML = `
  <form action="post " onsubmit="event.preventDefault()" id="addForm">
    <input type="text" placeholder="planet name" id="NewName">
    <select name="atmoshere" id="NewAtmosphere">
<option value="adequate">adequate</option>
<option value="minimal">minimal</option>
<option value="ample">ample</option>
<option value="none">none</option>
    </select>
    <input type="number" placeholder="moons" id="NewMoons">
    <select name="tempreture range" id="NewTempRange">
<option value="habitable">habitable</option>
<option value="high">high</option>
<option value="low">low</option>
<option value="extreme">extreme</option>
    </select>
    <select name="water" id="NewWater">
        <option value="liquid">liquid</option>
        <option value="solid">solid</option>
        <option value="gas">gas</option>
        <option value="none">none</option>
        <option value="ice">ice</option>
    </select>
    <select name="size" id="NewSize">
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="twin">twin</option>
    </select>
    <select name="population" id="NewPopulation">
        <option value="native">native</option>
        <option value="colonial">colonial</option>
        <option value="none">none</option>
    </select>
    <input type="text" placeholder="populationURL" id="NewPopulationURL">
    <input type="text" placeholder="image" id="NewImageURL">
    <button onclick="AddToArray()" type="submit">submit</button>
    </form>
  `;
};
AddToArray = () => {
  let Array = JSON.parse(localStorage.listing);
  let id = Array.length + 1;
  let name = document.querySelector("#NewName").value;
  let atmosphere = document.querySelector("#NewAtmosphere").value;
  let moons = document.querySelector("#NewMoons").value;
  let tempRange = document.querySelector("#NewTempRange").value;
  let water = document.querySelector("#NewWater").value;
  let size = document.querySelector("#NewSize").value;
  let population = document.querySelector("#NewPopulation").value;
  let populationURL = document.querySelector("#NewPopulationURL").value;
  let image = document.querySelector("#NewImageURL").value;
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
