// creo una funzione in cui callback fa il lavoro di un return
function somman(valore1, valore2, callback){
   let risultato = valore1 + valore2;
   console.log("risultato somma: " + risultato);
//callback eseguito
   callback(risultato);
}

somman(7, 6, function() {
    console.log("operazione eseguita")
});