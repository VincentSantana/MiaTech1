class Player{
    constructor(nombre, colorSombrero){
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;   
    }

    saltar(){}
    correr(){}
    saludar(){//descripcion
        return `Hola mi nombre es ${this.nombre} y mi color de sombrero es ${this.colorSombrero}`;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

let player1 = new Player('vincent', 'azul');
let player2 = new Player('jose', 'rojo');

console.log(player1);
console.log(player2);
console.log(player1.saludar());

// get
console.log(player1.nombre);

// set
player1.nombre = 'jose';
console.log(player1);

// creacion de subclases
class Pet extends Player{
    constructor(nombre, colorSombrero, colorPiel){
        super(nombre, colorSombrero);
        this.colorPiel = colorPiel;
    }

    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){//me permite cambiar el color de piel
        this._colorPiel = nuevoColorPiel;
    }
}

let pet1 = new Pet('Yoshi', 'invisible', 'verde');

console.log(pet1);
//get
console.log(pet1.nombre);