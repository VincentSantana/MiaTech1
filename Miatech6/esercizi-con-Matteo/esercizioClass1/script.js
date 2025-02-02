//creo una classe per generare dei numer1

class Numeri {
    constructor(n){
        this.n = n;
        this.primo = [];
    }

    //questa funzione verifica se un numero è primo
    primoN(num){
        if(num < 2) return false
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0) return false
        }

        return true
    }
    //riempie l'array primo fino a raggiungere numeri primi
    generatore() {
        let num = 1;
        while(this.primo.length < this.n){
            if(this.primoN(num)){
                this.primo.push(num);
            }
            num += 2;// Solo numeri dispari, perché 2 è l'unico primo pari
        }
        return this.primo;
    }
}

const generare1 = new Numeri(3);
console.log(generare1.generatore())
const generare2 = new Numeri(10);
console.log(generare2.generatore())