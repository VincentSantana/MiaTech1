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


}


class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modelo, anno, chilometraggio, autonomia) {
        super(marca, modelo, anno, chilometraggio)
        this.autonomia = autonomia
    }

}

let auto1 = new Automobile("Ford", "Kuga", 2023, 1500);



console.log(auto1.aggiungiChilometri(150));  
console.log(auto1.aggiungiChilometri(200));