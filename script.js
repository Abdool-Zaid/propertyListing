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
        name: "vellox",
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
        name: "dreml",
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
        name: "sx900t3",
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
        name: "rasenues",
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
        name: "kretic",
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
        name: "nikalum",
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
        name: "luxem",
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
        name: "tsubo",
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
        name: "umbrosphere",
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
        name: "xluf",
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
        name: "cxici",
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
        name: "ajian",
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
        name: "yrgaxa",
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
        name: "uubo",
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
        name: "pcinol",
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
        name: "meyido",
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
        name: "cloacac",
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
        name: "xilogop",
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
        name: "venlo",
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
        name: "prometheus",
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
        name: "jaxa",
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
display = () => {
  document.querySelector("#target").innerHTML = "";
  let RetrievedTaskArray = JSON.parse(localStorage.getItem("listing"));
  let retrievedList = localStorage.getItem("listing");
  JSON.parse(retrievedList).forEach((Planet) => {
    document.querySelector("#target").innerHTML += `
      <div class="Item"   >
      <img src="${Planet.image}" alt="PLanet IMage">  
      <h1>${Planet.name}</h1>
      <h2>${Planet.atsmosphere}</h2>
      <p class="subInfo" dir="rtl">${Planet.moons}</p>
      <p class="subInfo" dir="rtl">${Planet.tempRange}</p>
      <p class="subInfo" dir="rtl">${Planet.water}</p>
      <p class="subInfo" dir="rtl">${Planet.size}</p>
      <p class="subInfo" dir="rtl">${Planet.population}</p>
      <img src="${Planet.populationURL}" alt="No lifeforms known">

      </div>
      `;
  });
};

display();
