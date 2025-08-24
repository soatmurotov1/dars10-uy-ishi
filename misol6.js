











function afterYears(people, n){
    n = Math.abs(n)

    let natija = {}

    for(let a in people){
        natija[a] = people[a] + n

    }
    console.log(natija);
    
}

console.log(afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1));
