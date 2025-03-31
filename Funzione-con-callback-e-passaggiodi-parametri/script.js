// Funzione callback
function moltiplica(x, callback) {
    callback(x * 4);
}

moltiplica(7, function(risultatom) {
    console.log("risultato moltiplica: " + risultatom)
})



