function giornoSettimana(numero) {
    let giorno;
    
    switch(numero) {
      case 1:
        giorno = "Lunedì";
        break;
      case 2:
        giorno = "Martedì";
        break;
      case 3:
        giorno = "Mercoledì";
        break;
      case 4:
        giorno = "Giovedì";
        break;
      case 5:
        giorno = "Venerdì";
        break;
      case 6:
        giorno = "Sabato";
        break;
      case 7:
        giorno = "Domenica";
        break;
      default:
        console.log("Inserisci un numero tra 1 e 7");
        return;
    }
    
    console.log(giorno);
  }
  

  giornoSettimana(5); 

  