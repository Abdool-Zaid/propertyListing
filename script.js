// const canvas = document.querySelector("#HUD");

// let ctx = canvas.getContext("2d");

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

let listing = JSON.parse(localStorage.getItem("listing"))
  ? JSON.parse(localStorage.getItem("listing"))
  : [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        name: "Xilogop",
        atmosphere: "ample",
        moons: "1",
        tempRange: "habbitable",
        water: "liquid",
        size: "medium",
        population: "native",
        populationURL:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/aliens/download.png",
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/propertyListing/main/assets/planetImages/download%20(20).png",
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ];
resetArray = () => {
  localStorage.setItem("listing", JSON.stringify(listing));

  console.log("reset complete");
};

let retrievedList = localStorage.getItem("listing");
let RetrievedArray = JSON.parse(localStorage.getItem("listing"));
display = () => {
  document.querySelector("#target").innerHTML = "";
  JSON.parse(retrievedList).forEach((Planet) => {
    document.querySelector("#target").innerHTML += `
    <div class="Item"   >
    <img src="${Planet.image}" alt="PLanet IMage">  
    <h1>${Planet.name}</h1>
    <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
    <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
    <img src="${Planet.populationURL}" alt="No lifeforms known">
    
    </div>
    `;
  });
};
display();
hireSpecies = () => {
  for (let i = 0; i <= RetrievedArray.length; i++) {
    if (document.querySelectorAll("#pop").textContent == "none") {
      console.log("no native lifeforms");
    }
  }
};

SortList = () => {
  // list.sort((a,b)=>{ return a.moons -b.moons})
  let selectOption = () => {
    return document.querySelector("#SortPlanets").value;
  };
  let sorttedArray = "tar";

  if (selectOption() == "moons") {
    sorttedArray = listing.sort((a, b) => {
      return a.moons - b.moons;
    });
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  } else if (selectOption() == "atmosphere") {
    sorttedArray = listing.sort((a, b) => (a.atmosphere > b.atmosphere ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else if (selectOption() == "name") {
    sorttedArray = listing.sort((a, b) => (a.name > b.name ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else if (selectOption() == "tempRange") {
    sorttedArray = listing.sort((a, b) => (a.tempRange > b.tempRange ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else if (selectOption() == "water") {
    sorttedArray = listing.sort((a, b) => (a.water > b.water ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else if (selectOption() == "size") {
    sorttedArray = listing.sort((a, b) => (a.size > b.size ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else if (selectOption() == "population") {
    sorttedArray = listing.sort((a, b) => (a.population > b.population ? 1 : -1));
    let retrievedList = sorttedArray;
    document.querySelector("#target").innerHTML = "";
    retrievedList.forEach((Planet) => {
      document.querySelector("#target").innerHTML += `
        <div class="Item"   >
        <img src="${Planet.image}" alt="PLanet IMage">  
        <h1>${Planet.name}</h1>
        <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
        <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
        <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
        <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
        <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
        <p class="subInfo" dir="rtl" id ='pop'> population: ${Planet.population}</p>
        <img src="${Planet.populationURL}" alt="No lifeforms known">
        
        </div>
        `;
    });
  }
  else{
    display()
  }
  //  console.log(listing)
};
