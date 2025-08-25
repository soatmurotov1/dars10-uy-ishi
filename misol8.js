








const scores = new Set([
	["A", 100],
	["B", 14],
	["C", 9],
	["D", 28],
	["E", 145],
	["F", 12],
	["G", 3],
	["H", 10],
	["I", 200],
	["J", 100],
	["K", 114],
	["L", 100],
	["M", 25],
	["N", 450],
	["O", 80],
	["P", 2],
	["Q", 12],
	["R", 400],
	["S", 113],
	["T", 405],
	["U", 11],
	["V", 10],
	["W", 10],
	["X", 3],
	["Y", 210],
	["Z", 23],
])





let jami =0
function Name(name){
    let upper = name.toUpperCase()

    for(let i=0; i< upper.length; i++){
        let harf = upper[i]
        jami += scores([harf])|| 0;

    }
}


if(jami <= 60){
    console.log(`"NOT TOO GOOD"`);
    
}else if(jami <= 300){
    console.log(`"PRETTY GOOD"`);
    
}else if(jami <= 599){
    console.log(`"VERY GOOD"`);
    
}else if(jami >= 600){
    console.log(`"THE BEST"`);
    
}

console.log(scores)



