







function harflarni_uzunligi(soz){
    let words = soz.split(" ")

    words.map( word =>{
        if(word.length <= 2){
            console.log(word);
            
        }else{
            let boshi = word[0]
            let urta = word.length -2
            let ohori = word[word.length -1]
            console.log(`${boshi}${urta}${ohori}`);
            
        }
    })
}

let  soz = "Every developer likes to mix kubernetes and javascript";
harflarni_uzunligi(soz)