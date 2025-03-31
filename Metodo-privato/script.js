class Automobile {
    marca = ""
   modelo = ""
     anno = 0

     constructor(marca, modelo, anno){
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
     }

     descrizione() {
        return `Questa è una ${this.marca} ${this.modelo} del ${this.anno} ${this.autonomia}`;
          }

}


class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca , modelo, anno, autonomia){
        super(marca, modelo, anno)
        this.autonomia = autonomia
    }

    #calcolaEta() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    mostraEta() {
        const eta = this.#calcolaEta();
        return `L'auto ha ${eta} anni.`;
    }

}

let auto1 = new Automobile("Opel", "E-Mokka", 2021);
let auto2 = new Elettrica("Opel", "E-Mokka", 2021, 600)


console.log(auto2.mostraEta());