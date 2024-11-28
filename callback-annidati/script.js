// Prima funzione che esegue una somma 
function somma(a, b, callback) {
    callback(a + b);
}

somma(7, 6, function(risultato) {
    //facendo il console su risultato si vede poi la somma dei valori
    console.log("risultato somma: " + risultato)
})

// Seconda funzione che esegue una moltiplicazione
function moltiplica(x, callback) {
    callback(x * 2);
}

moltiplica(7, function(risultatom) {
    //facendo il console su risultatom si vede poi la moltiplicazione dei valori
    console.log("risultato moltiplica: " + risultatom)
})

// Chiamata alle due funzioni in sequenza
somma(5, 4, function(risultatoSomma) {
    moltiplica(risultatoSomma, function(risultatoMoltiplicazione) {
        console.log("Risultato finale:", risultatoMoltiplicazione);
    });
});
