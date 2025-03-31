class Car {
    constructor(color,year,marchio,km){
        this.color = color;
        this.year = year;
        this.marchio = marchio;
        this.km = km;
    }
}

class Owner extends Car {
    constructor(name, surname){
        super(color,year,marchio,km)
        this.name = name;
        this.surname = surname;
    }
}

const car1 = new Car("red", 2024, "ford",5000, Vincent, Santana);

console.log(car1);

