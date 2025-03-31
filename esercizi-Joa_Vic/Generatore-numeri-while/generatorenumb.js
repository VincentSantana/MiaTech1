function generaFincheDieci() {
    let numero = 0; 

    while(numero !== 10) {
        console.log(numero); 
        numero = Math.round(Math.random() * 10); 

    }
    console.log(numero); 
}

generaFincheDieci();
