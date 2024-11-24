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

}
Automobile.prototype.saluta = function() {
    return `Ciao! Sono una ${this.marca} ${this.modelo} ${this.anno} ${this.autonomia}.`;
};

let auto1 = new Automobile("Opel", "E-Mokka", 2021);
let auto2 = new Elettrica("Opel", "E-Mokka", 2021, 600)


console.log(auto2.saluta());
console.log(auto1.saluta())