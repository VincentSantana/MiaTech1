    //inicia la variable/ luego la condicion/ luego el incremento
for(let cont = 1; cont <=100; cont++){
    if(cont == 80){ //esto detiene el ciclo hasta el 80
        break;// detiene el ciclo pero si ponemos continue el ciclo continua pero el numero 80 se salta
    };

    document.write(cont + "");
};