// const canvas = document.querySelector("#HUD");

// let ctx = canvas.getContext("2d");

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

let listing = JSON.parse(localStorage.getItem("listing"))
  ? JSON.parse(localStorage.getItem("listing"))
  : [
      {
        id: 1,
        name: "Arceus",
        atmosphere: "minimal",
        moons: "3",
        tempRange: "habitable",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(11).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(1).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 2,
        name: "Khannis",
        atmosphere: "adequate",
        moons: "1",
        tempRange: "habitable",
        water: "liquid",
        size: "medium",
        population: "colonial",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download.png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(2).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 3,
        name: "Vellox",
        atmosphere: "ample",
        moons: "12",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(32).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(3).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 4,
        name: "Dreml",
        atmosphere: "none",
        moons: "11",
        tempRange: "low",
        water: "solid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(13).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(4).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 5,
        name: "Sx900t3",
        atmosphere: "none",
        moons: "0",
        tempRange: "extreme",
        water: "none",
        size: "small",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(12).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(5).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 6,
        name: "Rasenues",
        atmosphere: "ample",
        moons: "3",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "colonial",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(28).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(6).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 7,
        name: "Kretic",
        atmosphere: "minimal",
        moons: "2",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "none",
        populationURL: "",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(7).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 8,
        name: "Nikalum",
        atmosphere: "ample",
        moons: "3",
        tempRange: "habitable",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(27).png ",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(8).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 9,
        name: "Luxem",
        atmosphere: "minimal",
        moons: "2",
        tempRange: "low",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(26).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(9).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 10,
        name: "Tsubo",
        atmosphere: "minmal",
        moons: "1",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(38).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(10).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 11,
        name: "Umbrosphere",
        atmosphere: "minimal",
        moons: "0",
        tempRange: "extreme",
        water: "solid",
        size: "twin",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(2).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(11).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 12,
        name: "Xluf",
        atmosphere: "ample",
        moons: "33",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(37).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(12).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 13,
        name: "Cxici",
        atmosphere: "minimal",
        moons: "12",
        tempRange: "extreme",
        water: "ice",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(18).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(13).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 14,
        name: "Ajian",
        atmosphere: "ample",
        moons: "5",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "colonial",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(28).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(14).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 15,
        name: "Yrgaxa",
        atmosphere: "none",
        moons: "25",
        tempRange: "extreme",
        water: "none",
        size: "medium",
        population: "colonial",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(12).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(15).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 16,
        name: "Uubo",
        atmosphere: "ample",
        moons: "35",
        tempRange: "low",
        water: "ice",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(4).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(16).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 17,
        name: "Pcinol",
        atmosphere: "ample",
        moons: "1",
        tempRange: "habitable",
        water: "liquid",
        size: "small",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(17).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(17).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 18,
        name: "Meyido",
        atmosphere: "ample",
        moons: "2",
        tempRange: "habitable",
        water: "gas",
        size: "medium",
        population: "none",
        populationURL: "",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(18).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 19,
        name: "Cloacac",
        atmosphere: "ample",
        moons: "3",
        tempRange: "habitable",
        water: "ice",
        size: "small",
        population: "colonial",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(1).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(19).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 20,
        name: "Xilogop",
        atmosphere: "ample",
        moons: "1",
        tempRange: "habitable",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download.png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(20).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 21,
        name: "Venlo",
        atmosphere: "ample",
        moons: "2",
        tempRange: "high",
        water: "solid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(25).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(21).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 22,
        name: "Prometheus",
        atmosphere: "ample",
        moons: "4",
        tempRange: "habitable",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(10).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(22).png",
        price: (Math.random()*40000).toFixed(2),
      },
      {
        id: 23,
        name: "Jaxa",
        atmosphere: "ample",
        moons: "2",
        tempRange: "habitable",
        water: "liquid",
        size: "large",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download%20(34).png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download.png",
        price: (Math.random()*40000).toFixed(2),
      },
    ];
resetArray = () => {
  localStorage.setItem("listing", JSON.stringify(listing));
};
resetArray()


let retrievedList = localStorage.getItem("listing");
let RetrievedArray = JSON.parse(localStorage.getItem("listing"));
display = () => {
  document.querySelector("#target").innerHTML = "";
  JSON.parse(retrievedList).forEach((Planet) => {
    document.querySelector("#target").innerHTML += `
    <div class="Item"  onclick='BuyNow()'  >
    <img src="${Planet.image}"  alt="PLanet IMage">  
    <h1>${Planet.name}</h1>
    <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
    <p class="subInfo" dir="rtl" class='pop'> population: ${Planet.population}</p>
    <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
    <img src="${Planet.populationURL}" alt="No lifeforms known">
    
    </div>
    `;
  });
};
display();
hireSpecies = () => {
  for (let i = 0; i <= RetrievedArray.length; i++) {
    if (document.querySelectorAll(".pop").innerHTML == "none") {
      console.log(RetrievedArray.length);
    }
  }
};








