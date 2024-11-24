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

    static confrontaChilometri(auto1, auto2) {
        if (!(auto1 instanceof Automobile) || !(auto2 instanceof Automobile)) {
            throw new Error("Entrambi gli oggetti devono essere istanze della classe Automobile.");
        }

        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modelo} ${auto1.anno} ha più chilometri (${auto1.chilometraggio} km) rispetto a ${auto2.marca} ${auto2.modelo} ${auto2.anno} (${auto2.chilometraggio} km).`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modelo} ${auto2.anno} ha più chilometri (${auto2.chilometraggio} km) rispetto a ${auto1.marca} ${auto1.modelo} ${auto1.anno} (${auto1.chilometraggio} km).`;
        } else {
            return `${auto1.marca} ${auto1.modelo} ${auto1.anno} e ${auto2.marca} ${auto2.modelo} ${auto2.anno} hanno lo stesso chilometraggio (${auto1.chilometraggio} km).`;
        }
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


console.log(Automobile.confrontaChilometri(auto1, auto2));
console.log(Automobile.confrontaChilometri(auto3, auto2));