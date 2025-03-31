class Automobile {
    marca = ""
    modelo = ""
    anno = 0
    chilometraggio = 0

    constructor(marca, modelo, anno, chilometraggio) {
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
        this.chilometraggio = chilometraggio;
    }

    _controllaChilometri(limite = 100000) {
        if (this.chilometraggio > limite) {
            return `Attenzione! Il chilometraggio supera il limite di ${limite} km.`;
        }
        return `Il chilometraggio è sotto il limite di ${limite} km.`;
    }
}


class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modelo, anno, chilometraggio, autonomia) {
        super(marca, modelo, anno, chilometraggio)
        this.autonomia = autonomia
    }

    verificaChilometraggio() {
        const avviso = this._controllaChilometri();
        return `${avviso} Verifica effettuata per il veicolo elettrico.`;
    }

}

let auto1 = new Automobile("Opel", "E-Mokka", 2021, 150000);
let auto2 = new Elettrica("Opel", "E-Mokka", 2021, 105000, 600)


console.log(auto1._controllaChilometri());
console.log(auto2.verificaChilometraggio());