FilterPlanets=()=>{
    let FilterOption= document.querySelector('#filter').value
    if(FilterOption!=='all'){

        document.querySelector('#target').innerHTML='';
            let specificView= listing.filter(Planet => Planet.tempRange == FilterOption);
        specificView.forEach((Planet)=>{

            document.querySelector('#target').innerHTML+=`
            <div class="Item"  onclick='BuyNow()'  >
            <img src="${Planet.image}"  alt="PLanet IMage">  
            <h1>${Planet.name}</h1>
            <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
    <p class="subInfo" dir="rtl" class='pop'> population: ${Planet.population}</p>
    <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
    <img src="${Planet.populationURL}" alt="No lifeforms known">
    
    </div>
    `;   
    
}); 

return specificView;


}
else{
  display()
  let specificView=listing
  
  return specificView;
}
}

SortList = () => {

  let selectOption = () => {
    return document.querySelector("#SortPlanets").value;
  };
  console.log(FilterPlanets())
  let sorttedArray = FilterPlanets();

  if (selectOption() == "moons") {
    sorttedArray = FilterPlanets().sort((a, b) => {
      return a.moons - b.moons;
    });
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 class="subInfo" dir="rtl">Moons: ${Planet.moons}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "atmosphere") {
    sorttedArray = FilterPlanets().sort((a, b) =>
      a.atmosphere > b.atmosphere ? 1 : -1
    );
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 dir="rtl">atmosphere: ${Planet.atmosphere}</h1>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "name") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.name > b.name ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <p class="subInfo" dir="rtl">atmospheric conditions: ${Planet.atmosphere}</p>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "tempRange") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.tempRange < b.tempRange ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1>Weather: ${Planet.tempRange}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "water") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.water > b.water ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1> water: ${Planet.water}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "size") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.size > b.size ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()'  >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1> Size: ${Planet.size}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "population") {
    sorttedArray = FilterPlanets().sort((a, b) =>
      a.population > b.population ? 1 : -1
    );
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 class ='pop'> population: ${Planet.population}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else {
    FilterPlanets()
  }
  //  console.log(listing)
};
// descending sort
SortListDesc = () => {
  
  let selectOption = () => {
    return document.querySelector("#SortPlanetsDEsc").value;
  };
  console.log(FilterPlanets())
  let sorttedArray = FilterPlanets();

  if (selectOption() == "moons") {
    console.log('running')
    sorttedArray = FilterPlanets().sort((a, b) => {
      return b.moons - a.moons;
    });
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 class="subInfo" dir="rtl">Moons: ${Planet.moons}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "atmosphere") {
    sorttedArray = FilterPlanets().sort((a, b) =>
      a.atmosphere < b.atmosphere ? 1 : -1
    );
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 dir="rtl">atmosphere: ${Planet.atmosphere}</h1>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "name") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.name < b.name ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <p class="subInfo" dir="rtl">atmospheric conditions: ${Planet.atmosphere}</p>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "tempRange") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.tempRange < b.tempRange ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1>Weather: ${Planet.tempRange}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "water") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.water < b.water ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1> water: ${Planet.water}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "size") {
    sorttedArray = FilterPlanets().sort((a, b) => (a.size < b.size ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item" onclick='BuyNow()'  >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1> Size: ${Planet.size}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl" class ='pop'> population: ${Planet.population}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "population") {
    sorttedArray = FilterPlanets().sort((a, b) =>
      a.population < b.population ? 1 : -1
    );
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"  onclick='BuyNow()' >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h1 class ='pop'> population: ${Planet.population}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else {
    FilterPlanets()
  }
  //  console.log(listing)
};

BuyNow = () => {
  console.log("purchased");
};

ToAdminPage = () => {
  let password = document.querySelector("#LogIn").value;
  if (password == "shepherd") {
    window.location.href = "./admin.html";
  }
};

searchPlanet=()=>{
  let SearchTerm= document.querySelector('#searchInput').value.toLowerCase();
  if(SearchTerm==''){
    alert(`enter a planet's name`)
  }
  else{
    document.querySelector('#target').innerHTML='';
    let item = listing.find(o => o.name.toLowerCase()=== SearchTerm)
    
    document.querySelector('#target').innerHTML=` <div id="empty">
    <h1>No Planet found</h1>
    </div>`;
    
    document.querySelector('#target').innerHTML=`
    <div class="Item"  onclick='BuyNow()'  >
    <img src="${item.image}"  alt="PLanet IMage">  
    <h1>${item.name}</h1>
    <h4 dir="rtl">atmospheric conditions: ${item.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${item.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${item.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${item.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${item.size}</p>
    <p class="subInfo" dir="rtl" class='pop'> population: ${item.population}</p>
    <p class="subInfo" dir="rtl"> JWT: ${item.price}</p>
    <img src="${item.populationURL}" alt="No lifeforms known">
    </div>
    `;

  }
}
navmenu=(event)=>{
  let contextMenu = document.querySelector('#navMenu');

  contextMenu.style.top=event.offsetY + 'px';
  contextMenu.style.left=event.offsetX + 'px';
  contextMenu.classList.toggle('active')
  console.log('y= ',event.offsetY)
  console.log('x= ', event.offsetX)
}

resetMenu=()=>{
  document.querySelector('#navMenu').classList.remove('active')
}