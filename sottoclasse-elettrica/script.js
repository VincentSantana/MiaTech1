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

    constructor(marca , modelo, anno, autonomia){
        super(marca, modelo, anno)

        this.autonomia = autonomia
    }

          ricarica(km) {
            if (km > 0) {
                this.autonomia += km;
            } else {
                console.log("Il valore dei chilometri deve essere positivo.");
            }
        }

        aumentabatteria() {
            return this.autonomia
        }

}

let auto1 = new Automobile("Opel", "E-Mokka", 2021, 652);

auto1.ricarica(85);

console.log(auto1.aumentabatteria());