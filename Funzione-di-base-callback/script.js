// creo una funzione in cui callback fa il lavoro di un return
function somman(valore1, valore2, callback){
    callback(valore1 + valore2)
}

// asegnando i valori, metto poi la funzione dichiarando all'interno una variabile chiamata risultato che contiene il risultato dei valori
somman(7, 6, function(risultato) {
    //facendo il console su risultato si vede poi la somma dei valori
    console.log("risultato:" + risultato)
})