class Automobile {
    marca = ""
    modelo = ""
    anno = 0
    chilometraggio = 0

    constructor(marca, modelo, anno, chilometraggio) {
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
        this.chilometraggio = chilometraggio
    }

     aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    mostraChilometraggio() {
        return this.chilometraggio
    }
}

let auto1 = new Automobile("Opel", "E-Mokka", 2021, 11000);

auto1.aggiungiChilometri(2000);

console.log(auto1.mostraChilometraggio())
