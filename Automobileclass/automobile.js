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
        return `Questa è una ${this.marca} ${this.modelo} del ${this.anno}.`;
          }

}


let auto1 = new Automobile("Opel", "E-Mokka", 2021);

console.log(auto1.descrizione())