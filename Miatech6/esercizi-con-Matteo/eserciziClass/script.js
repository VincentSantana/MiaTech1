class Rectangle {
    constructor(base, height){
        this.base = base
        this.height = height
    }

    getPerimeter(){
        return (this.base + this.height) * 2
    }
}

const rectangle1 = new Rectangle(5,3);
console.log(rectangle1)
console.log(rectangle1.getPerimeter())