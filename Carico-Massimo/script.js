class Automobile {
    marca = ""
   modelo = ""
     anno = 0

     constructor(marca, modelo, anno){
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
     }
}

//nuova classe estesa ad Automobile
class Camion extends Automobile {
   
    constructor(marca, modelo, anno, caricoMassimo) {
        super(marca, modelo, anno)
        this.caricoMassimo = caricoMassimo
        this.caricoAttuale = 0; 
    }

    descrizione() {
        return `Camion ${this.marca} ${this.modelo} dell'anno ${this.anno} con carico massimo di ${this.caricoMassimo} kg e carico attuale di ${this.caricoAttuale} kg`;
      }

    carica(kg) {
        if (this.caricoAttuale + kg > this.caricoMassimo) {
            throw new Error("Impossibile caricare, il carico supera il massimo consentito!");
        }
        this.caricoAttuale += kg; 
        return `Carico aggiunto: ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`;
    }
}

let camion1 = new Camion("Toyota", "Runner", 2023, 1000)

console.log(camion1.descrizione());
console.log(camion1.carica(100));
console.log(camion1.caricoMassimo);


