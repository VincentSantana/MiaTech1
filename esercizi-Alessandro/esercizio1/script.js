let controllaeta = prompt('inserire eta');
let eta = parseInt(controllaeta);

console.log(eta)

if (eta < 18){
    document.write("sei minorenne")
} else if (eta <=65 ) {document.write("sei un adulto")}
else { document.write("sei in eta da pensione")}
   