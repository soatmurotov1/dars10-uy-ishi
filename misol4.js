







let countries = new Set([
  { Russian: 9 },
  { English: 91 },
  { French: 45 },
  { Spanish: 24 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Arabic: 25 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]);

function engKopTarqalgan(countries, son) {

    let array = Array.from(countries);

  let tillar = array.map(country => {
    let til = Object.keys(country)[0];
    let soni = country[til];
    return { til, count: soni };
  });

  tillar.sort((a, b) => b.count - a.count);

  return tillar.slice( 0, son);
}


console.log(engKopTarqalgan(countries, 1));
