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


}


class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modelo, anno, chilometraggio, autonomia) {
        super(marca, modelo, anno, chilometraggio)
        this.autonomia = autonomia
    }

}

let auto1 = new Automobile("Ford", "Kuga", 2023, 1500);
let auto2 = new Elettrica("Opel", "E-Mokka", 2021, 1050, 600)
let auto3 = new Elettrica("Toyota", "Rav-4", 2025, 1050, 600)


console.log(auto1.aggiungiChilometri(150));  
console.log(auto1.aggiungiChilometri(200));
console.log(auto1.mostraContatoreChiamate());