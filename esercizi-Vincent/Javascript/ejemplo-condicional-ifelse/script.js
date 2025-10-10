const ora = prompt("ingresa un'ora?");

//&& significa que se toma en consideracion los 2 casos
if (ora >= 6 && ora < 12) {
    document.write("buongiorno");
} else if (ora >= 12 && ora < 18) {
    document.write("buon pomeriggio");
} 
else {
    document.write("buona sera");
}