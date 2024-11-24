class Automobile {
    marca = ""
   modelo = ""
     anno = 0

     constructor(marca, modelo, anno){
        this.marca = marca
        this.modelo = modelo
        this.anno = anno
     }

     static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
        }
    }

}

class Camion extends Automobile {
   
    constructor(marca, modelo, anno, caricoMassimo) {
        super(marca, modelo, anno)
        this.caricoMassimo = caricoMassimo
        this.caricoAttuale = 0; 
    }

    carica(kg) {
        if (this.caricoAttuale + kg > this.caricoMassimo) {
            throw new Error("Impossibile caricare, il carico supera il massimo consentito!");
        }
        this.caricoAttuale += kg; 
        return `Carico aggiunto: ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`;
    }
}

let auto1 = new Automobile("Ford", "Mustang", 2023, 1000);
let camion1 = new Camion("Toyota", "Runner", 2023, 1000);

console.log(auto1 instanceof Automobile); 
console.log(camion1 instanceof Camion); 
console.log(auto1 instanceof Camion); 
console.log(camion1 instanceof Automobile); 

console.log(Automobile.verificaIstanza(auto1, Automobile)); 
console.log(Automobile.verificaIstanza(camion1, Camion));   
console.log(Automobile.verificaIstanza(auto1, Camion));    
