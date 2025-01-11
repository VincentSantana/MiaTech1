let disco1 = {
    titolo: "Nel mezzo del cammin di nostra vita",
    autore: "Mario",    
    anno: 1920
};

let disco2 = {
    titolo: "Nella vita",
    autore: "Luigi",    
    anno: 1955
};

function disco(titolo, autore, anno){
    this.titolo = titolo
    this.autore = autore
    this.anno = anno
};

//cada vez que quiera crear un disco, basta crear una nueva variable con los valores del nuevo disco
let disco3 = new disco('beach house', 'jose jose', 2000);

console.log(disco3);

//crear clases con constructores

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

