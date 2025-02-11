function creaContatore() {
    let contatore = 0;   

    return function() {
        contatore++;  
        return contatore;  
    };
}

const Chiamata = creaContatore();  

console.log(Chiamata()); 
console.log(Chiamata()); 
console.log(Chiamata()); 


