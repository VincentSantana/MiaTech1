class Automobile {
    marca = ""
    modelo = ""
    anno = 0
    chilometraggio = 0

    #contatoreChiamate = 0;

    constructor(marca, modelo, anno, chilometraggio) {
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
        this.chilometraggio = chilometraggio;
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    aggiungiChilometri(km) {
        if (km <= 0) {
            throw new Error("Il numero di chilometri da aggiungere deve essere positivo.");
        }

        this.chilometraggio += km;
        this.#incrementaContatore();
        return `Sono stati aggiunti ${km} km. Chilometraggio totale: ${this.chilometraggio} km.`;
    }

    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
    }

     get chilometraggioAttuale() {
        return `Chilometraggio attuale: ${this.chilometraggio} km.`;
    }

    // Setter per la proprietà chilometraggio
    set chilometraggioAttuale(nuovoChilometraggio) {
        if (nuovoChilometraggio < this.chilometraggio) {
            throw new Error(
                "Il chilometraggio non può essere diminuito. Deve essere maggiore o uguale al valore corrente."
            );
        }
        this.chilometraggio = nuovoChilometraggio;
    }
}

//nuova classe estesa ad Automobile
class Camion extends Automobile {
    autonomia = 0

    constructor(marca, modelo, anno, chilometraggio, autonomia) {
        super(marca, modelo, anno, chilometraggio)
        this.autonomia = autonomia
    }

}

let auto1 = new Automobile("Ford", "Kuga", 2023, 1500);

console.log(auto1.chilometraggioAttuale);
